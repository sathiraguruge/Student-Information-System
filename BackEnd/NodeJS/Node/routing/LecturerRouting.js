const express = require('express');
const router = express.Router();
const LecturerController = require('../controller/LecturerController');

router.post('/', (req, res) => {
    LecturerController.insert(req.body).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.put("/:Username", (req, res) => {
    LecturerController.update(req.params.Username, req.body).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.delete("/:StaffID", (req, res) => {
    LecturerController.remove(req.params.StaffID).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.get("/", (req, res) => {
    LecturerController.getAll().then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.get("/:Username", (req, res) => {
    LecturerController.get(req.params.Username).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.put("/", (req, res) => {
    LecturerController.changePassword(req.body.Username, req.body.OldPassword, req.body.NewPassword).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.patch("/", (req, res) => {
    LecturerController.resetPassword(req.body.Username).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

module.exports = router;