import React, {Component} from 'react';
import OneCourse from "./oneCourse";
import CourseService from "../../../services/CourseService";
import QueueAnim from "rc-queue-anim";

export default class CourseList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            courses :[]
        };
        this.courseService = new CourseService()
    }

    componentDidMount() {
        this.courseService.getAllCourses().then(response=>{
            this.setState({
                courses : response.data
            });
        }).catch(err=>{
            console.log(err);
        })
    }

    tableRow(){
        return this.state.courses.map(function (object,i) {
            return <OneCourse obj={object} key={i}/>
        })
    }
    render(){
        return <div>
            <div className="tableClass">
                <h4>Courses</h4>
                <table className="table">
                    <thead>
                    <tr>
                        <th><QueueAnim><div key="1">Course ID</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Course Name</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Enrollment Key</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">In Charge Lecture</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Year</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Semester</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Faculty</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Department</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Course Added Date</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Enrolled Students</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Lecturer Acceptance</div></QueueAnim></th>
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
