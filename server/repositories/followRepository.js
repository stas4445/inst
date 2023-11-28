const { Follow } = require("../models/models");

class FollowRepository {
  async createFollow(followData) {
    return Follow.create(followData);
  }

  async getAllFollows() {
    return Follow.findAll();
  }

  async getFollowById(id) {
    return Follow.findOne({ where: { id } });
  }

  async updateFollow(id, newData) {
    return Follow.update(newData, { where: { id } });
  }

  async deleteFollow(id) {
    return Follow.destroy({ where: { id } });
  }
}

module.exports = FollowRepository;
