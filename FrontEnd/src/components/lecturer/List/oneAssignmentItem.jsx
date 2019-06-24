import React, {Component} from 'react'
import SISService from '../../../services/SISService'
import {Link} from "react-router-dom";

class OneAssignmentItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            assignmentItem:{},
        };
        this.SISService = new SISService();
        this.delete = this.delete.bind(this);
    }

    delete() {
        this.SISService.deleteAssignment(this.props.obj.CourseId, this.props.obj.AssignmentId).then(response => {
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
                <td>{this.props.obj.AssignmentId}</td>
                <td>{this.props.obj.Title}</td>
                <td>{this.props.obj.Description}</td>
                <td>{this.props.obj.StartDate}</td>
                <td>{this.props.obj.EndDate}</td>
                <td>{this.props.obj.CreatedBy}</td>
                <td>
                    <Link to={"/editAssignment/"+this.props.obj.CourseId + "/" +this.props.obj.AssignmentId} className="btn btn-warning"><i
                        className="fa fa-edit"/> Edit </Link><a> </a>
                    <button onClick={this.delete} className="btn btn-danger">Delete  <i className="fa fa-trash"/></button>
                </td>
            </tr>
        )
    }
}

export default OneAssignmentItem;
