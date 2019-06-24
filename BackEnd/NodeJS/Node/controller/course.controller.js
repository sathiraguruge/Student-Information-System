const express = require('express');
const courseModel = require("../models/course.model.schema");


const CourseController = function () {

    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            courseModel.findOne({CourseId: data.CourseId}).then(course => {
                if (course === null) {
                    const newCourse = new courseModel(data);
                    newCourse.save().then(data => {
                        resolve({status: 200, message: 'Course Successfully Added!'});
                    }).catch(err => {
                        reject({status: 500, message: err});
                    })
                } else {
                    reject({status: 500, message: 'Course is already Exist'});
                }
            })
        })
    };

    this.update = (CourseID, data) => {
        return new Promise((resolve, reject) => {
            courseModel.findOneAndUpdate(({CourseId: CourseID}), data).then((course) => {
                if (course === null)
                    resolve({status: 404, message: 'Course not found'});
                else
                    resolve({status: 200, message: "Course ID '" + CourseID + "' Successfully updated"});
            }).catch(err => {
                reject({status: 500, err});
            })
        });
    };

    this.delete = (CourseID) => {
        return new Promise((resolve, reject) => {
            courseModel.findOneAndRemove({CourseId: CourseID}).then(data => {
                if (data === null)
                    resolve({status: 404, message: 'Course Not Found'});
                else
                    resolve({status: 200, message: 'Course Successfully deleted'});
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    }

    this.getCourrseById = (CourseID) => {
        return new Promise((resolve, reject) => {
            courseModel.findOne({CourseId: CourseID}).then(data => {
                if (data === null)
                    resolve({status: 404, message: 'Course Not Found'});
                else
                    resolve({status: 200, data: data});

            }).catch(err => {
                reject({status: 500, message: err});
            })
        })
    }

    this.getAll = () => {
        return new Promise((resolve, reject) => {
            courseModel.find().then((courses) => {
                resolve(courses);
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };

    this.getCourseForNoticfication = (LecturerId) => {
        return new Promise((resolve, reject) => {
            courseModel.find({AcceptByLectureFlag: 0, InchargLecture: LecturerId}, function (err, docs) {
            }).then((courses) => {
                resolve(courses);
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    }

    this.updateCourseForNoticfication = (CourseID, data) => {
        return new Promise((resolve, reject) => {
            courseModel.find(({CourseId: CourseID})).then(course => {
                if (course === null)
                    resolve({status: 404, message: 'Course not found'});
                else {
                    console.log(course[0]);
                    console.log(data)
                    var courseFinal = {
                        CourseName: course[0].CourseName,
                        InchargLecture: course[0].InchargLecture,
                        CourseId: course[0].CourseId,
                        NumberOfEnrolledStudent: course[0].NumberOfEnrolledStudent,
                        Year: course[0].Year,
                        Semester: course[0].Semester,
                        Faculty: course[0].Faculty,
                        Department: course[0].Department,
                        CourseAddedDate: course[0].CourseAddedDate,
                        AcceptByLectureFlag: data.AcceptByLectureFlag
                    }
                    // course.AcceptByLectureFlag : 1;
                    courseModel.findOneAndUpdate(({CourseId: CourseID}), courseFinal).then(course1 => {
                        if (course1 === null)
                            resolve({status: 404, message: 'Course not found'});
                        else
                            resolve({
                                status: 200,
                                message: "Course ID '" + CourseID + "' Notification Successfully updated"
                            });
                    })
                }
            }).catch(err => {
                reject({status: 500, err});
            })
        });
    }


    this.getAccepted = () => {
        return new Promise((resolve, reject) => {
            courseModel.find({AcceptByLectureFlag: 1}).then((courses) => {
                resolve(courses);
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };
}

module.exports = new CourseController();
