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
import {storage} from '../../firebase/firebaseConfig';
import {Progress} from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

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
            faculty: '',
            gender: '',
            userName: '',
            visibleModal: false,
            visibleProfileModal: false,
            image: null,
            url: '',
            progress: 0,
            barVisibleFlag: false
        };
        this.userService = new UserService();
        this.SISService = new SISService();
        this.onChange = this.onChange.bind(this);
        this.loadUserDetails.bind(this);
        let username = this.userService.username;
        this.loadUserDetails(username);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmitPassword = this.onSubmitPassword.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    openModal() {
        this.setState({
            visibleModal: true
        });
    }

    openProfileModal() {
        this.setState({
            visibleProfileModal: true
        });
    }

    closeModal() {
        this.setState({
            visibleModal: false,
            visibleProfileModal: false
        });
    }

    handleChange(e) {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({image}));
        }
    };

    handleUpload(e) {
        const {image} = this.state;
        if (image !== null) {
            const uploadTask = storage.ref(`images/${this.userService.username}/${image.name}`).put(image);
            if (uploadTask !== null) {
                uploadTask.on('state_changed',
                    (snapshot) => {
                        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                        this.setState({progress});
                        this.setState({
                            barVisibleFlag: true
                        })
                    },
                    (error) => {
                        console.log(error);
                    },
                    () => {
                        storage.ref(`images/${this.userService.username}`).child(image.name).getDownloadURL().then(url => {
                            console.log(url);
                            this.setState({url});
                        }).then(url => {
                            console.log(url)
                            this.SISService.modifyStudent(this.state.userName, {
                                ImageURL: this.state.url
                            }).then(response => {
                                console.log(response);
                                alert('Your Profile has been Successfully Updated');
                            }).catch(error => {
                                console.log(error);
                            });
                        })
                    });
            }
        } else {
            alert("Please select an image")
        }
    };

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            edit: true,
        });
    }

    loadUserDetails(username) {
        this.SISService.getStudentProfile(username).then(response => {
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
                faculty: response.data.Faculty,
                gender: response.data.Gender,
                userName: response.data.SID,
                url: response.data.ImageURL
            });
        }).catch(error => {
            console.log(error)
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.SISService.modifyStudent(this.state.userName, {
            FirstName: this.state.firstName,
            LastName: this.state.lastName,
            Email: this.state.email,
            Mobile: this.state.mobile,
            DoB: this.state.dob,
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
            this.SISService.changeStudentPassword({
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
                            <div key="1" className="col-lg mt-3" style={{marginLeft: "400px"}}>
                                <Ripples>
                                    <div className="profileImageContainer">
                                        <img
                                            src={this.state.url || 'https://www.seekpng.com/png/detail/830-8301939_my-wedding-empty-profile-picture-icon.png'}
                                            alt="Uploaded images" height="300"
                                            width="400" className="profilePicture"/><br/>
                                    </div>
                                    <div className="profileCenteredImageText">
                                            <Button className="btn btn-info" onClick={() => this.openProfileModal()}><i className="fa fa-camera"/></Button>
                                     </div>
                                </Ripples>
                            </div>


                            <div key="2" className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">First Name : </span>
                                <input className="input100" type="text" required={true} value={this.state.firstName}
                                       onChange={this.onChange} name="firstName"/>
                                <span className="focus-input100"/>
                            </div>

                            <div key="3" className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">Last Name : </span>
                                <input className="input100" type="text" required={true} value={this.state.lastName}
                                       onChange={this.onChange} name="lastName"/>
                                <span className="focus-input100"/>
                            </div>

                            <div key="4" className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">Username</span>
                                <input className="input100" type="text" required={true} value={this.state.userName}
                                       onChange={this.onChange} name="userName" readOnly/>
                                <span className="focus-input100"/>
                            </div>

                            <div key="5" className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">Email : </span>
                                <input className="input100" type="text" required={true} value={this.state.email}
                                       onChange={this.onChange} name="email"/>
                                <span className="focus-input100"/>
                            </div>

                            <div key="6" className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">Mobile</span>
                                <input className="input100" type="number" required={true} value={this.state.mobile}
                                       onChange={this.onChange} name="mobile"/>
                                <span className="focus-input100"/>
                            </div>

                            <div key="7" className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">NIC</span>
                                <input className="input100" type="text" required={true} value={this.state.nic}
                                       onChange={this.onChange} name="nic" readOnly/>
                                <span className="focus-input100"/>
                            </div>

                            <div key="8" className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">Date of Birth</span>
                                <input className="input100" type="date" required={true} name="dob"
                                       value={this.state.dob}
                                       onChange={this.onChange} placeholder="Enter your Date of Birth"/>
                                <span className="focus-input100"/>
                            </div>

                            <div key="9" className="wrap-input100 input100-select">
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

                            <div key="10" className="wrap-input100 input100-select">
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

                            <div key="11" className="col-lg mt-3">
                                <input type="submit" className="btn btn-info btn-block" value="Change"/>
                            </div>

                            <div key="12" className="col-lg mt-3">
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
                    <i className="fa fa-times" onClick={() => this.closeModal()} aria-hidden="true"
                       style={{marginLeft: "980px"}}/>
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


                <Modal visible={this.state.visibleProfileModal} width="1000" height="600" effect="fadeInRight"
                       onClickAway={() => this.closeModal()}>
                    <i className="fa fa-times" onClick={() => this.closeModal()} aria-hidden="true"
                       style={{marginLeft: "980px"}}/>
                    <div className="container p-2" style={{marginLeft: "300px"}}>
                        <img
                            src={this.state.url || 'http://vlabs.iitb.ac.in/vlabs-dev/labs_local/machine_learning/labs/exp11/images/no_img.png'}
                            alt="Uploaded images" height="300"
                            width="400" className="profilePicture"/><br/>
                        <input type="file" onChange={this.handleChange} className="btn btn-info"
                               style={{marginLeft: "30px"}}/>
                        <br/><br/>
                        {this.state.barVisibleFlag ?
                            <div style={{width: "100px", marginLeft: "150px", marginBottom: "10px"}}><Progress
                                type="circle" percent={this.state.progress}
                                status="success" width={100} strokeWidth={10}
                            /></div> : null}

                        <Ripples>
                            <Button className="btn btn-info" style={{width: "100px", marginLeft: "150px"}}
                                    onClick={this.handleUpload}>Upload <i className="fa fa-upload"/></Button>
                        </Ripples>
                    </div>
                </Modal>

                <Footer/>
            </div>
        );
    }
}