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
        this.enroll = this.enroll.bind(this);
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

    enroll(e) {
        e.preventDefault();
        this.SISService.enroll(this.UserService.username, {
            "CourseId": this.state.courseIdTemp,
            "EnrollmentKey": this.state.enrollmentKey
        }).then(response => {
            alert(response.data.message);
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
                    <button style={{marginRight: '10px'}} onClick={this.openModal.bind(this, this.props.obj.CourseId)}
                            className="btn btn-warning">Enroll <i className="fa fa-edit"/></button>
                </td>

                <Modal visible={this.state.visibleModal} width="500" height="200" effect="fadeInRight"
                       onClickAway={() => this.closeModal()}>
                    <i className="fa fa-times" onClick={() => this.closeModal()} aria-hidden="true"
                       style={{marginLeft: "480px"}}/>
                    <div className="container p-2" style={{marginBottom: '500px', paddingBottom: '500px'}}>
                        <form onSubmit={this.enroll}>
                            <div className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">Enrollement Key : </span>
                                <input className="input100" type="text" required={true}
                                       value={this.state.enrollmentKey}
                                       onChange={this.onChange} name="enrollmentKey"/>
                                <span className="focus-input100"/>
                            </div>

                            <div className="col-lg mt-3">
                                <input type="submit" className="btn btn-info btn-block" value="Enroll"/>
                            </div>
                        </form>
                    </div>
                </Modal>

            </tr>
        )
    }
}

export default OneCourse;