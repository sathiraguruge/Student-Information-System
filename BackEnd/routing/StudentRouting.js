const express = require('express');
const router = express.Router();
const StudentController = require('../controller/StudentController');

router.post('/', (req, res) => {
    StudentController.insert(req.body).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.get("/", (req, res) => {
    StudentController.getAll().then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.get("/:SID", (req, res) => {
    StudentController.get(req.params.SID).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});


router.get("/courses/:SID", (req, res) => {
    StudentController.getCourses(req.params.SID).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.get("/myCourse/:SID", (req, res) => {
    StudentController.myCourse(req.params.SID).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.put("/myProfile/:SID", (req, res) => {
    StudentController.updateProfile(req.params.SID, req.body).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.put("/password", (req, res) => {
    StudentController.changePassword(req.body.Username, req.body.OldPassword, req.body.NewPassword).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.patch("/resetPassword/:SID", (req, res) => {
    StudentController.resetPassword(req.params.SID).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.patch("/enroll/:SID", (req, res) => {
    StudentController.enrollCourse(req.params.SID, req.body.CourseId, req.body.EnrollmentKey).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.patch("/unEnroll/:SID", (req, res) => {
    StudentController.unEnrollCourse(req.params.SID, req.body.CourseId).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

module.exports = router;