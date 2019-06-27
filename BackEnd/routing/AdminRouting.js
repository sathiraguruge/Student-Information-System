const express = require('express');
const router = express.Router();
const AdminController = require('../controller/AdminController');

router.post('/', (req, res) => {
    AdminController.insert(req.body).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.get("/", (req, res) => {
    AdminController.getAll().then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.get("/:Username", (req, res) => {
    AdminController.get(req.params.Username).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.put("/:Username", (req, res) => {
    AdminController.update(req.params.Username, req.body).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.delete("/:Username", (req, res) => {
    AdminController.remove(req.params.Username).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});
//
// router.get("/myCourse/:SID", (req, res) => {
//     StudentController.myCourse(req.params.SID).then((data) => {
//         res.json(data)
//     }).catch(err => {
//         res.json(err);
//     })
// });
//

//
// router.put("/password", (req, res) => {
//     StudentController.changePassword(req.body.Username, req.body.OldPassword, req.body.NewPassword).then((data) => {
//         res.json(data)
//     }).catch(err => {
//         res.json(err);
//     })
// });
//
// router.patch("/resetPassword/:SID", (req, res) => {
//     StudentController.resetPassword(req.params.SID).then((data) => {
//         res.json(data)
//     }).catch(err => {
//         res.json(err);
//     })
// });
//
// router.patch("/enroll/:SID", (req, res) => {
//     StudentController.enrollCourse(req.params.SID, req.body.CourseId, req.body.EnrollmentKey).then((data) => {
//         res.json(data)
//     }).catch(err => {
//         res.json(err);
//     })
// });
//
// router.patch("/unEnroll/:SID", (req, res) => {
//     StudentController.unEnrollCourse(req.params.SID, req.body.CourseId).then((data) => {
//         res.json(data)
//     }).catch(err => {
//         res.json(err);
//     })
// });

module.exports = router;