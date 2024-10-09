const swaggerJsDoc = require('swagger-jsdoc');
const swaggerOptions = {
  definition: {
    openapi: '3.0.0', // Specify the OpenAPI version
    info: {
      title: 'ATG API', // Title of your API
      version: '1.0.0', // Version of your API
      description: 'API documentation example using Swagger', // Description
    },
    servers: [
      {
        url: 'http://localhost:5000/api/v1/', // Your server URL
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to your API docs (where you define your endpoints)
};

const specs = swaggerJsDoc(swaggerOptions);
module.exports = specs;
