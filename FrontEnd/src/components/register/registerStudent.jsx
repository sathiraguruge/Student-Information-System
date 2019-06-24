import React, {Component} from 'react';
import {Link} from "react-router-dom";
import LecturerRegistrationValidation from "../../validations/lecturer/registration";
import EmailService from "../../services/EmailService";
import SISService from '../../services/SISService'

export default class RegisterStudentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FirstName: '',
            LastName: '',
            SID : '',
            Email: '',
            Mobile: '',
            DoB: '',
            NIC: ''
        };
        this.SISService = new SISService();
        this.onChange = this.onChange.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.refs.Faculty) {
            var faculty = this.refs.Faculty.value;
        }
        if (this.refs.Gender) {
            var Gender = this.refs.Gender.value;
        }
        let myLecturerRegistrationValidation = new LecturerRegistrationValidation(this.state.FirstName, this.state.LastName, this.state.Mobile, this.state.DoB, this.state.NIC, this.state.SID);
        if (myLecturerRegistrationValidation.validate) {
            this.SISService.addStudent({
                'FirstName': this.state.FirstName,
                'LastName': this.state.LastName,
                'Email': this.state.Email,
                'Mobile': this.state.Mobile,
                'DoB': this.state.DoB,
                'NIC': this.state.NIC,
                'SID': this.state.SID,
                'Username': this.state.SID,
                'Password': this.state.NIC,
                'Faculty': faculty,
                'Gender': Gender
            }).then(response => {
                alert(response.data.message);
                if (response.data.status === 200) {
                    window.location.href = "/login"
                }
            });
        }
    }

    clearForm(e) {
        this.setState({
            FirstName: '',
            LastName: '',
            Email: '',
            Mobile: '',
            DoB: '',
            NIC: ''
        });
    }

    render() {
        return <div className="container-contact100">
            <div className="wrap-contact100">
                <div className="form-inline my-2 my-lg-0">
                    <ul className="navbar-nav mr-auto">
                        <div className="navbar-brand"><Link className="navbar-brand" to="/login"><i
                            className="fa fa-arrow-circle-left" style={{margin: '12px'}}/>Back
                        </Link></div>
                    </ul>
                </div>

                <form className="contact100-form validate-form" onSubmit={this.onSubmit}>
				<span className="contact100-form-title">
					Register!
				</span>

                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Your First Name</span>
                        <input className="input100" type="text" required={true} value={this.state.FirstName}
                               onChange={this.onChange} name="FirstName" placeholder="Daniel"/>
                        <span className="focus-input100"/>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Your Last Name</span>
                        <input className="input100" type="text" required={true} value={this.state.LastName}
                               onChange={this.onChange} name="LastName" placeholder="Asplund"/>
                        <span className="focus-input100"/>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Your Email</span>
                        <input className="input100" type="email" required={true} value={this.state.Email}
                               onChange={this.onChange} name="Email" placeholder="danielasplund@gmail.com"/>
                        <span className="focus-input100"/>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Your Mobile No</span>
                        <input className="input100" type="number" required={true} value={this.state.Mobile}
                               onChange={this.onChange} name="Mobile" placeholder="0711234567"/>
                        <span className="focus-input100"/>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Your Date of Birth</span>
                        <input className="input100" type="date" required={true} name="DoB" value={this.state.DoB}
                               onChange={this.onChange} placeholder="Enter your Date of Birth"/>
                        <span className="focus-input100"/>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Your Student ID</span>
                        <input className="input100" type="text" required={true} name="SID" value={this.state.SID}
                               onChange={this.onChange} placeholder="971234567V"/>
                        <span className="focus-input100"/>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Your NIC</span>
                        <input className="input100" type="text" required={true} name="NIC" value={this.state.NIC}
                               onChange={this.onChange} placeholder="971234567V"/>
                        <span className="focus-input100"/>
                    </div>

                    <div className="wrap-input100 input100-select">
                        <span className="label-input100">Select your Faculty</span>
                        <div>
                            <select className="selection-2" name="faculty" ref="Faculty">
                                <option value="FoC">Faculty of Computing</option>
                                <option value="FoB">Faculty of Business</option>
                                <option value="FoE">Faculty of Engineering</option>
                            </select>
                        </div>
                        <span className="focus-input100"/>
                    </div>

                    <div className="wrap-input100 input100-select">
                        <span className="label-input100">Select your Gender</span>
                        <div>
                            <select className="selection-2"  name="gender" ref="Gender">
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
                            <button className="btn btn-secondary btn-block" onClick={this.clearForm}>Clear</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>;
    }
}