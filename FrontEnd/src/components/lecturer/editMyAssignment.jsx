import React, {Component} from 'react';
import {Link} from "react-router-dom";
import SISService from '../../services/SISService'
import QueueAnim from "rc-queue-anim";

export default class EditAssignment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CourseId2: '',
            AssignmentId: '',
            Title2: '',
            Description: '',
            StartDate: '',
            EndDate: ''
        };
        this.SISService = new SISService();
        this.onChange = this.onChange.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.oldDataLoad();
    }

    oldDataLoad() {
        // console.log(this.props.match.params.id);
        this.SISService.getOneAssignment(this.props.match.params.id, this.props.match.params.id).then(response =>{
            // console.log(response.data.data.Faculty);
            this.setState({
                AssignmentId : response.data.data.AssignmentId,
                Title: response.data.data.Title,
                Description: response.data.data.Description,
                StartDate: response.data.data.StartDate,
                EndDate: response.data.data.EndDate,
                Faculty: response.data.data.Faculty,
                CourseId2 :response.data.data.CourseId
            });
        }).catch(err =>{
            console.log(err);
        })
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    clearForm(e) {
        this.setState({
            CourseId2: '',
            AssignmentId: '',
            Title2: '',
            Description: '',
            StartDate: '',
            EndDate: ''
        });
    }

    onSubmit(e){
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
            this.SISService.editAssignment( this.state.CourseId2, this.state.AssignmentId,{
                Title: this.state.Title2,
                Description: this.state.Description,
                StartDate: this.state.StartDate,
                EndDate: this.state.EndDate,
            }).then(response => {
                console.log(response);
                alert(response.data.message);
            }).catch(error => {
                console.log(error);
            });
        }
    }

    render() {
        return <div className="container-contact100">
            <div className="wrap-contact100">
                <form className="contact100-form validate-form" onSubmit={this.onSubmit}>
				<span className="contact100-form-title">
					Update Assignment
				</span>

                    <div className="wrap-input100 validate-input" data-validate="Course ID is required">
                        <span className="label-input100">Course ID</span>
                        <input className="input100" type="text" value={this.state.CourseId2} onChange={this.onChange}
                               name="CourseId2" placeholder="SE3020/CS2020" readOnly={true} required={true}/>
                        <span className="focus-input100"/>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Exam ID is required">
                        <span className="label-input100">Assignment ID</span>
                        <input className="input100" type="text" value={this.state.AssignmentId} onChange={this.onChange}
                               name="AssignmentId" placeholder="A001" readOnly={true} required={true}/>
                        <span className="focus-input100"/>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Title is required">
                        <span className="label-input100">Title</span>
                        <input className="input100" type="text" value={this.state.Title2} onChange={this.onChange}
                               name="Title2" placeholder="Lab Assignment" required={true}/>
                        <span className="focus-input100"/>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Description is required">
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
                    </div>

                    <div className="container-contact100-form-btn">
                        <div className="wrap-contact100-form-btn">
                            <div className="contact100-form-bgbtn"/>
                            <button className="contact100-form-btn">
							<span>
                                Update Assignment
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
