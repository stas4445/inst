const ApiError = require("../error/ApiError");
const FollowService = require("../services/followService");

const followService = new FollowService();

class FollowController {
  async create(req, res, next) {
    try {
      const { followingUserId, followedUserId } = req.body;
      const follow = await followService.createFollow({
        followingUserId,
        followedUserId,
      });
      return res.json(follow);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next) {
    try {
      const follows = await followService.getAllFollows();
      return res.json(follows);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const follow = await followService.getFollowById(id);
      return res.json(follow);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async edit(req, res, next) {
    try {
      const { id } = req.params;
      const { followingUserId, followedUserId } = req.body;
      const follow = await followService.updateFollow(id, {
        followingUserId,
        followedUserId,
      });
      return res.json("Подписка обновлена.");
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async remove(req, res, next) {
    try {
      const { id } = req.params;
      const follow = await followService.deleteFollow(id);
      return res.json("Подписка успешно удалена!");
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new FollowController();
