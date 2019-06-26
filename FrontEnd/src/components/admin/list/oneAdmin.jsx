import React, {Component} from 'react'
import SISService from '../../../services/SISService'

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
    }

    delete() {
        this.SISService.deleteAdminMember(this.props.obj.Username).then(response => {
            alert(response.data.message);
            window.location.reload();
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.Username}</td>
                <td>{this.props.obj.Email}</td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete  <i className="fa fa-trash"/></button>
                </td>
            </tr>
        )
    }
}

export default OneAdminMember;
