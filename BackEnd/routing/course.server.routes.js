const express = require('express');
const router = express.Router();
const CourseController = require('../controller/course.controller');


router.post('/addCourse', (req, res) => {
    CourseController.insert(req.body).then((data) => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    })
});

router.get('/getOneCourse/:CourseId', (req, res) => {
    CourseController.getCourrseById(req.params.CourseId).then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    })
});

router.put("/updateCourse/:CourseId", (req, res) => {
    CourseController.update(req.params.CourseId, req.body).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.delete('/deleteCourse/:CourseId', (req, res) => {
    CourseController.delete(req.params.CourseId).then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    })
});

router.get('/getAll', (req, res) => {
    CourseController.getAll().then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    })
});

router.get('/getCourseNotification/:Id', (req, res) => {
    CourseController.getCourseForNoticfication(req.params.Id).then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    })
});

router.get('/acceptedCourses', (req, res) => {
    CourseController.getAccepted().then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    })
});

router.put('/updateCourseNotification/:CourseId', (req, res) => {
    CourseController.updateCourseForNoticfication(req.params.CourseId, req.body).then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    })
});

module.exports = router;