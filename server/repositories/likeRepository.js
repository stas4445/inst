const { Like } = require("../models/models");

class LikeRepository {
  async createLike(likeData) {
    return Like.create(likeData);
  }

  async getAllLikes() {
    return Like.findAll();
  }

  async getLikeById(id) {
    return Like.findOne({ where: { id } });
  }

  async updateLike(id, newData) {
    return Like.update(newData, { where: { id } });
  }

  async deleteLike(id) {
    return Like.destroy({ where: { id } });
  }
}

module.exports = LikeRepository;
