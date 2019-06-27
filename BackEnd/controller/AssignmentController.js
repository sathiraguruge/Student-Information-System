const AssignmentModel = require('../models/Assignment');
// const md5 = require('md5');
const MailService = require('../services/MailService');
const CosEnrollModel = require('../models/CosEnroll');

const AssignmentController = function () {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            AssignmentModel.findOne({AssignmentId: data.AssignmentId, CourseId: data.CourseId}).then(assignment => {
                if (assignment === null) {
                    const newAssignment = new AssignmentModel(data);
                    newAssignment.save().then(assignment => {
                        resolve({status: 200, message: 'Assignment Successfully Added!'});
                        this.sendNotification(data.CourseId, data);
                    }).catch(err => {
                        reject({status: 500, message: err})
                    });
                } else {
                    reject({status: 500, message: 'Assignment Id already exists!'})
                }
            })
        })
    };

    this.update = (AssignmentId, CourseId, data) => {
        return new Promise((resolve, reject) => {
            AssignmentModel.findOneAndUpdate(({AssignmentId: AssignmentId, CourseId: CourseId}), data).then((exam) => {
                if (exam === null)
                    resolve({status: 404, message: 'Assignment not found'});
                else
                    resolve({status: 200, message: "Assignment '" + AssignmentId + "' Successfully Updated"});
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };

    this.remove = (AssignmentId, CourseId) => {
        return new Promise((resolve, reject) => {
            AssignmentModel.findOneAndDelete({AssignmentId: AssignmentId, CourseId: CourseId}).then((exam) => {
                if (exam === null)
                    resolve({status: 404, message: 'Assignment not found'});
                else
                    resolve({status: 200, message: "Assignment '" + AssignmentId + "' Successfully Deleted"});
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };

    this.getAll = () => {
        return new Promise((resolve, reject) => {
            AssignmentModel.find().then((assignments) => {
                resolve(assignments);
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };

    //get all assignments of a course id
    this.getByCourseId = (CourseId) => {
        return new Promise((resolve, reject) => {
            AssignmentModel.find({CourseId: CourseId}).then((assignment) => {
                if (assignment === null)
                    resolve({status: 404, message: 'Assignment not found'});
                else
                    resolve(assignment);
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };

    this.getByKeys = (AssignmentId, CourseId) => {
        return new Promise((resolve, reject) => {
            AssignmentModel.findOne({AssignmentId: AssignmentId, CourseId: CourseId}).then((assignment) => {
                if (assignment === null)
                    resolve({status: 404, message: 'Assignment not found'});
                else
                    resolve(assignment);
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };

    this.getByUser = (CreatedBy) => {
        return new Promise((resolve, reject) => {
            AssignmentModel.find({CreatedBy: CreatedBy}).then((exam) => {
                if (exam === null)
                    resolve({status: 404, message: 'Assignment not found'});
                else
                    resolve(exam);
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };

    this.sendNotification = (CourseId, data) => {
        return new Promise((resolve, reject) => {
            CosEnrollModel.find({CourseId: CourseId}).then((enrollment) => {
                for (i = 0; i < enrollment.length; ++i) {
                    MailService.sendMail(enrollment[i].Email, "Dummy", "Examination Update", "New Assignment", data).then(data => {
                        resolve({status: 200, message: 'Exam Notification Successfully !'});
                    }).catch(err => {
                        reject({status: 500, err});
                    });
                }

            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };
};

module.exports = new AssignmentController();