const {code200, code201, code204, code404, code500, code400} = require("../../documentation/statusCodes");
const studentSchema = require("./studentSchemaDoc");

const studentObj = {
    "student": {
        "address": {
            "street": "9204 Chetwyn",
            "city": "Medford",
            "zipCode": "TW85 3KK"
        },
        "name": "Garret Irizarry",
        "birthday": "1995-11-14T00:00:00.000Z",
        "email": "nicholasgarris21@gmail.com",
        "mobil": 872365,
        "gender": "male"
    },
    "education": {
        "name": "webdesign",
        "startDate": "2021-08-01T00:00:00.000Z",
        "endDate": "2023-07-01T00:00:00.000Z"
    },
    "studentAge": 27,
    "id": "6383267efefdb17380fe195b"
}

const studentStats =
    [
        {
            "numOfStudents": 2,
            "students": [
                "Jesenia Salisbury",
                "Dick Robledo"
            ],
            "education": "datamatiker"
        },
        {
            "numOfStudents": 2,
            "students": [
                "Alyssa Humes",
                "Wendi Macklin"
            ],
            "education": "multimedia"
        },
        {
            "numOfStudents": 2,
            "students": [
                "Garret Irizarry",
                "Hobert Putnam"
            ],
            "education": "webdesign"
        },
    ]


const listOfStudents = {
    tags: ["student"],
    summary: "Returns a list of all students",
    operationId: "findAll",
    responses: {
        200: code200("array", [studentObj]),
        404: code404,
        500: code500
    }
}

const createStudent = {
    tags: ["student"],
    summary: "Create a new student",
    operationId: "create",
    requestBody: {
        content: {
            "application/json": {
                schema: studentSchema
            }
        }
    },
    responses: {
        201: code201(studentObj),
        400: code400,
        500: code500
    }
}

const getUserById = {
    tags: ["student"],
    summary: "Get student by id",
    operationId: "findById",
    parameters: [{
        in: "path",
        name: "id",
        required: true,
        description: "student id",
        type: "string",
        example: "63845d0cbe895fdf791b1e86"
    }],
    responses: {
        200: code200("object", studentObj),
        404: code404,
        500: code500
    },
}

const deleteStudentById = {
    tags: ["student"],
    summary: "Delete student by id",
    operationId: "findByIdAndDelete",
    parameters: [{
        in: "path",
        name: "id",
        required: true,
        description: "student id",
        type: "string",
        example: "638514be98a44590bf87ad3c"
    }],
    responses: {
        204: code204,
        500: code500
    },
}

const updateStudentById = {
    tags: ["student"],
    summary: "Patch student by id",
    operationId: "findByIdAndUpdate",
    parameters: [{
        in: "path",
        name: "id",
        required: true,
        description: "student id",
        type: "string",
        example: "63845d0cbe895fdf791b1e89"
    }],
    requestBody: {
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        "student.address.street": {
                            type: "string",
                            example: "Lyngby Hovedgade 25A"
                        }
                    }
                }
            }
        }
    },
    responses: {
        200: code200("object", studentObj),
        500: code500
    },
}

const getStudentStats = {
    tags: ["student"],
    summary: "Get student statistics",
    operationId: "aggregate",
    parameters: [{
        in: "path",
        name: "year",
        required: true,
        description: "year of a specific semester",
        type: "string",
        example: "2021"
    }],
    responses: {
        200: code200("object", studentStats),
        404: code404,
        500: code500
    },
}


const studentRouteDoc = {
    "/api/v1/students": {
        get: listOfStudents,
        post: createStudent,
    },
    "/api/v1/students/{id}": {
        get: getUserById,
        delete: deleteStudentById,
        patch: updateStudentById,
    },
    "/api/v1/students/students-stats/{year}": {
        get: getStudentStats
    }
}

module.exports = studentRouteDoc;
