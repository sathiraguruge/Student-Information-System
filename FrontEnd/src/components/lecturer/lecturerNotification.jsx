import React,{Component} from 'react';
import NavigationBar from "../layouts/navigationBar";
import PageFooter from '../layouts/footer'
import CourseNotificationList from "./List/CourseNotificationList";

export default class LecturerNotification extends Component{
    render() {
        return (<div>

                <NavigationBar/>
                <div >
                    <CourseNotificationList/>
                </div>

                <PageFooter/>

        </div>)
    }
}