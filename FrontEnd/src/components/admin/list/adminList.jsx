import React, {Component} from 'react'
import OneAdminMember from "./oneAdmin"
import SISService from '../../../services/SISService'
import QueueAnim from "rc-queue-anim";

export default class AdminList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            admins: []
        };
        this.SISService = new SISService();
    }

    componentDidMount() {
        this.SISService.getAdminList().then(response => {
            this.setState({admins: response.data});
        }).catch(function (error) {
            console.log(error);
        })
    }

    tabRow() {
        return this.state.admins.map(function (object, i) {
            return <OneAdminMember obj={object} key={i}/>;
        });
    }

    render() {
        return (
            <div className="tableClass">
                <h4>Registered Admins</h4>
                <table className="table">
                    <thead>
                    <tr>
                        <th><QueueAnim><div key="1">Username</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Email</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Action</div></QueueAnim></th>
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