import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import UserService from '../../services/UserService'
import Clock from "react-digital-clock";

export default class NavigationBar extends Component {
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
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                {
                    (this.state.isLoggedIn && this.state.userType === "Lecturer") ? (
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/lecturerHome">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/">My Courses</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/lecturerNotification">My Notifications</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/lecturerProfile">My Profile</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/addExamItems">Add Exams & Assignments</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/manageExamItems">Manage Exams & Assignments</Link>
                            </li>
                        </ul>
                    ) : (this.state.isLoggedIn && this.state.userType === "Admin") ? (
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/adminHome">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/manageAdmin">Manage Admin Panel</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/manageStaff">Manage Staff Panel</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/manageStudent">Manage Students</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/manageCourse">Manage Courses</Link>
                            </li>
                        </ul>
                    ) : (this.state.isLoggedIn && this.state.userType === "Student") ? (
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/studentHome">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/studentAllCourses">Courses</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/studentCourses">My Courses</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/studentProfile">My Profile</Link>
                            </li>
                        </ul>
                    ): window.location.href = "/login"
                }
                <div style={{marginRight: "10px"}}>
                    <Clock/>
                </div>
                <div className="form-inline my-2 my-lg-0">
                    <ul className="navbar-nav mr-auto">
                        <div className="navbar-brand" onClick={this.userService.logout}>Log Out <i
                            className="fa fa-sign-out" style={{margin: '12px'}}/>
                        </div>
                    </ul>
                </div>
            </nav>)
    };
}