const {code200, code404, code500, code201, code400} = require("./statusCode.swagger");

const studentSchema = {
    type: "object",
    required: [
        "student",
        "education",
    ],
    properties: {
        student: {
            type: "object",
            required: [
                "name",
                "birthday",
                "email",
                "mobil",
                "gender",
                "address",
            ],
            properties: {
                name: {
                    type: "string"
                },
                birthday: {
                    type: "string",
                    format: "date",
                    description: "date of birth",
                    example: "2021-01-30"
                },
                email: {
                    type: "string"
                },
                mobil: {
                    type: "number"
                },
                gender: {
                    type: "string",
                    enum: ["male", "female", "other"]
                },
                address: {
                    type: "object",
                    properties: {
                        street: {
                            type: "string"
                        },
                        city: {
                            type: "string"
                        },
                        zipCode: {
                            type: "string"
                        }
                    }
                }
            }
        },
        education: {
            type: "object",
            required: [
                "name",
                "startDate",
                "endDate"
            ],
            properties: {
                name: {
                    type: "string",
                    example: "datamatiker",
                    enum: ['datamatiker', 'bachelor', 'multimedia', 'webdesign']
                },
                startDate: {
                    type: "string",
                    format: "date",
                    example: "2022-08-01",
                },
                endDate: {
                    type: "string",
                    format: "date",
                    example: "2024-01-31",
                },
            },
        }
    },
}

const listOfStudents = {
    tags: ["student"],
    summary: "A list of all students from db",
    operationId: "listOfStudents",
    responses: {
        200: code200,
        404: code404,
        500: code500
    }
}

const createStudent = {
    tags: ["student"],
    summary: "Create a new student",
    operationId: "addStudent",
    responses: {
        201: code201,
        400: code400,
        404: code404,
        500: code500
    },
    requestBody: {
        content: {
            "application/json": {
                schema: {...studentSchema}
            }
        }
    },
}


const studentRouteDoc = {
    "/api/v1/students": {
        get: listOfStudents,
        post: createStudent
    }
}

module.exports = studentRouteDoc;
