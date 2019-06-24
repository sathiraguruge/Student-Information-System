import React, {Component} from 'react'
import SISService from '../../../services/SISService'
import {Link} from "react-router-dom";

class OneExamItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            examItem:{},
        };
        this.SISService = new SISService();
        this.delete = this.delete.bind(this);
    }

    delete() {
        this.SISService.deleteExam(this.props.obj.CourseId, this.props.obj.ExamId).then(response => {
            alert(response.data);
            window.location.reload();
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <tr key={this.props.obj._id}>
                <td>{this.props.obj.CourseId}</td>
                <td>{this.props.obj.ExamId}</td>
                <td>{this.props.obj.Title}</td>
                <td>{this.props.obj.Type}</td>
                <td>{this.props.obj.TotalMarks}</td>
                <td>{this.props.obj.PerFinalMark}</td>
                <td>{this.props.obj.Date}</td>
                <td>{this.props.obj.Duration}</td>
                <td>{this.props.obj.CreatedBy}</td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete  <i className="fa fa-trash"/></button>
                </td>
            </tr>
        )
    }
}

export default OneExamItem;
