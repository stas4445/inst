const ApiError = require("../error/ApiError");
const PostService = require("../services/postService");

const postService = new PostService();

class PostController {
  async create(req, res, next) {
    try {
      const { cover, music, userId } = req.body;

      const post = await postService.createPost({
        cover,
        music,
        userId,
      });
      return res.json(post);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next) {
    try {
      const posts = await postService.getAllPosts();
      return res.json(posts);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const post = await postService.getPostById(id);
      return res.json(post);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async edit(req, res, next) {
    try {
      const { id } = req.params;
      const { cover, music, userId } = req.body;

      const post = await postService.updatePost(id, {
        cover,
        music,
        userId,
      });
      return res.json("Пост обновлен.");
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async remove(req, res, next) {
    try {
      const { id } = req.params;
      const post = await postService.deletePost(id);
      return res.json("Пост успешно удален!");
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new PostController();
