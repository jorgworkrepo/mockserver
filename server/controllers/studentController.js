const Student = require('../models/studentModel');
const APIFeatures = require("../utils/apiFeatures");
const {query} = require("express");

exports.getAllStudents = async (req, res) => {
    try {

        // Build query
        const features = new APIFeatures(Student.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();

        const students = await features.query;

        // Send response
        res.status(200).json({
            status: 'success',
            results: students.length,
            data: {
                students: students,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message,
        });
    }
};

exports.getStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {student},
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });
    }
};

exports.createStudent = async (req, res) => {
    try {
        const newStudent = await Student.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {student: newStudent},
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
};

exports.updateTeacher = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
            new: true, // New document will be sent back
            runValidators: true,
        });
        res.status(200).json({
            status: 'succes',
            data: {
                student,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'succes',
            data: null,
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });
    }
};

exports.getStudentStats = async (req, res) => {
    try {

        const subject = req.query.subject;

        const stats = await Student.aggregate(
            [
                {
                    $unwind: "$subjects"
                },
                {
                    $match:
                        {
                            "subjects.subject": {$eq: subject}
                        }
                },
                {
                    $group: {
                        _id: subject,
                        numOfSubject: { $sum: 1 },
                        students: { $push: '$student'}
                    }
                },
                {
                    $addFields: { subject: '$_id'}
                },
                {
                    $project: { _id: 0}
                }
            ])

        // const limitFields = [];
        //
        // for (const stat of stats) {
        //     limitFields.push({student: stat.student, city: stat.address.city, subject: stat.subjects.subject})
        // }

        res.status(200).json({
            status: 'succes',
            data: stats
            // data: {result: limitFields.length, data: limitFields}
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });
    }

}





























