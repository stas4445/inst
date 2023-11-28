const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const checkRole = require('../middleware/checkRoleMiddleware')

/**
 * @swagger
 * /api/user/registration:
 *   post:
 *     summary: Регистрация пользователя
 *     tags: [User]
 *     description: Регистрирует нового пользователя
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               name:
 *                 type: string
 *               image:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Успешная регистрация пользователя
 */

router.post("/registration", userController.registration);

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: Вход пользователя
 *     tags: [User]
 *     description: Авторизирует пользователя
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Успешный вход пользователя
 */

router.post("/login", userController.login);
router.get("/auth", authMiddleware, userController.checkAuth);

/**
 * @swagger
 * /api/user:
 *   get:
 *     summary: Получить всех пользователей
 *     tags: [User]
 *     description: Возвращает список всех пользователей
 *     responses:
 *       '200':
 *         description: Успешный запрос. Возвращает список пользователей
 */

router.get("/", userController.getAll);

/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     summary: Получить пользователя по ID
 *     tags: [User]
 *     description: Возвращает информацию о пользователе по его ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID пользователя
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Успешный запрос. Возвращает информацию о пользователе
 */

router.get("/:id", userController.getOne);

/**
 * @swagger
 * /api/user/{id}:
 *   put:
 *     summary: Обновить пользователя по ID
 *     tags: [User]
 *     description: Обновляет информацию о пользователе по его ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID пользователя для обновления
 *         schema:
 *           type: string
 *       - in: body
 *         name: user
 *         description: Поля пользователя для обновления
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             image:
 *               type: string
 *     responses:
 *       '200':
 *         description: Успешный запрос. Возвращает обновленную информацию о пользователе
 */


router.put("/:id", userController.edit);

/**
 * @swagger
 * /api/user/{id}:
 *   delete:
 *     summary: Удалить пользователя по ID
 *     tags: [User]
 *     description: Удаляет пользователя по его ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID пользователя для удаления
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Успешный запрос. Пользователь успешно удален
 */

router.delete("/:id", userController.remove);

module.exports = router;
