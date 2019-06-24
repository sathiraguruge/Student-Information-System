const LecturerModel = require('../models/Lecturer');
const md5 = require('md5');
const MailService = require('../services/MailService');

const LecturerController = function () {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            LecturerModel.findOne({StaffID: data.StaffID}).then(lecturer => {
                if (lecturer === null) {
                    const newLecturer = new LecturerModel(data);
                    newLecturer.Password = md5(data.Password);
                    newLecturer.save().then(lecturer => {
                        resolve({status: 200, message: 'Staff Member Successfully Added!'});
                    }).catch(err => {
                        reject({status: 500, message: err})
                    });
                } else {
                    reject({status: 500, message: 'Staff ID is already being used!'})
                }
            })
        })
    };

    this.update = (username, data) => {
        return new Promise((resolve, reject) => {
            LecturerModel.findOneAndUpdate(({Username: username}), data).then((lecturer) => {
                if (lecturer === null)
                    resolve({status: 404, message: 'Lecturer not found'});
                else
                    resolve({status: 200, message: "Lecturer '" + username + "' Successfully Updated"});
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };

    this.remove = (staffID) => {
        return new Promise((resolve, reject) => {
            LecturerModel.findOneAndDelete({StaffID: staffID}).then((lecturer) => {
                if (lecturer === null)
                    resolve({status: 404, message: 'Lecturer not found'});
                else
                    resolve({status: 200, message: "Staff Member of Staff ID '" + staffID + "' Successfully Deleted"});
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };

    this.getAll = () => {
        return new Promise((resolve, reject) => {
            LecturerModel.find().then((lecturers) => {
                resolve(lecturers);
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };

    this.get = (username) => {
        return new Promise((resolve, reject) => {
            LecturerModel.findOne({Username: username}).then((lecturer) => {
                if (lecturer === null)
                    resolve({status: 404, message: 'Lecturer not found'});
                else
                    resolve(lecturer);
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };

    this.changePassword = (username, oldPassword, newPassword) => {
        return new Promise((resolve, reject) => {
            LecturerModel.find({Username: username}).then((lecturer) => {
                if (lecturer[0].Password === md5(oldPassword)) {
                    lecturer[0].Password = md5(newPassword);
                    lecturer[0].save().then(() => {
                        resolve({status: 200, message: 'Password Changed Successfully !'});
                    }).catch(err => {
                        reject({status: 500, err});
                    })
                } else
                    resolve({status: 500, message: 'Invalid Password !'});
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };

    this.resetPassword = (username) => {
        return new Promise((resolve, reject) => {
            LecturerModel.find({Username: username}).then((lecturer) => {
                lecturer[0].Password = md5(lecturer[0].NIC);
                lecturer[0].save().then(() => {
                    MailService.sendMail(lecturer[0].Email, lecturer[0].FirstName, "Password Reset", "Password Reset", { "Username" : lecturer[0].Username, "Password" : lecturer[0].NIC}).then( data => {
                        resolve({status: 200, message: 'Password Reset Successfully !'});
                    }).catch( err => {
                        reject({status: 500, err});
                    });
                }).catch(err => {
                    reject({status: 500, err});
                })
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };
};

module.exports = new LecturerController();