const {studentObj} = require("./responsObject");

const code200 = {
    description: "success",
        content: {
    "application/json": {
        schema: {
            type: "array",
                example: [studentObj]
        }
    }
}
}
const code201 = {
    description: "success",
    content: {
        "application/json": {
            schema: {
                type: "object",
                properties: {
                    status: {
                        type: "string",
                        description: "success"
                    },
                    data: {
                        type: "object",
                        description: "student object"
                    }
                }
            }
        }
    }
}

const code400 = {
    description: 'invalid input, cast error, duplicate error',
    content: {
        "application/json": {
            schema: {
                type: "object",
                properties: {
                    status: {
                        type: "string",
                        description: "fail"
                    },
                    message: {
                        type: "string",
                        description: "fail message"
                    }
                }
            }
        }
    }
}

const code404 = {
    description: "Not Found",
    content: {
        "application/json": {
            schema: {
                type: "object",
                properties: {
                    status: {
                        type: "string",
                        description: "fail"
                    },
                    message: {
                        type: "string",
                        description: "fail message"
                    }
                }
            }
        }
    }

}

const code500 = {
    description: "Server Error",
    content: {
        "application/json": {
            schema: {
                type: "object",
                properties: {
                    status: {
                        type: "string",
                        description: "error"
                    },
                    message: {
                        type: "string",
                        description: "error message"
                    }
                }
            }
        }
    }
}

module.exports = {
    code200,
    code201,
    code400,
    code404,
    code500,
}
