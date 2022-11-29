const code200 = (type, obj) => {
    return {
        description: "success",
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        status: {
                            type: "string",
                            example: "success"
                        },
                        data: {
                            type: type,
                            example: obj,
                        }
                    }
                }
            }
        }
    }
}

const code201 = (obj) => {
    return {
        description: "success",
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        status: {
                            type: "string",
                            example: "success"
                        },
                        data: {
                            type: "object",
                            example: obj
                        }
                    }
                }
            }
        }
    }
}

const code204 = {
    description: "success",
    content: {
        "application/json": {
            schema: {
                type: "object",
                properties: {
                    status: {
                        type: "string",
                        example: "success"
                    },
                    data: {
                        nullable: true,
                        example: "null"
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
    code204,
    code400,
    code404,
    code500,
}
