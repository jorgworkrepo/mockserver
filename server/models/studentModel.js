const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
    {
        student: {
            type: String,
            required: [true, "a student must have a name"],
            unique: true,
            trim: true
        },
        birthday: {
            type: Date,
            required: [true, "birthday is required"],
        },
        mobil: {
            type: Number,
            unique: true
        },
        address: {
            street: String,
            city: String,
            zipCode: String
        },
        subjects: {
            type: [
                {
                    subject: {
                        type: String,
                        required: [true, "subject is required"],
                    },
                    startDate: Date,
                    endDate: Date
                }
            ]
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            select: false,
        },
    },
    {
        toJSON: {virtuals: true},
        toObject: {virtuals: true},
    },
);

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
