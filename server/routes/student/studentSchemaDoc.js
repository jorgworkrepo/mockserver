module.exports = {
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
                },
                email: {
                    type: "string",
                    format: "email"
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
            },
            example: {
                student: {
                    name: "Hans Jørgensen",
                    birthday: "2000-4-12",
                    email: "hans@mail.com",
                    mobil: 654321,
                    gender: "male",
                    address: {
                        street: "Kongevejen 6",
                        city: "Copenhagen",
                        zipCode: "1166"
                    }
                },
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
                    enum: ['datamatiker', 'bachelor', 'multimedia', 'webdesign']
                },
                startDate: {
                    type: "string",
                    format: "date",
                },
                endDate: {
                    type: "string",
                    format: "date",
                },
            },
            example: {
                education: {
                    name: "multimedia",
                    startDate: "2022-08-01",
                    endDate: "2024-06-31"
                }
            }
        }
    },
}

// module.exports = {
//     studentSchema
// }
