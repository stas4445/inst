const { Post } = require("../models/models");

class PostRepository {
  async createPost(postData) {
    return Post.create(postData);
  }

  async getAllPosts() {
    return Post.findAll();
  }

  async getPostById(id) {
    return Post.findOne({ where: { id } });
  }

  async updatePost(id, newData) {
    return Post.update(newData, { where: { id } });
  }

  async deletePost(id) {
    return Post.destroy({ where: { id } });
  }
}

module.exports = PostRepository;
