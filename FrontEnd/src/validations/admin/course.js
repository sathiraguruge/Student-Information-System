import SISService from "../../services/SISService";

export default class CourseAddValidation {
    constructor(CourseName,CourseId,InchargLecture,Department){
        this.CourseName = CourseName;
        this.InchargLecture = InchargLecture;
        this.CourseId = CourseId;
        this.EnrollKey='';
        this.NumberOfEnrolledStudent='';
        this.Year='';
        this.Semester='';
        this.Faculty='';
        this.Department=Department;
        this.CourseAddedDate='';
        this.AcceptByLectureFlag='';
        this.SISService = new SISService();
    }

    get validate() {
        if(this.isCourseName)
            if(this.isCourseId)
                if(this.isLecture)
                    return true;
                else
                    return false;
            else
                return false;
        else
            return false

    }

    get isCourseName(){
        var exp = /^[a-zA-Z]+$/;
        if (!(this.CourseName.toString().match(exp))){
            alert('Course Name contains number(s)')
            return false
        }else if (!(this.Department.toString().match(exp))){
            alert('Department Name contains number(s)')
            return false
        }
        else
            return true;
    }
    get isCourseId(){
        if (this.CourseId == null) {
            alert('Course ID cannot be null');
            return false;
        } else {
            return true;
        }
    }

    get isLecture(){
        this.SISService.getMemberProfile(this.InchargLecture).then(Lecturer=>{
            if (Lecturer == null) {
                alert('There No Lecture in this ID');
                return false;
            } else {
                return true;
            }
        })

    }
}