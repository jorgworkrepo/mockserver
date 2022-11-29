const studentRouteDoc = require("../routes/student/studentRouteDoc");
const student = require( "../routes/student/studentSchemaDoc");

const swaggerDocumentation = {
    openapi: "3.0.0",
    info: {
        title: "JsonServer API",
        version: "1.0.0",
        description: "REST API using express and mongodb/mongoose"
    },
    servers: [
        {
            url: "http://localhost:3000",
            description: "local server"
        }
    ],
    components:{
      schemas: {
          student
      },
    },
    tags: [
        {
            name: "student",
            description: "Student Route"
        }
    ],
    paths: {...studentRouteDoc}
}

module.exports = swaggerDocumentation;
