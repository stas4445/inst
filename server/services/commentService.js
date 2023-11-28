const CommentRepository = require("../repositories/commentRepository");

class CommentService {
  constructor() {
    this.commentRepository = new CommentRepository();
  }

  async createComment(commentData) {
    return this.commentRepository.createComment(commentData);
  }

  async getAllComments() {
    return this.commentRepository.getAllComments();
  }

  async getCommentById(id) {
    return this.commentRepository.getCommentById(id);
  }

  async updateComment(id, newData) {
    return this.commentRepository.updateComment(id, newData);
  }

  async deleteComment(id) {
    return this.commentRepository.deleteComment(id);
  }
}

module.exports = CommentService;
