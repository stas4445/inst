const Joi = require("joi");
const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserService = require("../services/userService");

const userService = new UserService();

const registrationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  name: Joi.string().required(),
  image: Joi.string().required(),
  role: Joi.string().valid("USER", "ADMIN"),
});

const generateJwt = (id, email, name, image, role) => {
  return jwt.sign({ id, email, name, image, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(req, res, next) {
    try {
      const { error } = registrationSchema.validate(req.body);
      if (error) {
        throw next(
          ApiError.badRequest(
            "Ошибка ввода данных: " + error.details[0].message
          )
        );
      }

      const { email, password, name, image, role } = req.body;

      if (!email || !password) {
        return next(ApiError.badRequest("Некорректный email или password."));
      }

      const candidate = await userService.getByEmail(email);
      if (candidate) {
        return next(
          ApiError.badRequest("Пользователь с таким email уже существует")
        );
      }

      const hashPassword = await bcrypt.hash(password, 5);
      const user = await userService.registerUser({
        email,
        password: hashPassword,
        name,
        image,
        role,
      });
      const token = generateJwt(
        user.id,
        user.email,
        user.name,
        user.image,
        user.role
      );
      return res.json({ token });
    } catch (e) {
      next(ApiError.badRequest("Регистрация не удалась."));
    }
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await userService.getByEmail(email);
    if (!user) {
      return next(ApiError.internal("Пользователь не найден."));
    }

    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.internal("Указан неверный пароль."));
    }

    const token = generateJwt(
      user.id,
      user.email,
      user.name,
      user.image,
      user.role
    );
    return res.json({ token });
  }

  async checkAuth(req, res, next) {
    const token = generateJwt(
      req.user.id,
      req.user.email,
      req.user.name,
      req.user.image,
      req.user.role
    );
    return res.json({ token });
  }

  async getAll(req, res, next) {
    try {
      const users = await userService.getAllUsers();
      return res.json(users);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const user = await userService.getUserById(id);
      return res.json(user);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async edit(req, res, next) {
    try {
      const { id } = req.params;
      const { name, image } = req.body;

      const user = await userService.updateUser(id, { name, image });
      return res.json("Пользователь обновлен.");
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async remove(req, res, next) {
    try {
      const { id } = req.params;
      const user = await userService.deleteUser(id);
      return res.json("Пользователь успешно удален!");
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new UserController();
