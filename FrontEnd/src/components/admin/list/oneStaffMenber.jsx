import React, {Component} from 'react'
import SISService from '../../../services/SISService'
import Ripples from "react-ripples";

class OneStaffMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            type: "",
            edit: false
        };
        this.SISService = new SISService();
        this.delete = this.delete.bind(this);
        this.resetPassword = this.resetPassword.bind(this);
    }

    delete() {
        this.SISService.deleteStaffMember(this.props.obj.StaffID).then(response => {
            alert(response.data.message);
            window.location.reload();
        }).catch(function (error) {
            console.log(error);
        });
    }


    resetPassword() {
        this.SISService.resetPassword({"Username": this.props.obj.StaffID}).then(response => {
            alert(response.data.message);
            window.location.reload();
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.StaffID}</td>
                <td>{this.props.obj.FirstName}</td>
                <td>{this.props.obj.LastName}</td>
                <td>{this.props.obj.Email}</td>
                <td>{this.props.obj.Faculty}</td>
                <td>
                    <Ripples>
                        <button style={{marginRight: '10px'}} onClick={this.resetPassword}
                                className="btn btn-warning">Reset Password <i className="fa fa-refresh"/></button>
                    </Ripples>
                    <Ripples>
                        <button onClick={this.delete} className="btn btn-danger">Delete <i className="fa fa-trash"/>
                        </button>
                    </Ripples>
                </td>
            </tr>
        )
    }
}

export default OneStaffMember;
