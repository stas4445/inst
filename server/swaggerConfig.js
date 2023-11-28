const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "🎧 Instagram for musicians",
      version: "1.0.0",
    },
  },
  components: {
    schemas: {
      User: {
        type: "object",
        properties: {
          id: { type: "integer" },
          email: { type: "string" },
          password: { type: "string" },
          name: { type: "string" },
          image: { type: "string" },
          role: { type: "string" },
        },
      },
      Post: {
        type: "object",
        properties: {
          id: { type: "integer" },
          cover: { type: "string" },
          music: { type: "string" },
          userId: { type: "integer" },
        },
      },
      Comment: {
        type: "object",
        properties: {
          id: { type: "integer" },
          text: { type: "string" },
          userId: { type: "integer" },
          postId: { type: "integer" },
        },
      },
      Like: {
        type: "object",
        properties: {
          id: { type: "integer" },
          userId: { type: "integer" },
          postId: { type: "integer" },
        },
      },
      Follow: {
        type: "object",
        properties: {
          id: { type: "integer" },
          followingUserId: { type: "integer" },
          followedUserId: { type: "integer" },
        },
      },
    },
  },

  apis: ["./routes/*.js"], 
};

const specs = swaggerJsdoc(options);

module.exports = specs;

//http://localhost:5000/api-docs/