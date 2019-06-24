const LecturerModel = require('../models/Lecturer');
const StudentModel = require('../models/Student');
const jwt = require('jsonwebtoken');
const config = require('../authentication/config');
const md5 = require('md5');
const axios = require('axios');

const UserLogin = function () {
    this.login = (username, password) => {
        return new Promise((resolve, reject) => {
            LecturerModel.findOne({Username: username}).then(lecturer => {
                if (lecturer != null && lecturer.Password.toString() === md5(password)) {
                    var token = jwt.sign({
                            user: username
                        },
                        config.secret, {
                            expiresIn: 150 * 60
                        });
                    resolve({
                        login: 'Success',
                        Username: lecturer.Username,
                        Type: 'Lecturer',
                        Token: token,
                    });
                } else {
                    axios.post("http://localhost:8080/admins/login", {
                        "userName": username,
                        "password": password
                    }).then(response => {
                        if (response.data.login === "Success") {
                            var token = jwt.sign({
                                    user: username
                                },
                                config.secret, {
                                    expiresIn: 150 * 60
                                });
                            resolve({
                                login: 'Success',
                                Username: username,
                                Type: 'Admin',
                                Token: token,
                            });
                        } else if (response.data.login === "Fail") {
                            StudentModel.findOne({SID: username}).then(student => {
                                if (student != null && student.Password.toString() === md5(password)) {
                                    var token = jwt.sign({
                                            user: username
                                        },
                                        config.secret, {
                                            expiresIn: 150 * 60
                                        });
                                    resolve({
                                        login: 'Success',
                                        Username: student.SID,
                                        Type: 'Student',
                                        Token: token,
                                    });
                                } else {
                                    reject(response.data)
                                }
                            }).catch(err => {
                                reject({
                                    "Type": "",
                                    "Username": "",
                                    "login": "Fail"
                                });
                            });
                        }
                    })
                }
            })
        })
    };
}

module.exports = new UserLogin();