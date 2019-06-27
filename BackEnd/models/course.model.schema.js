const mongoose=require('mongoose');

const CourseSchema = new mongoose.Schema({
    CourseName : String,
    InchargLecture : String,
    CourseId : String,
    EnrollmentKey : String,
    NumberOfEnrolledStudent : Number,
    Year : Number,
    Semester : Number,
    Faculty : String,
    Department : String,    
    CourseAddedDate : String,
    AcceptByLectureFlag : {
        type : Number,
        min : 0,
        max : 1,
        default :0
    },

});
const Course = mongoose.model('Course',CourseSchema);
module.exports = Course;
