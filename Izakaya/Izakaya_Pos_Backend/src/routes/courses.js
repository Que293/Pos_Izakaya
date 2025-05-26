const express = require('express');
const router = express.Router();
const { getAllCourses,
    getCourseByid,
    addCourse,
    updateCourse,
    deleteCourse,
    activateCourse } = require('../controllers/courses');

router.get('/courses', getAllCourses)
router.get('/courses/:id', getCourseByid)
router.post('/courses', addCourse)
router.put('/courses/:id', updateCourse)
router.delete('/courses/:id', deleteCourse)
router.put('/courses/:id/activate', activateCourse)

module.exports = router;