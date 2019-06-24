import APIService from "./APIService";


export default class CourseService {
    constructor (){
        this.apiService = new APIService();
    }

    addCourse(data){
        return new Promise((resolve, reject) => {
            this.apiService.post('/course/addCourse', data, "Node").then(response => {
                resolve(response);
            }).catch(error => {
                reject(error)
            })
        })
    }

    deleteCourse(courseId){
        return new Promise((resolve, reject) => {
            this.apiService.delete('/course/deleteCourse/' + courseId, "Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }

    getAllCourses(){
        return new Promise((resolve, reject) => {
            this.apiService.get('/course/getAll', "Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }

    getAcceptedCourses(){
        return new Promise((resolve, reject) => {
            this.apiService.get('/course/acceptedCourses', "Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }

    editCourse(courseId,data){
        return new Promise((resolve,reject)=>{
            this.apiService.put('/course/updateCourse/'+courseId,data,"Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        })
    }
    getOneCourse(courseId){
        return new Promise((resolve, reject) => {
            this.apiService.get('/course/getOneCourse/' + courseId, "Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }

    getCourseNotification(LecturerId){
        return new Promise((resolve, reject) => {
            this.apiService.get('/course/getCourseNotification/'+LecturerId, "Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }

    updateCourseForNotification(courseId,data){
        return new Promise((resolve,reject)=>{
            this.apiService.put('/course/updateCourseNotification/'+courseId,data,"Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        })
    }
}