import React, {Component} from 'react'
import OneExamItem from "./oneExamItem"
import SISService from '../../../services/SISService'
import QueueAnim from "rc-queue-anim";
import UserService from '../../../services/UserService';
import OneAssignmentItem from "./oneAssignmentItem";

export default class ExamItemList extends Component {
    constructor(props) {
        super(props);
        this.userService = new UserService();
        this.state = {
            exams: [],
            assignments:[],
            CreatedBy: this.userService.username
        };
        this.SISService = new SISService();
    }

    componentDidMount() {
        this.SISService.getLectureExams(this.state.CreatedBy).then(response => {
            this.setState({exams: response.data});
        }).catch(function (error) {
            console.log(error);
        });
        this.SISService.getLectureAssignments(this.state.CreatedBy).then(response => {
            this.setState({assignments: response.data});
        }).catch(function (error) {
            console.log(error);
        });
    }

    tableRow() {
        return this.state.exams.map(function (object, i) {
            return <OneExamItem obj={object} key={i}/>;
        })
    }

    tableRowSub() {
        return this.state.assignments.map(function (object, i) {
            return <OneAssignmentItem obj={object} key={i}/>;
        })
    }

    render() {
        return (
            <div>
            <div className="tableClass">
                <h4>Exams Created By Me</h4>
                <table className="table">
                    <thead>
                    <tr>
                        <th><QueueAnim><div key="1">Course</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Exam</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Title</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Type</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Total Marks</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">GPA Percentage</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Sched. Date</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Duration</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Created By</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Action</div></QueueAnim></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.tableRow()}
                    </tbody>
                </table>
            </div>
                <div className="tableClass">
                    <h4>Assignments Created By Me</h4>
                    <table className="table">
                        <thead>
                        <tr>
                            <th><QueueAnim><div key="1">Course</div></QueueAnim></th>
                            <th><QueueAnim><div key="1">Assignment</div></QueueAnim></th>
                            <th><QueueAnim><div key="1">Title</div></QueueAnim></th>
                            <th><QueueAnim><div key="1">Description</div></QueueAnim></th>
                            <th><QueueAnim><div key="1">Start On</div></QueueAnim></th>
                            <th><QueueAnim><div key="1">End On</div></QueueAnim></th>
                            <th><QueueAnim><div key="1">Created By</div></QueueAnim></th>
                            <th><QueueAnim><div key="1">Action</div></QueueAnim></th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.tableRowSub()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}