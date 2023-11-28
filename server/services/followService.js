const FollowRepository = require("../repositories/followRepository");

class FollowService {
  constructor() {
    this.followRepository = new FollowRepository();
  }

  async createFollow(followData) {
    return this.followRepository.createFollow(followData);
  }

  async getAllFollows() {
    return this.followRepository.getAllFollows();
  }

  async getFollowById(id) {
    return this.followRepository.getFollowById(id);
  }

  async updateFollow(id, newData) {
    return this.followRepository.updateFollow(id, newData);
  }

  async deleteFollow(id) {
    return this.followRepository.deleteFollow(id);
  }
}

module.exports = FollowService;
