const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    SID: String,
    Password: String,
    Email: String,
    Mobile: String,
    DoB: Date,
    NIC: String,
    Faculty : String,
    Gender : String,
    Courses : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }],
    ImageURL : String
});


const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;