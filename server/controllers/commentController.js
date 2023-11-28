const ApiError = require("../error/ApiError");
const CommentService = require("../services/commentService");

const commentService = new CommentService();

class CommentController {
  async create(req, res, next) {
    try {
      const { text, userId, postId } = req.body;
      const comment = await commentService.createComment({
        text,
        userId,
        postId,
      });
      return res.json(comment);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next) {
    try {
      const comments = await commentService.getAllComments();
      return res.json(comments);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const comment = await commentService.getCommentById(id);
      return res.json(comment);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async edit(req, res, next) {
    try {
      const { id } = req.params;
      const { text, userId, postId } = req.body;
      const comment = await commentService.updateComment(id, {
        text,
        userId,
        postId,
      });
      return res.json("Комментарий обновлен.");
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async remove(req, res, next) {
    try {
      const { id } = req.params;
      const comment = await commentService.deleteComment(id);
      return res.json("Комментарий успешно удален!");
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new CommentController();

//http://localhost:5000/api/ticket/findByDate?date=2023-11-10T00:00:00.000Z
