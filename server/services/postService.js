const PostRepository = require('../repositories/postRepository');

class PostService {
  constructor() {
    this.postRepository = new PostRepository();
  }

  async createPost(postData) {
    return this.postRepository.createPost(postData);
  }

  async getAllPosts() {
    return this.postRepository.getAllPosts();
  }

  async getPostById(id) {
    return this.postRepository.getPostById(id);
  }

  async updatePost(id, newData) {
    return this.postRepository.updatePost(id, newData);
  }

  async deletePost(id) {
    return this.postRepository.deletePost(id);
  }

}

module.exports = PostService;
