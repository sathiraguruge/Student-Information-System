import React, {Component} from 'react'
import SISService from '../../../services/SISService'
import Modal from "react-awesome-modal";
import UserService from '../../../services/UserService'


class OneCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: {},
            visibleModal: false,
            courseIdTemp: '',
            enrollmentKey: '',
        };
        this.SISService = new SISService();
        this.UserService = new UserService();
        this.unEnroll = this.unEnroll.bind(this);
        this.onChange = this.onChange.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    openModal(CourseId) {
        this.setState({
            visibleModal: true,
            courseIdTemp: CourseId
        });
    }

    closeModal() {
        this.setState({
            visibleModal: false
        });
    }

    unEnroll(e) {
        e.preventDefault();
        this.SISService.unEnroll(this.UserService.username, {"CourseId": this.props.obj._id}).then(response => {
            alert(response.data.message);
            window.location.reload();
        });
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.CourseId}</td>
                <td>{this.props.obj.CourseName}</td>
                <td>{this.props.obj.InchargLecture}</td>
                <td>{this.props.obj.Year}</td>
                <td>{this.props.obj.Semester}</td>
                <td>{this.props.obj.Faculty}</td>
                <td>{this.props.obj.Department}</td>
                <td>
                    <button style={{marginRight: '10px'}} onClick={this.unEnroll}
                            className="btn btn-warning">UnEnroll <i className="fa fa-unlink"/></button>
                </td>
            </tr>
        )
    }
}

export default OneCourse;