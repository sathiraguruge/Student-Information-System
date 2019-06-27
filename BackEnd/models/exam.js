const mongoose = require('mongoose');

const ExamSchema = new mongoose.Schema({
    CourseId: {
        type: String,
        required: true
    },
    ExamId: {
        type: String,
        required: true
    },
    Title: String,
    Type: String,
    TotalMarks: Number,
    PerFinalMark: Number,
    Date: String,
    Duration: String,
    CreatedBy: {
        type: String,
        required: true
    }
});
const Exam = mongoose.model('Exam', ExamSchema);
module.exports = Exam;