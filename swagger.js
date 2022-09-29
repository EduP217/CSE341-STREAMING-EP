const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'CSE341 | Streaming Checker 2022',
    description: 'localhost:3000',
  },
  host: 'cse341-streamingchecker-render.onrender.com',
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./index.js');
// });