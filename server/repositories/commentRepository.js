const { Comment } = require("../models/models");

class CommentRepository {
  async createComment(commentData) {
    return Comment.create(commentData);
  }

  async getAllComments() {
    return Comment.findAll();
  }

  async getCommentById(id) {
    return Comment.findOne({ where: { id } });
  }

  async updateComment(id, newData) {
    return Comment.update(newData, { where: { id } });
  }

  async deleteComment(id) {
    return Comment.destroy({ where: { id } });
  }
}

module.exports = CommentRepository;
