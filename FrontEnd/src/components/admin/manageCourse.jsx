import React, {Component} from 'react';
import NavigationBar from "../layouts/navigationBar";
import {Button} from "react-bootstrap";
import CourseList from "./list/courseList";
import PageFooter from '../layouts/footer'
import Ripples from "react-ripples";
import QueueAnim from "rc-queue-anim";


export default class ManageCourse extends Component {

    render() {
        return (<div>
            <QueueAnim duration="3000" interval="400">
                <NavigationBar/>
                <div key="1">
                    <Button className="btn-primary btn-success" onClick={() => {
                        window.location.href = "/addCourse";
                    }}>Add Course <i className="fa  fa-file-text"/></Button>
                </div>
                <div key="2">
                    <CourseList/>
                </div>

                <PageFooter/>
            </QueueAnim>
        </div>)
    }
}