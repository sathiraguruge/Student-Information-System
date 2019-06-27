const template = function () {
    this.getLecturerRegisterSuccessful = (recepientName, Username, Password) => {
        const RegisterSuccessfull = "<h2><span style=\"font-family: Georgia, serif; font-size: 34px; letter-spacing: 2px; word-spacing: 1px; color: #000000; font-weight: bold; text-decoration: none; font-style: normal; font-variant: normal; text-transform: none;\"><strong>Wood Creak University</strong></span></h2>\n" +
            "<p><span style=\"font-family: Georgia, serif; font-size: 25px; letter-spacing: 2px; word-spacing: 1px; color: #000000; font-weight: 400; text-decoration: none; font-style: normal; font-variant: normal; text-transform: none;\">Registration Successful</span></p>\n" +
            "<hr />\n" +
            "<h2><span style=\"color: #000000; font-family: Georgia;\">Dear " + recepientName + " ,</span></h2>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 30px;\">You have successfully registered for the Student Information System of Wood Creek University</p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 30px;\">Your account is now active !</p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 30px;\">Make sure you don't share your login credentails and change your password once you login&nbsp;</p>\n" +
            "<p>&nbsp;</p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 30px;\">Use the following login credentials to login</p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 60px;\">Username : " + Username + "&nbsp;</p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 60px;\">Password   : " + Password + "&nbsp;&nbsp;<br /><br /></p>\n" +
            "<p style=\"text-align: left;\"><a href=\"http://localhost:1234/login\"><button style=\"background: linear-gradient(to bottom, #33bdef 5%, #019ad2 100%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#33bdef', endColorstr='#019ad2',GradientType=0); background-color: #33bdef; -moz-border-radius: 6px; -webkit-border-radius: 6px; border-radius: 6px; border: 1px solid #057fd0; display: inline-block; cursor: pointer; color: #ffffff; font-family: Courier New; font-size: 19px; font-weight: bold; padding: 9px 26px; text-decoration: none;\"> Login Here </button></a></p>\n" +
            "<p style=\"text-align: left;\">&nbsp;</p>\n" +
            "<p style=\"text-align: left;\">&nbsp;</p>\n" +
            "<p>&nbsp;</p>";
        return RegisterSuccessfull
    };

   this.getAdminRegistrationSuccessful = (recepientName,Username) => {
       const RegisterAdminSuccessfull = "<h2><span style=\"font-family: Georgia, serif; font-size: 34px; letter-spacing: 2px; word-spacing: 1px; color: #000000; font-weight: bold; text-decoration: none; font-style: normal; font-variant: normal; text-transform: none;\"><strong>Wood Creak University</strong></span></h2>\n" +
           "<p><span style=\"font-family: Georgia, serif; font-size: 25px; letter-spacing: 2px; word-spacing: 1px; color: #000000; font-weight: 400; text-decoration: none; font-style: normal; font-variant: normal; text-transform: none;\">Registration Successful</span></p>\n" +
           "<hr />\n" +
           "<h2><span style=\"color: #000000; font-family: Georgia;\">Dear " + recepientName + " ,</span></h2>\n" +
           "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 30px;\">You have successfully registered for the Student Information System of Wood Creek University</p>\n" +
           "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 30px;\">Your account is now active !</p>\n" +
           "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 30px;\">You have registered as an Admin&nbsp;</p>\n" +
           "<p>&nbsp;</p>\n" +
           "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 30px;\">Use the following username credentials to login</p>\n" +
           "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 60px;\">Username : " + Username + "&nbsp;</p>\n" +
           "<p style=\"text-align: left;\"><a href=\"http://localhost:1234/login\"><button style=\"background: linear-gradient(to bottom, #33bdef 5%, #019ad2 100%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#33bdef', endColorstr='#019ad2',GradientType=0); background-color: #33bdef; -moz-border-radius: 6px; -webkit-border-radius: 6px; border-radius: 6px; border: 1px solid #057fd0; display: inline-block; cursor: pointer; color: #ffffff; font-family: Courier New; font-size: 19px; font-weight: bold; padding: 9px 26px; text-decoration: none;\"> Login Here </button></a></p>\n" +
           "<p style=\"text-align: left;\">&nbsp;</p>\n" +
           "<p style=\"text-align: left;\">&nbsp;</p>\n" +
           "<p>&nbsp;</p>";
       return RegisterAdminSuccessfull;
   }

    this.getPasswordResetSuccessful = (recepientName, Username, Password) => {
        const PasswordReset = "<h2><span style=\"font-family: Georgia, serif; font-size: 34px; letter-spacing: 2px; word-spacing: 1px; color: #000000; font-weight: bold; text-decoration: none; font-style: normal; font-variant: normal; text-transform: none;\"><strong>Wood Creak University</strong></span></h2>\n" +
            "<p><span style=\"font-family: Georgia, serif; font-size: 25px; letter-spacing: 2px; word-spacing: 1px; color: #000000; font-weight: 400; text-decoration: none; font-style: normal; font-variant: normal; text-transform: none;\">Password Reset</span></p>\n" +
            "<hr />\n" +
            "<h2><span style=\"color: #000000; font-family: Georgia;\">Dear " + recepientName + " ,</span></h2>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 30px;\">You have password has been reset</p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 30px;\">Make sure you don't share your login credentails and change your password once you login&nbsp;</p>\n" +
            "<p>&nbsp;</p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 30px;\">Use the following login credentials to login</p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 60px;\">Username : " + Username + "&nbsp;</p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 60px;\">Password   : " + Password + "&nbsp;&nbsp;<br /><br /></p>\n" +
            "<p style=\"text-align: left;\"><a href=\"http://localhost:1234/login\"><button style=\"background: linear-gradient(to bottom, #33bdef 5%, #019ad2 100%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#33bdef', endColorstr='#019ad2',GradientType=0); background-color: #33bdef; -moz-border-radius: 6px; -webkit-border-radius: 6px; border-radius: 6px; border: 1px solid #057fd0; display: inline-block; cursor: pointer; color: #ffffff; font-family: Courier New; font-size: 19px; font-weight: bold; padding: 9px 26px; text-decoration: none;\"> Login Here </button></a></p>\n" +
            "<p style=\"text-align: left;\">&nbsp;</p>\n" +
            "<p style=\"text-align: left;\">&nbsp;</p>\n" +
            "<p>&nbsp;</p>";
        return PasswordReset;
    };

    this.getCourseAddedSuccessful = (recepientName, Username, data) => {
        const courseAdded = "<h2><span style=\"font-family: Georgia, serif; font-size: 34px; letter-spacing: 2px; word-spacing: 1px; color: #000000; font-weight: bold; text-decoration: none; font-style: normal; font-variant: normal; text-transform: none;\"><strong>Wood Creak University</strong></span></h2>\n" +
            "<p><span style=\"font-family: Georgia, serif; font-size: 25px; letter-spacing: 2px; word-spacing: 1px; color: #000000; font-weight: 400; text-decoration: none; font-style: normal; font-variant: normal; text-transform: none;\">Password Reset</span></p>\n" +
            "<hr />\n" +
            "<h2><span style=\"color: #000000; font-family: Georgia;\">Dear " + recepientName + " ,</span></h2>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 30px;\">You have assign to course on "+data.course.CourseAddedDate+". please login to the account and varify it was related you</p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 30px;\">Make sure you don't share your login credentails and change your password once you login&nbsp;</p>\n" +
            "<p>&nbsp;</p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 60px;\">Course Name   : " + data.course.CourseName + "&nbsp;&nbsp;<br /><br /></p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 60px;\">CourseId   : " + data.course.CourseId + "&nbsp;&nbsp;<br /><br /></p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 60px;\">Enrollment Key   : " + data.course.EnrollmentKey + "&nbsp;&nbsp;<br /><br /></p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 60px;\">Year   : " + data.course.Year + "&nbsp;&nbsp;<br /><br /></p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 60px;\">Semester   : " + data.course.Semester + "&nbsp;&nbsp;<br /><br /></p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 60px;\">Faculty   : " + data.course.Faculty + "&nbsp;&nbsp;<br /><br /></p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 60px;\">Department   : " + data.course.Department + "&nbsp;&nbsp;<br /><br /></p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 60px;\">Course Name   : " + data.course.CourseName + "&nbsp;&nbsp;<br /><br /></p>\n" +
            "<p style=\"text-align: left;\"><a href=\"http://localhost:1234/login\"><button style=\"background: linear-gradient(to bottom, #33bdef 5%, #019ad2 100%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#33bdef', endColorstr='#019ad2',GradientType=0); background-color: #33bdef; -moz-border-radius: 6px; -webkit-border-radius: 6px; border-radius: 6px; border: 1px solid #057fd0; display: inline-block; cursor: pointer; color: #ffffff; font-family: Courier New; font-size: 19px; font-weight: bold; padding: 9px 26px; text-decoration: none;\"> Login Here </button></a></p>\n" +
            "<p style=\"text-align: left;\">&nbsp;</p>\n" +
            "<p style=\"text-align: left;\">&nbsp;</p>\n" +
            "<p>&nbsp;</p>";
        return courseAdded;
    };

    this.getExamNotificationSuccessful = (CourseId, Title, Type, TotalMarks, PerFinalMark, Date, Duration) => {
        const ExamNotification = "<h2><span style=\"font-family: Georgia, serif; font-size: 34px; letter-spacing: 2px; word-spacing: 1px; color: #000000; font-weight: bold; text-decoration: none; font-style: normal; font-variant: normal; text-transform: none;\"><strong>Wood Creak University</strong></span></h2>\n" +
            "<p><span style=\"font-family: Georgia, serif; font-size: 25px; letter-spacing: 2px; word-spacing: 1px; color: #000000; font-weight: 400; text-decoration: none; font-style: normal; font-variant: normal; text-transform: none;\">Exam Notification</span></p>\n" +
            "<hr />\n" +
            "<h2><span style=\"color: #000000; font-family: Georgia;\">Dear,</span></h2>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 30px;\">You have new Examination</p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 30px;\">Please refer the folowing details and be prepared for the Examination&nbsp;</p>\n" +
            "<p>&nbsp;</p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 30px;\">Exam Details</p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 60px;\">Course ID           : " + CourseId + "&nbsp;</p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 60px;\">Exam                : " + Title + "&nbsp;</p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 60px;\">Type of Examination : " + Type + "&nbsp;</p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 60px;\">Total Marks Given   : " + TotalMarks + "&nbsp;</p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 60px;\">Percentage for the final GPA : " + PerFinalMark + "&nbsp;</p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 60px;\">Date Scheduled      : " + Date + "&nbsp;</p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 60px;\">Duration of Exam    : " + Duration + "&nbsp;&nbsp;<br /><br /></p>\n" +
            "<p style=\"text-align: left;\"><a href=\"http://localhost:1234/login\"><button style=\"background: linear-gradient(to bottom, #33bdef 5%, #019ad2 100%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#33bdef', endColorstr='#019ad2',GradientType=0); background-color: #33bdef; -moz-border-radius: 6px; -webkit-border-radius: 6px; border-radius: 6px; border: 1px solid #057fd0; display: inline-block; cursor: pointer; color: #ffffff; font-family: Courier New; font-size: 19px; font-weight: bold; padding: 9px 26px; text-decoration: none;\"> Login Here </button></a></p>\n" +
            "<p style=\"text-align: left;\">&nbsp;</p>\n" +
            "<p style=\"text-align: left;\">&nbsp;</p>\n" +
            "<p>&nbsp;</p>";
        return ExamNotification;
    };

    this.getAssignmentNotificationSuccessful = (CourseId, Title, Description, StartDate, EndDate) => {
        const AssignmentNotification = "<h2><span style=\"font-family: Georgia, serif; font-size: 34px; letter-spacing: 2px; word-spacing: 1px; color: #000000; font-weight: bold; text-decoration: none; font-style: normal; font-variant: normal; text-transform: none;\"><strong>Wood Creak University</strong></span></h2>\n" +
            "<p><span style=\"font-family: Georgia, serif; font-size: 25px; letter-spacing: 2px; word-spacing: 1px; color: #000000; font-weight: 400; text-decoration: none; font-style: normal; font-variant: normal; text-transform: none;\">Exam Notification</span></p>\n" +
            "<hr />\n" +
            "<h2><span style=\"color: #000000; font-family: Georgia;\">Dear,</span></h2>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 30px;\">You have new Assignment</p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 30px;\">Please refer the folowing details and add submissions before the Deadline&nbsp;</p>\n" +
            "<p>&nbsp;</p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 30px;\">Assignment Details</p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 60px;\">Course ID           : " + CourseId + "&nbsp;</p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 60px;\">Assignment          : " + Title + "&nbsp;</p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 60px;\">Description         : " + Description + "&nbsp;</p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 60px;\">Start On            : " + StartDate + "&nbsp;</p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 60px;\">End On              : " + EndDate + "&nbsp;&nbsp;<br /><br /></p>\n" +
            "<p style=\"text-align: left;\"><a href=\"http://localhost:1234/login\"><button style=\"background: linear-gradient(to bottom, #33bdef 5%, #019ad2 100%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#33bdef', endColorstr='#019ad2',GradientType=0); background-color: #33bdef; -moz-border-radius: 6px; -webkit-border-radius: 6px; border-radius: 6px; border: 1px solid #057fd0; display: inline-block; cursor: pointer; color: #ffffff; font-family: Courier New; font-size: 19px; font-weight: bold; padding: 9px 26px; text-decoration: none;\"> Login Here </button></a></p>\n" +
            "<p style=\"text-align: left;\">&nbsp;</p>\n" +
            "<p style=\"text-align: left;\">&nbsp;</p>\n" +
            "<p>&nbsp;</p>";
        return AssignmentNotification;
    };
};

module.exports = new template();