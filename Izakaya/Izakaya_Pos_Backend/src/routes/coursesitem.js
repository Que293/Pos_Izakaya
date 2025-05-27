const express = require('express');
const router = express.Router();
const { getAllCoursesItem,
    addCourseItem,
    updateCourseItem,
    deleteCourseItem,
    getAvailableMenuItems } = require('../controllers/coursesitem');

router.get('/courses/:courseId/item', getAllCoursesItem)
router.post('/courses/:courseId/item', addCourseItem)
router.put('/courses/:courseId/item/:menuItemId', updateCourseItem)
router.delete('/courses/:courseId/item/:menuItemId', deleteCourseItem)
router.get('/courses/:courseId/available-menu-items', getAvailableMenuItems)

module.exports = router;
