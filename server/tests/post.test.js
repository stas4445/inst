const PostController = require('../controllers/PostController');
const PostService = require('../services/PostService');
const ApiError = require('../error/ApiError');

jest.mock('../services/PostService');

describe('PostController tests', () => {
  let mockResponse;
  const mockNext = jest.fn();
  const postId = 1;

  beforeEach(() => {
    mockResponse = {
      json: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // Тестирование создания поста
  test('Create a new post', async () => {
    const mockRequest = {
      body: {
        cover: 'post_cover.jpg',
        music: 'post_music.mp3',
        userId: 1,
      },
    };

    const mockCreatedPost = { id: postId, ...mockRequest.body };
    PostService.prototype.createPost.mockResolvedValue(mockCreatedPost);

    await PostController.create(mockRequest, mockResponse, mockNext);

    expect(PostService.prototype.createPost).toHaveBeenCalledWith(mockRequest.body);
    expect(mockResponse.json).toHaveBeenCalledWith(mockCreatedPost);
  });

  // Тестирование получения всех постов
  test('Get all posts', async () => {
    const mockPosts = [{ id: 1, cover: 'cover1.jpg' }, { id: 2, cover: 'cover2.jpg' }];
    PostService.prototype.getAllPosts.mockResolvedValue(mockPosts);

    await PostController.getAll({}, mockResponse, mockNext);

    expect(PostService.prototype.getAllPosts).toHaveBeenCalled();
    expect(mockResponse.json).toHaveBeenCalledWith(mockPosts);
  });

  // Тестирование получения одного поста по ID
  test('Get one post by ID', async () => {
    const mockRequest = {
      params: { id: postId },
    };
    const mockPost = { id: postId, cover: 'post_cover.jpg', music: 'post_music.mp3' };
    PostService.prototype.getPostById.mockResolvedValue(mockPost);

    await PostController.getOne(mockRequest, mockResponse, mockNext);

    expect(PostService.prototype.getPostById).toHaveBeenCalledWith(postId);
    expect(mockResponse.json).toHaveBeenCalledWith(mockPost);
  });

  // Тестирование обновления поста
  test('Update a post', async () => {
    const mockRequest = {
      params: { id: postId },
      body: {
        cover: 'updated_cover.jpg',
        music: 'updated_music.mp3',
        userId: 2,
      },
    };

    PostService.prototype.updatePost.mockResolvedValue('Updated');

    await PostController.edit(mockRequest, mockResponse, mockNext);

    expect(PostService.prototype.updatePost).toHaveBeenCalledWith(postId, mockRequest.body);
    expect(mockResponse.json).toHaveBeenCalledWith('Пост обновлен.');
  });

  // Тестирование удаления поста
  test('Delete a post', async () => {
    const mockRequest = {
      params: { id: postId },
    };

    PostService.prototype.deletePost.mockResolvedValue('Deleted');

    await PostController.remove(mockRequest, mockResponse, mockNext);

    expect(PostService.prototype.deletePost).toHaveBeenCalledWith(postId);
    expect(mockResponse.json).toHaveBeenCalledWith('Пост успешно удален!');
  });

  // Тестирование обработки ошибок
  test('Error handling in controller', async () => {
    const mockRequest = {
      body: {},
      params: { id: postId },
    };
    const errorMessage = 'An error occurred!';
    const mockError = new ApiError(errorMessage);

    PostService.prototype.createPost.mockRejectedValue(mockError);

    await PostController.create(mockRequest, mockResponse, mockNext);

    expect(mockNext).toHaveBeenCalledWith(mockError);
  });
});
