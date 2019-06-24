const express = require('express');
const router = express.Router();
const ExamController = require('../controller/CosEnrollController');

router.post('/', (req, res) => {
    ExamController.insert(req.body).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.delete("/:CourseId/:StudentId", (req, res) => {
    ExamController.remove(req.params.StudentId, req.params.CourseId).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.get("/allEnrollments", (req, res) => {
    ExamController.getAll().then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.get("/FilterByCourseId/:CourseId", (req, res) => {
    ExamController.getByCourseId(req.params.CourseId).then((data) => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    })
});

module.exports = router;