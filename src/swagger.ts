import swaggerAutogen from 'swagger-autogen'

const outputFile = '../dist/swagger.json'
const endpointsFiles = ['./src/routes/index.ts']

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, {})
