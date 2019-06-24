import React, {Component} from 'react';
import NavigationBar from '../layouts/navigationBar'
import PageFooter from '../layouts/footer'
import StudentList from './list/studentList'
import {Button} from "react-bootstrap";
import Ripples from "react-ripples";
import QueueAnim from "rc-queue-anim";

export default class ManageStudents extends Component {
    render() {
        return (
            <div>
                <QueueAnim duration="3000" interval="400">
                    <NavigationBar/>
                    <div key="2">
                        <StudentList/>
                    </div>
                    <PageFooter/>
                </QueueAnim>
            </div>
        )
    };
}