import React, {Component} from 'react';
import UserService from '../../services/UserService'
import SISService from '../../services/SISService'
import NavigationBar from '../layouts/navigationBar'
import Footer from '../layouts/footer'


export default class AddAssignmentMarks extends Component {
    constructor(props) {
        super(props);
        this.userService = new UserService();
        this.state = {
            CourseId: '',
            AssignmentId: '',
            Marks: '',
            CreatedBy: this.userService.username,
        };
        this.userService = new UserService();
        this.SISService = new SISService();
        this.onChange = this.onChange.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.onSubmitMarks = this.onSubmitMarks.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            edit: true
        });
    }

    clearForm(e) {
        this.setState({
            CourseId: '',
            ExamId: '',
            Title: '',
            Type: '',
            TotalMarks: 0,
            PerFinalMark: 0,
            Date: '',
            Duration: '',
            CourseId2: '',
            AssignmentId: '',
            Title2: '',
            Description: '',
            StartDate: '',
            EndDate: ''
        });
    }

    onSubmitMarks(e) {
        e.preventDefault();
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + (month) + "-" + (day);

        if(today >= this.state.Date) {
            alert("The Scheduled Date should not be Today or a Previous Date ");
        }
        else {
            this.SISService.addNewExam( {
                CourseId: this.state.CourseId,
                ExamId: this.state.ExamId,
                Title: this.state.Title,
                Type: this.state.Type,
                TotalMarks: this.state.TotalMarks,
                PerFinalMark: this.state.PerFinalMark,
                Date: this.state.Date,
                Duration: this.state.Duration,
                CreatedBy: this.state.CreatedBy
            }).then(response => {
                console.log(response);
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
                <div className="container-contact100">
                    <div className="wrap-contact100">
                        <form className="contact100-form validate-form" onSubmit={this.onSubmitExam}>
				<span className="contact100-form-title">
					Add New Exam
				</span>

                            <div className="wrap-input100 validate-input" data-validate="Course ID is required">
                                <span className="label-input100">Course ID</span>
                                <input className="input100" type="text" value={this.state.CourseId} onChange={this.onChange}
                                       name="CourseId" placeholder="SE3020/CS2020" required={true}/>
                                <span className="focus-input100"/>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Exam ID is required">
                                <span className="label-input100">Exam ID</span>
                                <input className="input100" type="text" value={this.state.ExamId} onChange={this.onChange}
                                       name="ExamId" placeholder="E001" required={true}/>
                                <span className="focus-input100"/>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Title is required">
                                <span className="label-input100">Title</span>
                                <input className="input100" type="text" value={this.state.Title} onChange={this.onChange}
                                       name="Title" placeholder="Software Architecture Online Exam" required={true}/>
                                <span className="focus-input100"/>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Title is required">
                                <span className="label-input100">StudentId</span>
                                <input className="input100" type="text" value={this.state.Title} onChange={this.onChange}
                                       name="Title" placeholder="Software Architecture Online Exam" required={true}/>
                                <span className="focus-input100"/>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Total Marks is required">
                                <span className="label-input100">Marks</span>
                                <input className="input100" type="number" value={this.state.TotalMarks} onChange={this.onChange}
                                       name="TotalMarks" required={true}/>
                                <span className="focus-input100"/>
                            </div>

                            <div className="container-contact100-form-btn">
                                <div className="wrap-contact100-form-btn">
                                    <div className="contact100-form-bgbtn"/>
                                    <button className="contact100-form-btn">
							<span>
                                Add Exam
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

                </div>
                <Footer/>
            </div>
        );
    }
}
