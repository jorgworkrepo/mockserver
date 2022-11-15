const express = require('express');
const studentController = require('../controllers/studentController');

const router = express.Router();

const {
    createStudent,
    deleteStudent,
    getAllStudents,
    getStudent,
    updateTeacher,
    getStudentStats,
} = studentController;

router.route('/').get(getAllStudents).post(createStudent);

router.route('/students-stats').get(getStudentStats);

router.route('/:id').get(getStudent).patch(updateTeacher).delete(deleteStudent);

module.exports = router;
