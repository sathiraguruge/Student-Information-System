import React, {Component} from 'react';
import EmailService from '../../services/EmailService'
import LecturerRegistrationValidation from '../../validations/lecturer/registration';
import SISService from '../../services/SISService'
import {Link} from "react-router-dom";
import QueueAnim from "rc-queue-anim";

export default class RegisterLecturerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FirstName: '',
            LastName: '',
            Email: '',
            Mobile: '',
            DoB: '',
            NIC: '',
            StaffID: ''
        };
        this.SISService = new SISService();
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    clearForm(e) {
        this.setState({
            FirstName: '',
            LastName: '',
            Email: '',
            Mobile: '',
            DoB: '',
            NIC: '',
            StaffID: ''
        });
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.refs.Faculty) {
            var faculty = this.refs.Faculty.value;
        }
        if (this.refs.Gender) {
            var Gender = this.refs.Gender.value;
        }
        let myLecturerRegistrationValidation = new LecturerRegistrationValidation(this.state.FirstName, this.state.LastName, this.state.Mobile, this.state.DoB, this.state.NIC, this.state.StaffID);
        if (myLecturerRegistrationValidation.validate) {
            this.SISService.addStaffMember({
                'FirstName': this.state.FirstName,
                'LastName': this.state.LastName,
                'Email': this.state.Email,
                'Mobile': this.state.Mobile,
                'DoB': this.state.DoB,
                'NIC': this.state.NIC,
                'StaffID': this.state.StaffID,
                'Username': this.state.StaffID,
                'Password': this.state.NIC,
                'Faculty': faculty,
                'Gender': Gender
            }).then(response => {
                alert(response.data.message);
                if (response.data.status === 200) {
                    let myEmailService = new EmailService();
                    myEmailService.sendEmail(this.state.Email, this.state.FirstName, this.state.StaffID, this.state.NIC);
                    window.location.href = "/manageStaff"
                }
            });
        }
    }

    render() {
        return <div className="container-contact100">
            <div className="wrap-contact100">
                <div className="form-inline my-2 my-lg-0">
                    <ul className="navbar-nav mr-auto">
                        <div className="navbar-brand"><Link className="navbar-brand" to="/manageStaff"><i
                            className="fa fa-arrow-circle-left" style={{margin: '12px'}}/>Back
                        </Link></div>
                    </ul>
                </div>
                <QueueAnim>
                    <div key="1">
                        <form className="contact100-form validate-form" onSubmit={this.onSubmit}>
				<span className="contact100-form-title">
					Register Lecturer
				</span>

                            <div className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">First Name</span>
                                <input className="input100" type="text" value={this.state.FirstName}
                                       onChange={this.onChange}
                                       name="FirstName" placeholder="Daniel" required={true}/>
                                <span className="focus-input100"/>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">Last Name</span>
                                <input className="input100" type="text" value={this.state.LastName}
                                       onChange={this.onChange}
                                       name="LastName" placeholder="Asplund" required={true}/>
                                <span className="focus-input100"/>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">Email</span>
                                <input className="input100" type="email" value={this.state.Email}
                                       onChange={this.onChange}
                                       name="Email" placeholder="danielasplund@gmail.com" required={true}/>
                                <span className="focus-input100"/>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">Mobile No</span>
                                <input className="input100" type="number" value={this.state.Mobile}
                                       onChange={this.onChange}
                                       name="Mobile" placeholder="0711234567" required={true}/>
                                <span className="focus-input100"/>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">Date of Birth</span>
                                <input className="input100" type="date" name="DoB" value={this.state.DoB}
                                       onChange={this.onChange} placeholder="Enter your Date of Birth" required={true}/>
                                <span className="focus-input100"/>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">NIC</span>
                                <input className="input100" type="text" name="NIC" value={this.state.NIC}
                                       onChange={this.onChange} placeholder="971234567V" required={true}/>
                                <span className="focus-input100"/>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Staff ID is required">
                                <span className="label-input100">Staff ID</span>
                                <input className="input100" type="text" name="StaffID" value={this.state.StaffID}
                                       onChange={this.onChange} placeholder="ST12345678" required={true}/>
                                <span className="focus-input100"/>
                            </div>

                            <div className="wrap-input100 input100-select">
                                <span className="label-input100">Select Faculty</span>
                                <div>
                                    <select className="selection-2" name="faculty" ref="Faculty">
                                        <option value="Faculty of Computing">Faculty of Computing</option>
                                        <option value="Faculty of Business">Faculty of Business</option>
                                        <option value="Faculty of Engineering">Faculty of Engineering</option>
                                    </select>
                                </div>
                                <span className="focus-input100"/>
                            </div>

                            <div className="wrap-input100 input100-select">
                                <span className="label-input100">Select your Gender</span>
                                <div>
                                    <select className="selection-2" name="gender" ref="Gender">
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <span className="focus-input100"/>
                            </div>

                            <div className="container-contact100-form-btn">
                                <div className="wrap-contact100-form-btn">
                                    <div className="contact100-form-bgbtn"/>
                                    <button className="contact100-form-btn">
							<span>
                                Register
                            <input type="submit" value=""/>
								<i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"/>
							</span>
                                    </button>
                                </div>
                            </div>

                            <div className="row mt-5">
                                <div className="col-lg-6 mt-1">
                                    <button className="btn btn-secondary btn-block" onClick={this.clearForm}>Clear
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </QueueAnim>
            </div>
        </div>;
    }
}