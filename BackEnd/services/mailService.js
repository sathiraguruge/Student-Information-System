const nodeMailer = require('nodemailer');
const Template = require('../Email Templates/Templates');

const MailService = function () {
    this.sendMail = (recipient,recipientName, subject, messageType, data) => {
        return new Promise((response, reject) => {
            this.transporter = nodeMailer.createTransport({
                service: 'gmail',
                auth: {
                    type: 'OAuth2',
                    user: 'woodcreakuniversity@gmail.com',
                    clientId: '822033626361-jfdn6b8qmjqcddkgsblqq9r04vrirg2c.apps.googleusercontent.com',
                    clientSecret: 'AC0cLyylHM_8OK9Sfs87oGY6',
                    refreshToken: '1/REGhQ7Paxm1hnseMy2GCM8RJ1oug1G34uJaU_L3EJ1ExIY1y4Llg14YDa2ajWvjj',
                    accessToken: 'ya29.GlsoBxTDyiw-hGV9oI4T1AKUCpMIoYVPm_6VycPP7_rFyym45plUmdAgHCaRpOQ4ZQP9PFQtx7GMBV1QtrKpFCzCBNEmsDz2_OfoXTdjCre2s9CN7YO9gphBGIxz',
                },
            });


            this.getMessage = function(){
                var message = "";
                if(messageType === "Lecturer Registration"){
                    message = Template.getLecturerRegisterSuccessful(recipientName, data.Username, data.Password)
                }else if (messageType === "Admin Registration") {
                    message = Template.getAdminRegistrationSuccessful(recipientName, data.Username);
                }else if(messageType === "Password Reset"){
                    message = Template.getPasswordResetSuccessful(recipientName, data.Username, data.Password)
                }else if(messageType === "Course Added"){
                    message = Template.getCourseAddedSuccessful(recipientName, data.Username, data)
                }else if(messageType === "New Examination"){
                    message = Template.getExamNotificationSuccessful(data.CourseId, data.Title, data.Type, data.TotalMarks, data.PerFinalMark, data.Date, data.Duration)
                }else if(messageType === "New Assignment"){
                    message = Template.getAssignmentNotificationSuccessful(data.CourseId, data.Title, data.Description, data.StartDate, data.EndDate)
                }
                return message
            };

            this.mailOptions = {
                from: 'woodcreakuniversity@gmail.com',
                to: recipient.toString(),
                subject: subject.toString(),
                html : this.getMessage()
            };

            this.transporter.sendMail(this.mailOptions, function (err, res) {
                if (err) {
                    reject({status : 500, message : err});
                    console.log(err)
                } else {
                    response({status : 200, message : 'Email Successfully Sent'});
                    console.log('Email Successfully Sent')
                }
            });
        })
    }
};

module.exports = new MailService();