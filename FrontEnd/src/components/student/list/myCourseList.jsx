import React, {Component} from 'react';
import OneCourse from "./OneMyCourse";
import SISService from "../../../services/SISService";
import QueueAnim from "rc-queue-anim";
import UserService from "../../../services/UserService";

export default class CourseList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            courses :[]
        };
        this.SISService = new SISService();
        this.userService = new UserService();
    }

    componentDidMount() {
        this.SISService.getEnrolledCourses(this.userService.username).then(response=>{
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
                <h4>Available Courses</h4>
                <table className="table">
                    <thead>
                    <tr>
                        <th><QueueAnim><div key="1">Course ID</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Course Name</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Incharge Lecture</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Year</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Semester</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Faculty</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Department</div></QueueAnim></th>
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
