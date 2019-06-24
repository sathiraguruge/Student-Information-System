import React, {Component} from 'react';
import NavigationBar from "../layouts/navigationBar";
import CourseList from "./list/allCourseList";
import PageFooter from '../layouts/footer'
import QueueAnim from "rc-queue-anim";

export default class ManageCourse extends Component {

    render() {
        return (<div>
            <QueueAnim duration="3000" interval="400">
                <NavigationBar/>
                <div key="1">
                    <CourseList/>
                </div>

                <PageFooter/>
            </QueueAnim>
        </div>)
    }
}