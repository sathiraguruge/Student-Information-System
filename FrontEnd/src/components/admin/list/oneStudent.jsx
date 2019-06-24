import React, {Component} from 'react'
import SISService from '../../../services/SISService'
import Ripples from "react-ripples";

class OneAdminMember extends Component {
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

    resetPassword() {
        this.SISService.resetStudentPassword(this.props.obj.SID).then(response => {
            alert(response.data.message);
            window.location.reload();
        }).catch(function (error) {
            console.log(error);
        });
    }

    delete() {
        this.SISService.deleteAdminMember(this.props.obj.userName).then(response => {
            alert(response.data);
            window.location.reload();
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.SID}</td>
                <td>{this.props.obj.Email}</td>
                <td>{this.props.obj.Mobile}</td>
                <td>{this.props.obj.NIC}</td>
                <td>{this.props.obj.Faculty}</td>
                <td>{this.props.obj.Gender}</td>
                <td>
                    <Ripples>
                        <button style={{marginRight: '10px'}} onClick={this.resetPassword}
                                className="btn btn-warning">Reset Password <i className="fa fa-refresh"/></button>
                    </Ripples>
                    <button onClick={this.delete} className="btn btn-danger">Delete <i className="fa fa-trash"/>
                    </button>
                </td>
            </tr>
        )
    }
}

export default OneAdminMember;
