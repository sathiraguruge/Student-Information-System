const mongoose = require('mongoose');

const LecturerSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    Email: String,
    Mobile: String,
    DoB: Date,
    NIC: String,
    Gender: String,
    StaffID: String,
    Username: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
    Faculty: String
});
const Lecturer = mongoose.model('Lecturer', LecturerSchema);
module.exports = Lecturer;