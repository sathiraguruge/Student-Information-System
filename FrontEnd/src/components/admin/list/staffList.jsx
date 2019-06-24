import React, {Component} from 'react'
import OneStaffMember from "./oneStaffMenber"
import SISService from '../../../services/SISService'
import QueueAnim from "rc-queue-anim";

export default class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staffMembers: []
        };
        this.SISService = new SISService();

    }

    componentDidMount() {
        this.SISService.getStaffList().then(response => {
            this.setState({staffMembers: response.data});
        }).catch(function (error) {
            console.log(error);
        });
    }


    tabRow() {
        return this.state.staffMembers.map(function (object, i) {
            return <OneStaffMember obj={object} key={i}/>;
        });
    }

    render() {
        return (
            <div>
                <div className="tableClass">
                    <h4>Registered Lecturers</h4>
                    <table className="table">
                        <thead>
                        <tr>
                            <th><QueueAnim><div key="1">Staff ID</div></QueueAnim></th>
                            <th><QueueAnim><div key="1">First Name</div></QueueAnim></th>
                            <th><QueueAnim><div key="1">Last Name</div></QueueAnim></th>
                            <th><QueueAnim><div key="1">Email</div></QueueAnim></th>
                            <th><QueueAnim><div key="1">Faculty</div></QueueAnim></th>
                            <th><QueueAnim><div key="1">Action</div></QueueAnim></th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.tabRow()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}