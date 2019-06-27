const express = require('express');
const router = express.Router();
const AssignmentController = require('../controller/AssignmentController');

router.post('/', (req, res) => {
    AssignmentController.insert(req.body).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.put("/:CourseId/:AssignmentId", (req, res) => {
    AssignmentController.update(req.params.AssignmentId, req.params.CourseId, req.body).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.delete("/:CourseId/:AssignmentId", (req, res) => {
    AssignmentController.remove(req.params.AssignmentId, req.params.CourseId).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.get("/allAssignments", (req, res) => {
    AssignmentController.getAll().then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.get("/FilterByCourseId/:CourseId", (req, res) => {
    AssignmentController.getByCourseId(req.params.CourseId).then((data) => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    })
});

router.get("/FilterByKeys/:CourseId/:AssignmentId", (req, res) => {
    AssignmentController.getByKeys(req.params.AssignmentId, req.params.CourseId).then((data) => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    })
});

router.get("/FilterByUser/:CreatedBy", (req, res) => {
    AssignmentController.getByUser(req.params.CreatedBy).then((data) => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    })
});

module.exports = router;