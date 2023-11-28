const LikeRepository = require("../repositories/likeRepository");

class LikeService {
  constructor() {
    this.likeRepository = new LikeRepository();
  }

  async createLike(likeData) {
    return this.likeRepository.createLike(likeData);
  }

  async getAllLikes() {
    return this.likeRepository.getAllLikes();
  }

  async getLikeById(id) {
    return this.likeRepository.getLikeById(id);
  }

  async updateLike(id, newData) {
    return this.likeRepository.updateLike(id, newData);
  }

  async deleteLike(id) {
    return this.likeRepository.deleteLike(id);
  }
}

module.exports = LikeService;
