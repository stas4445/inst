const UserRepository = require('../repositories/userRepository');

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async registerUser(userData) {
    return this.userRepository.registerUser(userData);
  }

  async getByEmail(email) {
   return this.userRepository.getByEmail(email);
 }

  async getAllUsers() {
    return this.userRepository.getAllUsers();
  }

  async getUserById(id) {
    return this.userRepository.getUserById(id);
  }

  async updateUser(id, newData) {
    return this.userRepository.updateUser(id, newData);
  }

  async deleteUser(id) {
    return this.userRepository.deleteUser(id);
  }
}

module.exports = UserService;
