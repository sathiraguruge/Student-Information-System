const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
    CourseId: {
        type: String,
        required: true
    },
    AssignmentId: {
        type: String,
        required: true
    },
    Title: String,
    Description: String,
    StartDate: Date,
    EndDate: Date,
    CreatedBy: {
        type: String,
        required: true
    }
});
const Assignment = mongoose.model('Assignment', AssignmentSchema);
module.exports =  Assignment;