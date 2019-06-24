//Import Libraries
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//Import Routing
const Lecturer = require('./routing/LecturerRouting');
const Mail = require('./routing/MailRouting');
const Login = require('./routing/Login');
const Course = require('./routing/course.server.routes');
const Student = require('./routing/StudentRouting');
const ExamRouter = require('./routing/ExamRouting');
const AssignmentRouter = require('./routing/AssignmentRouting');
const CosEnrollRouter = require('./routing/CosEnrollRouting');
//Import DatabaseConfigurations
const databaseConfig = require('./configuration/config');

//App Configurations
app.use(cors());
app.use(bodyParser.json());

//App Routing
app.use('/api', require('./authentication/TokenAuthentication'));
app.use('/api/lecturer', Lecturer);
app.use('/api/email', Mail);
app.use('/api/course', Course);
app.use('/api/student', Student);
app.use('/register/student', Student);
app.use('/api/exam', ExamRouter);
app.use('/api/assignment', AssignmentRouter);
app.use('/api/cosenroll', CosEnrollRouter);



//App Logging
app.use('/login', Login);


//Server Connection
app.listen(databaseConfig.app.port, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Server listening on port ' + databaseConfig.app.port);
});

//MongoDB Connection
mongoose.connect(databaseConfig.db, {useNewUrlParser: true, useFindAndModify: false});
mongoose.connection.on("connected", () => {
    console.log(`Connected to database ${databaseConfig.db}`);
});
mongoose.connection.on("error", err => {
    console.log(`Database Connection Failed ${err}`);
});