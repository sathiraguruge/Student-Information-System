export default class AdminRegistrationValidation {
    constructor(Username, Password1, Password2) {
        this.Username = Username;
        this.Password1 = Password1;
        this.Password2 = Password2;
    }

    get validate() {
        if (this.isUsername)
            return this.isPassword;
        else
            return false;
    }

    get isUsername() {
        const exp = /[0-9]/;
        const exp2 = /[a-zA-Z]/;
        if (this.Username.match(exp) != null && this.Username.match(exp2) != null) {
            return true;
        } else {
            alert('Enter a Combination of Letters and Numbers for Username');
            return false;
        }
    }

    get isPassword() {
        if (!(this.Password1.localeCompare(this.Password2))) {
            if (this.Password1.length >= 8) {
                const exp1 = /[0-9]/;
                const exp2 = /[a-z]/;
                const exp3 = /[A-Z]/;
                const exp4 = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
                if ((this.Password1.match(exp1) != null) && (this.Password1.match(exp2) != null) && (this.Password1.match(exp3) != null) && (this.Password1.match(exp4) != null)) {
                    return true;
                } else {
                    alert('Enter a Combination of Uppercase, Lowercase, Digits, and Special Characters');
                    return false;
                }
            } else {
                alert('Password should Contain at Least 8 Characters');
                return false;
            }
        } else {
            alert('Passwords do not match !');
            return false;
        }
    }
}