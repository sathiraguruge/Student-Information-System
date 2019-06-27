const ExamModel = require('../models/CosEnroll');

const CosEnrolllController = function () {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            ExamModel.findOne({StudentId: data.StudentId, CourseId: data.CourseId}).then(exam => {
                if (exam === null) {
                    const newExam = new ExamModel(data);
                    newExam.save().then(exam => {
                        resolve({status: 200, message: 'Enrollment Successfully Added!'});
                    }).catch(err => {
                        reject({status: 500, message: err})
                    });
                } else {
                    reject({status: 500, message: 'Enrollment already exists!'})
                }
            })
        })
    };

    this.remove = (StudentId, CourseId) => {
        return new Promise((resolve, reject) => {
            ExamModel.findOneAndDelete({StudentId: StudentId, CourseId: CourseId}).then((exam) => {
                if (exam === null)
                    resolve({status: 404, message: 'Enrollment not found'});
                else
                    resolve({status: 200, message: "Enrollment '" + StudentId + "' Successfully Deleted"});
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
                    resolve({status: 404, message: 'Enrollment not found'});
                else
                    resolve(exam);
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };
    // this.sendNotification = (username) => {
    //     return new Promise((resolve, reject) => {
    //         LecturerModel.find({Username: username}).then((lecturer) => {
    //             lecturer[0].Password = md5(lecturer[0].NIC);
    //             lecturer[0].save().then(() => {
    //                 MailService.sendMail(lecturer[0].Email, lecturer[0].FirstName, "Password Reset", "Password Reset", { "Username" : lecturer[0].Username, "Password" : lecturer[0].NIC}).then( data => {
    //                     resolve({status: 200, message: 'Password Reset Successfully !'});
    //                 }).catch( err => {
    //                     reject({status: 500, err});
    //                 });
    //             }).catch(err => {
    //                 reject({status: 500, err});
    //             })
    //         }).catch(err => {
    //             reject({status: 500, err});
    //         })
    //     })
    // };
};

module.exports = new CosEnrolllController();