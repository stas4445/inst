const Router = require("express");
const router = new Router();
const likeController = require("../controllers/likeController");
const checkRole = require("../middleware/checkRoleMiddleware");

/**
 * @swagger
 * /api/like:
 *   post:
 *     summary: Создать лайк
 *     tags: [Like]
 *     description: Создает новый лайк
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *                 description: Пользователь
 *               postId:
 *                 type: integer
 *                 description: Пост
 *     responses:
 *       '200':
 *         description: Успешно создан лайк
 */

router.post("/", likeController.create);

/**
 * @swagger
 * /api/like:
 *   get:
 *     summary: Получить все лайки
 *     tags: [Like]
 *     description: Возвращает список всех лайков
 *     responses:
 *       '200':
 *         description: Успешный запрос. Возвращает список лайков
 */

router.get("/", likeController.getAll);
router.get("/:id", likeController.getOne);
router.put("/:id", likeController.edit);

/**
 * @swagger
 * /api/like/{id}:
 *   delete:
 *     summary: Удалить лайк по ID
 *     tags: [Like]
 *     description: Удаляет лайк по его ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID лайка для удаления
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Успешный запрос. Лайк успешно удален
 */

router.delete("/:id", likeController.remove);

module.exports = router;

// checkRole('ADMIN'),
