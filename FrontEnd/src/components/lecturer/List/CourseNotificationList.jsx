import React,{Component} from 'react';
import CourseService from "../../../services/CourseService";
import UserService from "../../../services/UserService";
import OneCourseNotification from "./oneCourseNotification";

export default class CourseNotificationList extends Component{

    constructor(props) {
        super(props);
        this.userService = new UserService();
        this.state = {
            courses :[],
            username:this.userService.username
        };
        this.courseService = new CourseService()

        let username = this.userService.username;
    }
    componentDidMount() {
        this.courseService.getCourseNotification(this.state.username).then(response=>{
            this.setState({
                courses : response.data
            });
        }).catch(err=>{
            console.log(err);
        })
    }

    tableRow(){
        return this.state.courses.map(function (object,i) {
            return <OneCourseNotification obj={object} key={i}/>
        })
    }

    render(){
        return <div>
            <div className="tableClass">
                <h4>Notifications</h4>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Course ID</th>
                        <th>Course Name</th>
                        <th>Incharge Lecture</th>
                        <th>Year</th>
                        <th>Semester</th>
                        <th>Faculty</th>
                        <th>Department</th>
                        <th>Course Added Date</th>
                        <th>Enrolled Students</th>
                        <th>Lecturer Acceptance</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.tableRow()}
                    </tbody>
                </table>
            </div>
        </div>
    }
}