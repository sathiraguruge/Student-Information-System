const LecturerModel = require('../models/Lecturer');
const StudentModel = require('../models/Student');
const AdminModel = require('../models/Admin');
const jwt = require('jsonwebtoken');
const config = require('../authentication/config');
const md5 = require('md5');

const UserLogin = function () {
    this.login = (username, password) => {
        return new Promise((resolve, reject) => {
            LecturerModel.findOne({Username: username}).then(lecturer => {
                if (lecturer != null && lecturer.Password.toString() === md5(password)) {
                    resolve(this.sendResponse('Success', lecturer.Username, 'Lecturer'));
                } else {
                    AdminModel.findOne({Username: username}).then(admin => {
                        if (admin != null && admin.Password.toString() === md5(password)) {
                            resolve(this.sendResponse('Success', admin.Username, 'Admin'));
                        } else {
                            StudentModel.findOne({SID: username}).then(student => {
                                if (student != null && student.Password.toString() === md5(password)) {
                                    resolve(this.sendResponse('Success', student.SID, 'Student'));
                                } else {
                                    reject(this.sendResponse("Fail", null, null));
                                }
                            }).catch(err => {
                                reject(this.sendResponse("Fail", null, null));
                            });
                        }
                    })
                }
            })
        })
    };

    this.generateToken = (Username) => {
        return jwt.sign({
                user: Username
            },
            config.secret, {
                expiresIn: "2h"
            });
    };

    this.sendResponse = (Status, Username, Type) => {
        let response;
        if (Status === 'Success') {
            if (Type === 'Lecturer') {
                response = {
                    login: 'Success',
                    Username: Username,
                    Type: 'Lecturer',
                    Token: this.generateToken(Username),
                }
            } else if (Type === 'Student') {
                response = {
                    login: 'Success',
                    Username: Username,
                    Type: 'Student',
                    Token: this.generateToken(Username),
                }
            } else if (Type === 'Admin') {
                response = {
                    login: 'Success',
                    Username: Username,
                    Type: 'Admin',
                    Token: this.generateToken(Username),
                }
            } else {
                response = {
                    login: 'Fail',
                    Username: Username,
                    Type: 'Admin',
                }
            }
        } else if (Status === "Fail") {
            response = {
                login: 'Fail',
                Username: '',
                Type: '',
            }
        }
        return response;
    }

};

module.exports = new UserLogin();