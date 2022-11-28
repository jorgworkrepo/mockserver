const studentRouteDoc = require("./student.swagger");

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
        },
        {
            url: "http://production:3000",
            description: "production server"
        }
    ],
    tags: [
        {
            name: "student",
            description: "Student Route"
        }
    ],
    paths: {...studentRouteDoc}
}

module.exports = swaggerDocumentation;
