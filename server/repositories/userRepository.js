const { User } = require('../models/models');

class UserRepository {
  async registerUser(userData) {
    return User.create(userData);
  }

  async getByEmail(email) {
   return User.findOne({ where: { email } });
 }

  async getAllUsers() {
    return User.findAll();
  }

  async getUserById(id) {
    return User.findOne({ where: { id } });
  }

  async updateUser(id, newData) {
    return User.update(newData, { where: { id } });
  }

  async deleteUser(id) {
    return User.destroy({ where: { id } });
  }
}

module.exports = UserRepository;