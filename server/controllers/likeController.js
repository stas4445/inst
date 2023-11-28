const ApiError = require("../error/ApiError");
const LikeService = require("../services/likeService");

const likeService = new LikeService();

class LikeController {
  async create(req, res, next) {
    try {
      const { userId, postId } = req.body;
      const like = await likeService.createLike({
        userId,
        postId,
      });
      return res.json(like);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next) {
    try {
      const likes = await likeService.getAllLikes();
      return res.json(likes);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const like = await likeService.getLikeById(id);
      return res.json(like);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async edit(req, res, next) {
    try {
      const { id } = req.params;
      const { userId, postId } = req.body;
      const like = await likeService.updateLike(id, {
        userId,
        postId,
      });
      return res.json("Лайк обновлен.");
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async remove(req, res, next) {
    try {
      const { id } = req.params;
      const like = await likeService.deleteLike(id);
      return res.json("Лайк успешно удален!");
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new LikeController();
