import React,{Component} from 'react';
import CourseService from "../../../services/CourseService";
// import {Link} from "react-router-dom";

class OneCourseNotification extends Component{
    constructor(props){
        super(props);
        this.state ={
            course:{}
        }
        this.courseService = new CourseService();
        this.accept=this.accept.bind(this);
    }

    accept(){
        var courseId = this.props.obj.CourseId;
        var data = {
            AcceptByLectureFlag : 1
        }
        this.courseService.editCourse(courseId,data).then(response =>{
            alert(response.data.message);
            if(response.data.status === 200){
                window.location.href = "/lecturerNotification"
            }
        }).catch(err =>{
            console.log(err);
        })
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
                <td>{this.props.obj.CourseAddedDate}</td>
                <td>{this.props.obj.NumberOfEnrolledStudent}</td>
                {this.props.obj.AcceptByLectureFlag == 0? <td>Lecturer not Accept</td>: <td>Lecturer Accepted</td> }
                <td>
                    {/*<Link to={"/editCourse/"+this.props.obj.CourseId} className="btn btn-warning"><i
                        className="fa fa-edit"/> Edit </Link><a> </a>*/}
                    <button onClick={this.accept} className="btn btn-danger">Accept <i className="fa fa-universal-access"/></button>
                </td>
            </tr>
        )
    }
}

export default OneCourseNotification;