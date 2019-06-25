const StudentModel = require('../models/Student');
const CourseModel = require('../models/course.model.schema');
const md5 = require('md5');
const MailService = require('../services/MailService');

var StudentController = function () {

    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            StudentModel.findOne({SID: data.SID}).then(student => {
                if (student === null) {
                    const student = new StudentModel({
                        FirstName: data.FirstName,
                        LastName: data.LastName,
                        SID: data.SID,
                        Password: data.NIC,
                        Email: data.Email,
                        Mobile: data.Mobile,
                        DoB: data.DoB,
                        NIC: data.NIC,
                        Faculty: data.Faculty,
                        Gender: data.Gender,
                        ImageURL: null
                    });

                    // for( i = 0 ; i < data.course.length ; ++i){
                    //     var courseId = data.course[i];
                    //     CourseModel.find({CourseId : courseId}).then( course => {
                    //         console.log(course[0].CourseName);
                    //         student.course = course[0]
                    //     })
                    // }
                    // for( i = 0 ; i < data.course.length ; ++i){
                    //     var courseId = data.course[i];
                    //     CourseModel.findById(courseId).then( course => {
                    //         // console.log(course[0].CourseName);
                    //         // student.course = course[0]
                    //         console.log(course)
                    //         student.course = course
                    //         student.save()
                    //     })
                    // }

                    student.Password = md5(data.NIC);
                    student.save().then(student => {
                        resolve({status: 200, message: 'Student Added Successfully'});
                        MailService.sendMail(student.Email, student.FirstName, "Registration", "Lecturer Registration", {
                            "Username": student.SID,
                            "Password": student.NIC
                        })
                    }).catch(err => {
                        reject({status: 500, message: err})
                    });
                } else {
                    reject({status: 500, message: 'Staff ID is already being used!'})
                }
            })
        });
    };

    this.getAll = () => {
        return new Promise((resolve, reject) => {
            StudentModel.find().then((lecturers) => {
                resolve(lecturers);
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };

    this.get = (StudentID) => {
        return new Promise((resolve, reject) => {
            StudentModel.findOne({SID: StudentID}).then((student) => {
                if (student === null)
                    resolve({status: 404, message: 'Student not found'});
                else
                    resolve(student);
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };

    this.getCourses = (StudentID) => {
        return new Promise((resolve, reject) => {
            StudentModel.findOne({SID: StudentID}).populate('Courses').then((student) => {
                if (student === null)
                    resolve({status: 404, message: 'Student not found'});
                else {
                    var courseArray = [];
                    for (var i = 0; i < student.Courses.length; i++) {
                        courseArray.push(student.Courses[i])
                    }
                    resolve(courseArray);
                }
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };

    this.updateProfile = (StudentID, data) => {
        return new Promise((resolve, reject) => {
            StudentModel.findOneAndUpdate(({SID: StudentID}), data).then((student) => {
                if (student === null)
                    resolve({status: 404, message: 'Student not found'});
                else
                    resolve({status: 200, message: "Student '" + StudentID + "' Successfully Updated"});
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };

    this.enrollCourse = (StudentID, courseID, enrollmentKey) => {
        return new Promise((resolve, reject) => {
            StudentModel.findOne({SID: StudentID}).then((student) => {
                if (student === null)
                    resolve({status: 404, message: 'Student not found'});
                else {
                    CourseModel.findOne({CourseId: courseID}).then(course => {
                        if (course === null) {
                            resolve({status: 500, message: "Invalid Course ID !"});
                        } else {
                            if (course.EnrollmentKey === enrollmentKey) {
                                student.Courses.indexOf(course._id) === -1 ? student.Courses.push(course._id) : reject({
                                    status: 500,
                                    message: "You have already Enrolled for " + course.CourseName
                                });
                                let courseVar = {
                                    Courses: student.Courses
                                };
                                StudentModel.findOneAndUpdate({_id: student._id}, courseVar).then((studentupdated) => {
                                    resolve({
                                        status: 200,
                                        message: "You have successfully Enrolled to " + course.CourseName
                                    });
                                }).catch(err => {
                                    resolve({status: 500, message: err});
                                })
                            } else
                                resolve({status: 500, message: "Invalid Enrollment Key !"});
                        }
                    })
                }
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };

    this.unEnrollCourse = (StudentID, courseID) => {
        return new Promise((resolve, reject) => {
            StudentModel.findOne({SID: StudentID}).then((student) => {
                if (student === null)
                    resolve({status: 404, message: 'Student not found'});
                else {
                    var index = student.Courses.indexOf(courseID);
                    if (index > -1) {
                        student.Courses.splice(index, 1);
                    }else{
                        reject({status: 404, message : "Course Not Found"});
                    }
                    let courseVar = {
                        Courses: student.Courses
                    };
                    StudentModel.findOneAndUpdate({_id: student._id}, courseVar).then((studentupdated) => {
                        resolve({
                            status: 200,
                            message: "You have successfully UnEnrolled"
                        });
                    }).catch(err => {
                        resolve({status: 500, message: err});
                    })
                }
            }).catch(err => {
                reject({status: 500, message : err});
            })
        })
    };

    this.myCourse = (SID) => {
        return new Promise((resolve, reject) => {
            StudentModel.find({SID: SID}).populate('course').exec().then(data => {
                resolve({status: 200, data: data})
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    };

    this.changePassword = (StudentID, oldPassword, newPassword) => {
        return new Promise((resolve, reject) => {
            StudentModel.find({SID: StudentID}).then((student) => {
                if (student[0].Password === md5(oldPassword)) {
                    student[0].Password = md5(newPassword);
                    student[0].save().then(() => {
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

    this.resetPassword = (studentID) => {
        return new Promise((resolve, reject) => {
            StudentModel.find({SID: studentID}).then((student) => {
                student[0].Password = md5(student[0].NIC);
                student[0].save().then(() => {
                    MailService.sendMail(student[0].Email, student[0].FirstName, "Password Reset", "Password Reset", {
                        "Username": student[0].SID,
                        "Password": student[0].NIC
                    }).then(data => {
                        resolve({status: 200, message: 'Password Reset Successfully !'});
                    }).catch(err => {
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


module.exports = new StudentController();