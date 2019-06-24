import React, {Component} from 'react';
import UserService from '../../services/UserService'
import SISService from '../../services/SISService'
import NavigationBar from '../layouts/navigationBar'
import Footer from '../layouts/footer'
import QueueAnim from "rc-queue-anim";
import Modal from "react-awesome-modal";
import AdminRegistrationValidation from "../../validations/admin/registration";
import {Button} from "react-bootstrap";
import Ripples from "react-ripples";

export default class LecturerProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
            dob: '',
            nic: '',
            staffId: '',
            faculty: '',
            gender: '',
            userName: '',
            visibleModal: false
        };
        this.userService = new UserService();
        this.SISService = new SISService();
        this.onChange = this.onChange.bind(this);
        this.loadUserDetails.bind(this);
        let username = this.userService.username;
        this.loadUserDetails(username);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmitPassword = this.onSubmitPassword.bind(this);
    }

    openModal() {
        this.setState({
            visibleModal: true
        });
    }

    closeModal() {
        this.setState({
            visibleModal: false
        });
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            edit: true,
        });
    }

    loadUserDetails(username) {
        this.SISService.getMemberProfile(username).then(response => {
            let oldDate = new Date(response.data.DoB),
                month = '' + (oldDate.getMonth() + 1),
                day = '' + oldDate.getDate(),
                year = oldDate.getFullYear();
            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;
            const myDate = [year, month, day].join('-');
            this.setState({
                firstName: response.data.FirstName,
                lastName: response.data.LastName,
                email: response.data.Email,
                mobile: response.data.Mobile,
                dob: myDate,
                nic: response.data.NIC,
                staffId: response.data.StaffID,
                faculty: response.data.Faculty,
                gender: response.data.Gender,
                userName: response.data.Username
            });
        }).catch(error => {
            console.log(error)
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.SISService.modifyMember(this.state.userName, {
            FirstName: this.state.firstName,
            LastName: this.state.lastName,
            Email: this.state.email,
            Mobile: this.state.mobile,
            DoB: this.state.dob,
            NIC: this.state.nic,
            StaffID: this.state.staffId,
            Faculty: this.state.faculty,
            Gender: this.state.gender
        }).then(response => {
            console.log(response);
            alert('Your Profile has been Successfully Updated');
        }).catch(error => {
            console.log(error);
        });
    }


    onSubmitPassword(e) {
        e.preventDefault();
        let myLecturerPasswordValidation = new AdminRegistrationValidation(null, this.state.newPassword1, this.state.newPassword2);
        if (myLecturerPasswordValidation.isPassword) {
            this.SISService.changePassword({
                "Username": this.userService.username,
                "OldPassword": this.state.oldPassword,
                "NewPassword": this.state.newPassword1
            }).then(response => {
                alert(response.data.message);
            }).catch(error => {
                console.log(error);
            });
        }
    }

    render() {
        return (
            <div>
                <NavigationBar/>
                <div className="container p-2" style={{paddingBottom: '500px'}}>
                    <form onSubmit={this.onSubmit}>
                        <QueueAnim duration="1000" interval="400">
                            <div key="1" className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">First Name : </span>
                                <input className="input100" type="text" required={true} value={this.state.firstName}
                                       onChange={this.onChange} name="firstName"/>
                                <span className="focus-input100"/>
                            </div>

                            <div key="2" className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">Last Name : </span>
                                <input className="input100" type="text" required={true} value={this.state.lastName}
                                       onChange={this.onChange} name="lastName"/>
                                <span className="focus-input100"/>
                            </div>

                            <div key="3" className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">Username</span>
                                <input className="input100" type="text" required={true} value={this.state.userName}
                                       onChange={this.onChange} name="userName" readOnly/>
                                <span className="focus-input100"/>
                            </div>

                            <div key="4" className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">Email : </span>
                                <input className="input100" type="text" required={true} value={this.state.email}
                                       onChange={this.onChange} name="email"/>
                                <span className="focus-input100"/>
                            </div>

                            <div key="5" className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">Mobile</span>
                                <input className="input100" type="number" required={true} value={this.state.mobile}
                                       onChange={this.onChange} name="mobile"/>
                                <span className="focus-input100"/>
                            </div>

                            <div key="5" className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">NIC</span>
                                <input className="input100" type="text" required={true} value={this.state.nic}
                                       onChange={this.onChange} name="nic" readOnly/>
                                <span className="focus-input100"/>
                            </div>

                            <div key="6" className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">Date of Birth</span>
                                <input className="input100" type="date" required={true} name="dob"
                                       value={this.state.dob}
                                       onChange={this.onChange} placeholder="Enter your Date of Birth"/>
                                <span className="focus-input100"/>
                            </div>

                            <div key="7" className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">Staff ID</span>
                                <input className="input100" type="text" required={true} value={this.state.staffId}
                                       onChange={this.onChange} name="staffId" readOnly/>
                                <span className="focus-input100"/>
                            </div>

                            <div key="8" className="wrap-input100 input100-select">
                                <span className="label-input100">Select Faculty</span>
                                <div>
                                    <select className="selection-2" name="faculty" ref="Faculty"
                                            value={this.state.faculty}
                                            onChange={this.onChange}>
                                        <option value="Faculty of Computing">Faculty of Computing</option>
                                        <option value="Faculty of Business">Faculty of Business</option>
                                        <option value="Faculty of Engineering">Faculty of Engineering</option>
                                    </select>
                                </div>
                                <span className="focus-input100"/>
                            </div>

                            <div key="9" className="wrap-input100 input100-select">
                                <span className="label-input100">Select your Gender</span>
                                <div>
                                    <select className="selection-2" name="gender" ref="Gender" value={this.state.gender}
                                            onChange={this.onChange}>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <span className="focus-input100"/>
                            </div>

                            <div key="10" className="col-lg mt-3">
                                <input type="submit" className="btn btn-info btn-block" value="Change"/>
                            </div>

                            <div key="11" className="col-lg mt-3">
                                <Ripples>
                                    <Button className="btn btn-info" style={{width: "200px"}}
                                            onClick={() => this.openModal()}>Change Password <i className="fa fa-key"/></Button>
                                </Ripples>
                            </div>
                        </QueueAnim>
                    </form>
                </div>

                <Modal visible={this.state.visibleModal} width="1000" height="400" effect="fadeInRight"
                       onClickAway={() => this.closeModal()}>
                    <i className="fa fa-times" onClick={() => this.closeModal()} aria-hidden="true" style={{marginLeft : "980px"}}/>
                    <div className="container p-2" style={{marginBottom: '500px', paddingBottom: '500px'}}>
                        <form onSubmit={this.onSubmitPassword}>
                            <div className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">Old Password : </span>
                                <input className="input100" type="password" required={true}
                                       value={this.state.oldPassword}
                                       onChange={this.onChange} name="oldPassword"/>
                                <span className="focus-input100"/>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">Password : </span>
                                <input className="input100" type="password" required={true}
                                       value={this.state.newPassword1}
                                       onChange={this.onChange} name="newPassword1"/>
                                <span className="focus-input100"/>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">Confirm Password : </span>
                                <input className="input100" type="password" required={true}
                                       value={this.state.newPassword2}
                                       onChange={this.onChange} name="newPassword2"/>
                                <span className="focus-input100"/>
                            </div>

                            <div className="col-lg mt-3">
                                <input type="submit" className="btn btn-info btn-block" value="Change Password"/>
                            </div>
                        </form>
                    </div>
                </Modal>

                <Footer/>
            </div>
        );
    }
}