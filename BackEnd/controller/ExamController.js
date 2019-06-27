const ExamModel = require('../models/exam');
const MailService = require('../services/MailService');
const CosEnrollModel = require('../models/CosEnroll');

const ExamController = function () {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            ExamModel.findOne({ExamId: data.ExamId, CourseId: data.CourseId}).then(exam => {
                if (exam === null) {
                    const newExam = new ExamModel(data);
                    newExam.save().then(exam => {
                        resolve({status: 200, message: 'Exam Successfully Added!'});
                        this.sendNotification(data.CourseId, data);
                    }).catch(err => {
                        reject({status: 500, message: err})
                    });
                } else {
                    reject({status: 500, message: 'Exam Id is already exists!'})
                }
            })
        })
    };

    this.update = (ExamId, CourseId, data) => {
        return new Promise((resolve, reject) => {
            ExamModel.findOneAndUpdate(({ExamId: ExamId, CourseId: CourseId}), data).then((exam) => {
                if (exam === null)
                    resolve({status: 404, message: 'Exam not found'});
                else
                    resolve({status: 200, message: "Exam '" + ExamId + "' Successfully Updated"});
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };

    this.remove = (ExamId, CourseId) => {
        return new Promise((resolve, reject) => {
            ExamModel.findOneAndDelete({ExamId: ExamId, CourseId: CourseId}).then((exam) => {
                if (exam === null)
                    resolve({status: 404, message: 'Exam not found'});
                else
                    resolve({status: 200, message: "Exam '" + ExamId + "' Successfully Deleted"});
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };

    this.getAll = () => {
        return new Promise((resolve, reject) => {
            ExamModel.find().then((exams) => {
                resolve(exams);
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };

    this.getByCourseId = (CourseId) => {
        return new Promise((resolve, reject) => {
            ExamModel.find({CourseId: CourseId}).then((exam) => {
                if (exam === null)
                    resolve({status: 404, message: 'Exam not found'});
                else
                    resolve(exam);
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };
    this.getByKeys = (ExamId, CourseId) => {
        return new Promise((resolve, reject) => {
            ExamModel.findOne({ExamId: ExamId, CourseId: CourseId}).then((exam) => {
                if (exam === null)
                    resolve({status: 404, message: 'Exam not found'});
                else
                    resolve(exam);
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };

    this.getByUser = (CreatedBy) => {
        return new Promise((resolve, reject) => {
            ExamModel.find({CreatedBy: CreatedBy}).then((exam) => {
                if (exam === null)
                    resolve({status: 404, message: 'Exam not found'});
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
                    MailService.sendMail(enrollment[i].Email, "Dummy", "Examination Update", "New Examination", data).then(data => {
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

module.exports = new ExamController();