import React, {Component} from 'react';
import NavigationBar from '../layouts/navigationBar'
import PageFooter from '../layouts/footer'
import AdminBody from './adminBody'

export default class AdminDashboard extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <AdminBody/>
                <PageFooter/>
            </div>
        )
    };
}