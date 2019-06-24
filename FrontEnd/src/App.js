import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from './components/login/login'
import RegisterStudent from './components/register/registerStudent'
import UserService from './services/UserService'
import LecturerHome from './components/lecturer/lecturerDashboard'
import LecturerProfile from './components/lecturer/profile'
import AddExam from "./components/lecturer/addExamItems";
import ManageExamItems from "./components/lecturer/manageExamItems";

import AdminHome from './components/admin/adminDashboard'
import ManageStaff from './components/admin/manageStaff'
import RegisterLecturer from './components/admin/registerLecturer'
import ManageAdmin from './components/admin/manageAdmin'
import RegisterAdmin from './components/admin/registerAdmin'
import ManageCourse from "./components/admin/manageCourse";
import AddCourse from "./components/admin/addCourse";
import ManageStudent from './components/admin/manageStudent'
import EditCourse from "./components/admin/editCourse";
import LecturerNotification from "./components/lecturer/lecturerNotification";

import StudentHome from './components/student/studentDashboard'
import StudentAllCourses from './components/student/courses'
import StudentProfile from './components/student/studentProfile'
import StudentCourses from './components/student/myCourses'

class App extends Component {
    constructor(props) {
        super(props);
        this.userService = new UserService();
        this.state = {
            isLoggedIn: this.userService.isLoggedIn,
            userType: this.userService.Type
        };
    }

    render() {
        return (
            <Router>
                <div>

                    <Route exact path="/login" component={Login}/>
                                <Route exact path="/registerStudent" component={RegisterStudent}/>
                    <Route exact path="/registerStudent" component={RegisterStudent}/>
                    <Route exact path="/lecturerHome" component={LecturerHome}/>
                    <Route exact path="/lecturerHome" component={LecturerHome}/>

                    <Route exact path="/lecturerHome" component={LecturerHome}/>
                    <Route exact path="/lecturerProfile" component={LecturerProfile}/>
                    <Route exact path="/lecturerNotification" component ={LecturerNotification}/>

                    <Route exact path="/adminHome" component={AdminHome}/>
                    <Route exact path="/manageStaff" component={ManageStaff}/>
                    <Route exact path="/registerLecturer" component={RegisterLecturer}/>
                    <Route exact path="/manageAdmin" component={ManageAdmin}/>
                    <Route exact path="/registerAdmin" component={RegisterAdmin}/>
                    <Route exact path="/manageCourse" component = {ManageCourse}/>
                    <Route exact path="/addCourse" component = {AddCourse}/>
                    <Route exact path="/manageStudent" component = {ManageStudent}/>
                    <Route exact path="/editCourse/:id" component ={EditCourse}/>

                    <Route exact path="/studentHome" component = {StudentHome}/>
                    <Route exact path="/studentAllCourses" component = {StudentAllCourses}/>
                    <Route exact path="/studentProfile" component = {StudentProfile}/>
                    <Route exact path="/studentCourses" component = {StudentCourses}/>
                    <Route exact path="/addExamItems" component = {AddExam}/>
                    <Route exact path="/manageExamItems" component = {ManageExamItems}/>
                </div>
            </Router>
        );
    }
}

export default App;
