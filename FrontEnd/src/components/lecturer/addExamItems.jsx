import React, {Component} from 'react';
import UserService from '../../services/UserService'
import SISService from '../../services/SISService'
import NavigationBar from '../layouts/navigationBar'
import Footer from '../layouts/footer'


export default class AddCourse extends Component {
    constructor(props) {
        super(props);
        this.userService = new UserService();
        this.state = {
            CourseId: '',
            ExamId: '',
            Title: '',
            Type: '',
            TotalMarks: 0,
            PerFinalMark: 0,
            Date: '',
            Duration: '',
            CreatedBy: this.userService.username,
            CourseId2: '',
            AssignmentId: '',
            Title2: '',
            Description: '',
            StartDate: '',
            EndDate: ''
        };
        this.userService = new UserService();
        this.SISService = new SISService();
        this.onChange = this.onChange.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.onSubmitExam = this.onSubmitExam.bind(this);
        this.onSubmitAssignment = this.onSubmitAssignment.bind(this);
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

    onSubmitExam(e) {
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

    onSubmitAssignment(e) {
        e.preventDefault();
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + (month) + "-" + (day);
        if(this.state.StartDate === this.state.EndDate) {
            alert("Start Date & End Date should not be equal");
        }else if (today >= this.state.EndDate){
            alert("The End Date should not be Today or a Previous Date");
        }else if(this.state.StartDate < today || this.state.StartDate > this.state.EndDate) {
            alert("Enter Valid Start Date and End Date");
        }else {
            this.SISService.addNewAssignment( {
                CourseId: this.state.CourseId2,
                AssignmentId: this.state.AssignmentId,
                Title: this.state.Title2,
                Description: this.state.Description,
                StartDate: this.state.StartDate,
                EndDate: this.state.EndDate,
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
                    <div className="row">
                        <div className="col">
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

                                    <div className="wrap-input100 input100-select">
                                        <span className="label-input100">Select Type of Examination</span>
                                        <div>
                                            <select className="selection-2" name="Type" ref="Type" value={this.state.Type} onChange={this.onChange}>
                                                <option value="MCQ">M.C.Q.</option>
                                                <option value="WRITTEN">Written Exam</option>
                                                <option value="ONLINE">Online Exam</option>
                                                <option value="SPOT">Spot Test</option>
                                            </select>
                                        </div>
                                        <span className="focus-input100"/>
                                    </div>

                                    <div className="wrap-input100 validate-input" data-validate="Total Marks is required">
                                        <span className="label-input100">Total Marks</span>
                                        <input className="input100" type="number" value={this.state.TotalMarks} onChange={this.onChange}
                                               name="TotalMarks" required={true}/>
                                        <span className="focus-input100"/>
                                    </div>

                                    <div className="wrap-input100 validate-input" data-validate="Percentage is required">
                                        <span className="label-input100">Percentage for Final GPA</span>
                                        <input className="input100" type="number" value={this.state.PerFinalMark} onChange={this.onChange}
                                               name="PerFinalMark" required={true}/>
                                        <span className="focus-input100"/>
                                    </div>

                                    <div className="wrap-input100 validate-input" data-validate="Date is required">
                                        <span className="label-input100">Scheduled Date</span>
                                        <input className="input100" type="date" value={this.state.Date} onChange={this.onChange}
                                               name="Date" required={true}/>
                                        <span className="focus-input100"/>
                                    </div>

                                    <div className="wrap-input100 validate-input" data-validate="Duration is required">
                                        <span className="label-input100">Duration of Exam</span>
                                        <input className="input100" type="text" value={this.state.Duration} onChange={this.onChange}
                                               name="Duration" placeholder="Hours/Minutes" required={true}/>
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
                        <div className="col">
                            <div className="wrap-contact100">
                                <form className="contact100-form validate-form" onSubmit={this.onSubmitAssignment}>
				<span className="contact100-form-title">
					Add New Assignment
				</span>

                                    <div className="wrap-input100 validate-input" data-validate="Course ID is required">
                                        <span className="label-input100">Course ID</span>
                                        <input className="input100" type="text" value={this.state.CourseId2} onChange={this.onChange}
                                               name="CourseId2" placeholder="SE3020/CS2020" required={true}/>
                                        <span className="focus-input100"/>
                                    </div>

                                    <div className="wrap-input100 validate-input" data-validate="Exam ID is required">
                                        <span className="label-input100">Assignment ID</span>
                                        <input className="input100" type="text" value={this.state.AssignmentId} onChange={this.onChange}
                                               name="AssignmentId" placeholder="A001" required={true}/>
                                        <span className="focus-input100"/>
                                    </div>

                                    <div className="wrap-input100 validate-input" data-validate="Exam ID is required">
                                        <span className="label-input100">Title</span>
                                        <input className="input100" type="text" value={this.state.Title2} onChange={this.onChange}
                                               name="Title2" placeholder="Lab Assignment" required={true}/>
                                        <span className="focus-input100"/>
                                    </div>

                                    <div className="wrap-input100 validate-input" data-validate="Exam ID is required">
                                        <span className="label-input100">Description</span>
                                        <input className="input100" type="text" value={this.state.Description} onChange={this.onChange}
                                               name="Description" required={true}/>
                                        <span className="focus-input100"/>
                                    </div>

                                    <div className="wrap-input100 validate-input" data-validate="Exam ID is required">
                                        <span className="label-input100">Start Date</span>
                                        <input className="input100" type="date" value={this.state.StartDate} onChange={this.onChange}
                                               name="StartDate" required={true}/>
                                        <span className="focus-input100"/>
                                    </div>

                                    <div className="wrap-input100 validate-input" data-validate="Exam ID is required">
                                        <span className="label-input100">End Date</span>
                                        <input className="input100" type="date" value={this.state.EndDate} onChange={this.onChange}
                                               name="EndDate" required={true}/>
                                        <span className="focus-input100"/>
                                    </div><br/><br/><br/><br/><br/><br/>

                                    <div className="container-contact100-form-btn">
                                        <div className="wrap-contact100-form-btn">
                                            <div className="contact100-form-bgbtn"/>
                                            <button className="contact100-form-btn">
							<span>
                                Add Assignment
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
                    </div>

                </div>
                <Footer/>
            </div>
        );
    }
}
