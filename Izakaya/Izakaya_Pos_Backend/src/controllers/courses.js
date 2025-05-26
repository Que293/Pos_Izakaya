const prisma = require('../config/prisma');

exports.getAllcourses = async (req, res) => {
    try {
        res.send('Hello from getAllcourses')
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server Error' })
    }
}

exports.getCourseByid = async (req, res) => {
    try {
        res.send('Hello from getCourseByid')
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server Error' })
    }
}


exports.addCourse = async (req, res) => {
    try {
        res.send('Hello from addCourse')
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server Error' })
    }
}

exports.updateCourse = async (req, res) => {
    try {
        res.send('Hello from updateCourse')
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server Error' })
    }
}

exports.deleteCourse = async (req, res) => {
    try {
        res.send('Hello from deleteCourse')
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server Error' })
    }
}

exports.activateCourse = async (req, res) => {
    try {
        res.send('Hello from activateCourse')
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server Error' })
    }
}