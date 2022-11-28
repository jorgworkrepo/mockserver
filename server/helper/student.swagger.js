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
        200: {
            description: "OK",
            content: {
                "application/json": {
                    schema: {
                        type: "array",
                        example: [studentObj]

                    }
                }
            }
        }
    }
}

const createStudent = {
    tags: ["student"],
    summary: "Create a new student",
    operationId: "addStudent",
    responses: {
        201: {description: "student created"},
        400: {description: 'invalid input, object invalid'},
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
