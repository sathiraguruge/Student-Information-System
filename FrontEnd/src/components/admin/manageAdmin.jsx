import React, {Component} from 'react';
import NavigationBar from '../layouts/navigationBar'
import PageFooter from '../layouts/footer'
import AdminList from './list/adminList'
import {Button} from "react-bootstrap";
import Ripples from "react-ripples";
import QueueAnim from "rc-queue-anim";

export default class ManageAdmin extends Component {
    render() {
        return (
            <div>
                <QueueAnim duration="3000" interval="400">
                    <NavigationBar/>
                    <div key="1">
                        <Ripples>
                            <Button className="btn btn-success" onClick={() => {
                                window.location.href = "/registerAdmin";
                            }}>Add Admin  <i className="fa fa-user-plus"/></Button></Ripples>
                    </div>
                    <div key="2">
                        <AdminList/>
                    </div>
                    <PageFooter/>
                </QueueAnim>
            </div>
        )
    };
}