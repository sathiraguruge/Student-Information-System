import React, {Component} from 'react'
import OneStudent from "./oneStudent"
import SISService from '../../../services/SISService'
import QueueAnim from "rc-queue-anim";

export default class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: []
        };
        this.SISService = new SISService();
    }

    componentDidMount() {
        this.SISService.getStudentList().then(response => {
            this.setState({students: response.data});
        }).catch(function (error) {
            console.log(error);
        })
    }


    tabRow() {
        return this.state.students.map(function (object, i) {
            return <OneStudent obj={object} key={i}/>;
        });
    }

    render() {
        return (
            <div className="tableClass">
                <h4>Registered Students </h4>
                <table className="table">
                    <thead>
                    <tr>
                        <th><QueueAnim><div key="1">Student ID</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Email</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Mobile</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">NIC</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Faculty</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Gender</div></QueueAnim></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}