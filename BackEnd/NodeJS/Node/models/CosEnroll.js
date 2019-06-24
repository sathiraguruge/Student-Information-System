const mongoose = require('mongoose');

const EnrollSchema = new mongoose.Schema({
    CourseId: {
        type: String,
        required: true
    },
    StudentId: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    }
});
const CosEnroll = mongoose.model('CosEnroll', EnrollSchema);
module.exports =  CosEnroll;
//testing purpose