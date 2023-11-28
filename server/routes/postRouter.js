const Router = require("express");
const router = new Router();
const postController = require("../controllers/postController");
const checkRole = require("../middleware/checkRoleMiddleware");

/**
 * @swagger
 * /api/post:
 *   post:
 *     summary: Создать пост
 *     tags: [Post]
 *     description: Создает новый пост
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cover:
 *                 type: string
 *                 description: Обложка трека
 *               music:
 *                 type: string
 *                 description: Трек
 *               userId:
 *                 type: integer
 *                 description: Владелец поста
 *     responses:
 *       '200':
 *         description: Успешно создан пост
 */

router.post("/", postController.create);

/**
 * @swagger
 * /api/post:
 *   get:
 *     summary: Получить все посты
 *     tags: [Post]
 *     description: Возвращает список всех постов
 *     responses:
 *       '200':
 *         description: Успешный запрос. Возвращает список постов
 */

router.get("/", postController.getAll);

/**
 * @swagger
 * /api/post/{id}:
 *   get:
 *     summary: Получить пост по ID
 *     tags: [Post]
 *     description: Возвращает информацию о посте по его ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID поста
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Успешный запрос. Возвращает информацию о посте
 */

router.get("/:id", postController.getOne);

/**
 * @swagger
 * /api/post/{id}:
 *   put:
 *     summary: Обновить пост по ID
 *     tags: [Post]
 *     description: Обновляет информацию о посте по его ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID поста для обновления
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cover:
 *                 type: string
 *                 description: Обложка трека
 *               music:
 *                 type: string
 *                 description: Трек
 *     responses:
 *       '200':
 *         description: Успешный запрос. Возвращает обновленную информацию о посте
 */

router.put("/:id", postController.edit);

/**
 * @swagger
 * /api/post/{id}:
 *   delete:
 *     summary: Удалить пост по ID
 *     tags: [Post]
 *     description: Удаляет пост по его ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID поста для удаления
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Успешный запрос. Пост успешно удален
 */

router.delete("/:id", postController.remove);

module.exports = router;

// http://localhost:5000/api/doctor/findByLastName?lastName=Королев
// http://localhost:5000/api/doctor/findBySpeciality?specialityName=Хирург
