import APIService from './APIService'
import UserService from './UserService'

export default class SISService {
    constructor() {
        this.apiService = new APIService();
        this.userService = new UserService();
    }

    //login method
    logUser(loginData) {
        return new Promise((resolve, reject) => {
            this.apiService.postLogin({Username: loginData.Username, Password: loginData.Password}).then(response => {
                this.userService.setUserDetails(response.data.login, response.data.Username, response.data.Type);
                this.userService.setTokenData(response.data.Token);
            }).catch(error => {
                console.log(error);
            })
        })
    }

    //-------------------------------------------------------Staff Functions ----------------------------------------------------------------------------
    addStaffMember(data) {
        return new Promise((resolve, reject) => {
            this.apiService.post('/lecturer', data, "Node").then(response => {
                resolve(response);
            }).catch(error => {
                reject(error)
            })
        })
    }

    getStaffList() {
        return new Promise((resolve, reject) => {
            this.apiService.get('/lecturer/', "Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }

    deleteStaffMember(staffID) {
        return new Promise((resolve, reject) => {
            this.apiService.delete('/lecturer/' + staffID, "Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }

    getMemberProfile(staffID) {
        return new Promise((resolve, reject) => {
            this.apiService.get('/lecturer/' + staffID, "Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }

    modifyMember(staffID, data) {
        return new Promise((resolve, reject) => {
            this.apiService.put('/lecturer/' + staffID, data, "Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }

    changePassword(data) {
        return new Promise((resolve, reject) => {
            this.apiService.put('/lecturer/', data, "Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }

    resetPassword(data) {
        return new Promise((resolve, reject) => {
            this.apiService.patch('/lecturer/', data, "Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }

    //-------------------------------------------------------Admin Functions ----------------------------------------------------------------------------
    addAdmin(data){
        return new Promise((resolve, reject) => {
            this.apiService.post('/admin/', data, "Node").then(response => {
                resolve(response);
            }).catch(error => {
                reject(error)
            })
        })
    }


    getAdminList() {
        return new Promise((resolve, reject) => {
            this.apiService.get('/admin/', "Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }

    deleteAdminMember(username) {
        return new Promise((resolve, reject) => {
            this.apiService.delete('/admin/' + username, "Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }

    //------------------------------------------------------Student Functions ---------------------------------------------------------------------------
    addStudent(data) {
        return new Promise((resolve, reject) => {
            this.apiService.postRegister( data).then(response => {
                resolve(response);
            }).catch(error => {
                reject(error)
            })
        })
    }

    getStudentProfile(studentID) {
        return new Promise((resolve, reject) => {
            this.apiService.get('/student/' + studentID, "Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }

    modifyStudent(studentID, data) {
        return new Promise((resolve, reject) => {
            this.apiService.put('/student/myProfile/' + studentID, data, "Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }

    changeStudentPassword(data) {
        return new Promise((resolve, reject) => {
            this.apiService.put('/student/password', data, "Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }

    getStudentList() {
        return new Promise((resolve, reject) => {
            this.apiService.get('/student/', "Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }

    resetStudentPassword(studentID) {
        return new Promise((resolve, reject) => {
            this.apiService.patch('/student/resetPassword/'+ studentID, {},  "Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }

    enroll(studentID, data) {
        return new Promise((resolve, reject) => {
            this.apiService.patch('/student/enroll/'+ studentID, data,  "Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }

    unEnroll(studentID, data) {
        return new Promise((resolve, reject) => {
            this.apiService.patch('/student/unEnroll/'+ studentID, data,  "Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }

    getEnrolledCourses(studentID) {
        return new Promise((resolve, reject) => {
            this.apiService.get('/student/courses/'+ studentID,  "Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }
    //-------------------------------------------------------Email Functions ----------------------------------------------------------------------------
    sendEmail(data) {
        return new Promise((resolve, reject) => {
            this.apiService.post('/email', data, "Node").then(response => {
                resolve(response);
            }).catch(error => {
                reject(error)
            })
        })
    }

    //-------------------------------------------------------Exam & Assignment Functions ----------------------------------------------------------------------------
    addNewExam(data){
        return new Promise((resolve, reject) => {
            this.apiService.post('/exam/', data, "Node").then(response => {
                resolve(response);
            }).catch(error => {
                reject(error)
            })
        })
    }

    addNewAssignment(data){
        return new Promise((resolve, reject) => {
            this.apiService.post('/assignment/', data, "Node").then(response => {
                resolve(response);
            }).catch(error => {
                reject(error)
            })
        })
    }

    deleteExam(courseId, examId){
        return new Promise((resolve, reject) => {
            this.apiService.delete('/exam/' + courseId +'/' + examId, "Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }

    getLectureExams(CreatedBy) {
        return new Promise((resolve, reject) => {
            this.apiService.get('/exam/FilterByUser/' + CreatedBy, "Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }

    getLectureAssignments(CreatedBy) {
        return new Promise((resolve, reject) => {
            this.apiService.get('/assignment/FilterByUser/' + CreatedBy, "Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }

    deleteAssignment(courseId, assignmentId){
        return new Promise((resolve, reject) => {
            this.apiService.delete('/assignment/' + courseId +'/' + assignmentId, "Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }

    editAssignment(courseId, assignmentId, data) {
        return new Promise((resolve, reject) => {
            this.apiService.put('/assignment/' + courseId + '/' + assignmentId, data, "Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }
    getOneAssignment(CourseId, AssignmentId) {
        return new Promise((resolve, reject) => {
            this.apiService.get('/assignment/FilterByKeys/' + CourseId + '/' + AssignmentId, "Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }
}