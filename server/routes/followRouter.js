const Router = require("express");
const router = new Router();
const followController = require("../controllers/followController");
const checkRole = require('../middleware/checkRoleMiddleware')

/**
 * @swagger
 * /api/follow:
 *   post:
 *     summary: Создать подписку
 *     tags: [Follow]
 *     description: Создает новую подписку
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               followingUserId:
 *                 type: integer
 *                 description: Пользователь 1
 *               followedUserId:
 *                 type: integer
 *                 description: Пользователь 2
 *     responses:
 *       '200':
 *         description: Успешно создана подписка
 */

router.post("/", followController.create);

/**
 * @swagger
 * /api/follow:
 *   get:
 *     summary: Получить все подписки
 *     tags: [Follow]
 *     description: Возвращает список всех подписок
 *     responses:
 *       '200':
 *         description: Успешный запрос. Возвращает список подписок
 */

router.get("/", followController.getAll);
router.get("/:id", followController.getOne);
router.put("/:id", followController.edit);

/**
 * @swagger
 * /api/follow/{id}:
 *   delete:
 *     summary: Удалить подписку по ID
 *     tags: [Follow]
 *     description: Удаляет подписку по его ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID подписки для удаления
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Успешный запрос. Подписка успешно удалена
 */

router.delete("/:id", followController.remove);

module.exports = router;