export default class LecturerRegistrationValidation {
    constructor(FirstName, LastName, MobileNo, DoB, NIC, StaffID ){
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.MobileNo = MobileNo;
        this.DoB = DoB;
        this.NIC = NIC;
        this.StaffID = StaffID;
    }

    get validate() {
        if(this.isName)
            if(this.isMobile)
                return this.isStaffID;
            else
                return false;
         else
             return false

    }

    get isName(){
        const exp = /^[a-zA-Z]+$/;
        if (!(this.FirstName.toString().match(exp))){
            alert('First Name contains number(s)');
            return false
        }else if (!(this.LastName.toString().match(exp))){
            alert('Last Name contains number(s)');
            return false
        }
        else
            return true;
    }

    get isMobile(){
        const exp = /[0-9]/;
        if(!(this.MobileNo.toString().match(exp))){
            alert('Mobile Number contains letters');
            return false;
        }else if (this.MobileNo.toString().length !== 10){
            alert('Mobile No should have 10 digit');
            return false
        }else
            return true
    }

    get isStaffID(){
        if (this.StaffID == null) {
            alert('Staff ID cannot be null');
            return false;
        } else {
            return true;
        }
    }
}