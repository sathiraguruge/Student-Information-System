const express = require('express');
const router = express.Router();
const ExamController = require('../controller/ExamController');

router.post('/', (req, res) => {
    ExamController.insert(req.body).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.put("/:CourseId/:ExamId", (req, res) => {
    ExamController.update(req.params.ExamId, req.params.CourseId, req.body).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.delete("/:CourseId/:ExamId", (req, res) => {
    ExamController.remove(req.params.ExamId, req.params.CourseId).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.get("/allExams", (req, res) => {
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

router.get("/FilterByKeys/:CourseId/:ExamId", (req, res) => {
    ExamController.getByKeys(req.params.ExamId, req.params.CourseId).then((data) => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    })
});

router.get("/FilterByUser/:CreatedBy", (req, res) => {
    ExamController.getByUser(req.params.CreatedBy).then((data) => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    })
});

module.exports = router;