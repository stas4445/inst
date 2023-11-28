const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  name: { type: DataTypes.STRING },
  image: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Post = sequelize.define("post", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  cover: { type: DataTypes.STRING },
  music: { type: DataTypes.STRING },
});

const Comment = sequelize.define("comment", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  text: { type: DataTypes.STRING, allowNull: false },
});

const Like = sequelize.define("like", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Follow = sequelize.define("follow", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});


User.hasMany(Post); 
User.hasMany(Comment); 
User.hasMany(Like); 

Post.belongsTo(User); 
Post.hasMany(Comment); 
Post.hasMany(Like); 

Comment.belongsTo(User); 
Comment.belongsTo(Post); 

Like.belongsTo(User); 
Like.belongsTo(Post); 

Follow.belongsTo(User, { as: 'followingUser', foreignKey: 'followingUserId' }); 
Follow.belongsTo(User, { as: 'followedUser', foreignKey: 'followedUserId' }); 

module.exports = {
  User,
  Post,
  Comment,
  Like,
  Follow,
};
