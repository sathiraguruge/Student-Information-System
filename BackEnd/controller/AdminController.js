const AdminModel = require('../models/Admin');
const md5 = require('md5');
const MailService = require('../services/MailService');

const AdminController = function () {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            AdminModel.findOne({Username: data.Username}).then(admin => {
                if (admin === null) {
                    const newAdmin = new AdminModel(data);
                    newAdmin.Password = md5(data.Password);
                    newAdmin.save().then(() => {
                        resolve({status: 200, message: 'Admin Registered Successfully !'});
                    }).then(() => {
                        MailService.sendMail(newAdmin.Email, newAdmin.Username, "Registration", "Admin Registration", {"Username": newAdmin.Username})
                    }).catch(err => {
                        reject({status: 500, message: err})
                    });
                } else {
                    reject({status: 500, message: 'Username is Already Taken !'})
                }
            })
        })
    };

    this.update = (username, data) => {
        return new Promise((resolve, reject) => {
            AdminModel.findOneAndUpdate(({Username: username}), data).then((admin) => {
                if (admin === null)
                    resolve({status: 404, message: 'Admin not found'});
                else
                    resolve({status: 200, message: "Admin '" + username + "' Successfully Updated"});
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };

    this.remove = (username) => {
        return new Promise((resolve, reject) => {
            AdminModel.findOneAndDelete({Username: username}).then((admin) => {
                if (admin === null)
                    resolve({status: 404, message: 'Admin not found'});
                else
                    resolve({status: 200, message: "Admin of Username '" + username + "' Successfully Deleted"});
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };

    this.getAll = () => {
        return new Promise((resolve, reject) => {
            AdminModel.find().then((admins) => {
                resolve(admins);
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };

    this.get = (username) => {
        return new Promise((resolve, reject) => {
            AdminModel.findOne({Username: username}).then((admin) => {
                if (admin === null)
                    resolve({status: 404, message: 'Admin not found'});
                else
                    resolve(admin);
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };

};

module.exports = new AdminController();