const Router = require("express");
const router = new Router();
const commentController = require("../controllers/commentController");
const checkRole = require('../middleware/checkRoleMiddleware')

/**
 * @swagger
 * /api/comment:
 *   post:
 *     summary: Создать комментарий
 *     tags: [Comment]
 *     description: Создает новый комментарий
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 description: Текст комментария
 *               userId:
 *                 type: integer
 *                 description: Владелец комментария
 *               postId:
 *                 type: integer
 *                 description: Пост
 *     responses:
 *       '200':
 *         description: Успешно создан комментарий
 */

router.post("/", commentController.create);

/**
 * @swagger
 * /api/comment:
 *   get:
 *     summary: Получить все комментарии
 *     tags: [Comment]
 *     description: Возвращает список всех комментариев
 *     responses:
 *       '200':
 *         description: Успешный запрос. Возвращает список комментариев
 */

router.get("/", commentController.getAll);

/**
 * @swagger
 * /api/comment/{id}:
 *   get:
 *     summary: Получить комментарий по ID
 *     tags: [Comment]
 *     description: Возвращает информацию о комментарии по его ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID комментария
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Успешный запрос. Возвращает информацию о комментарии
 */

router.get("/:id", commentController.getOne);

/**
 * @swagger
 * /api/comment/{id}:
 *   put:
 *     summary: Обновить комментарий по ID
 *     tags: [Comment]
 *     description: Обновляет информацию о комментарии по его ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID комментария для обновления
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 description: Текст комментария
 *               userId:
 *                 type: integer
 *                 description: Владелец комментария
 *               postId:
 *                 type: integer
 *                 description: Пост
 *     responses:
 *       '200':
 *         description: Успешный запрос. Возвращает обновленную информацию о комментарии
 */

router.put("/:id", commentController.edit);

/**
 * @swagger
 * /api/comment/{id}:
 *   delete:
 *     summary: Удалить комментарий по ID
 *     tags: [Comment]
 *     description: Удаляет комментарий по его ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID комментария для удаления
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Успешный запрос. Комментарий успешно удален
 */

router.delete("/:id", commentController.remove);

module.exports = router;
