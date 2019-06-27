export default class UserService {

    setTokenData(tokenData) {
        localStorage.setItem('tokenData', tokenData);
    }

    get tokenData() {
        return localStorage.getItem('tokenData');
    }

    setUserDetails(LoggedInStatus, Username, Type) {
        if (LoggedInStatus === "Success") {
            localStorage.setItem('LoggedInStatus', true);
            localStorage.setItem('Username', Username);
            localStorage.setItem('Type', Type);
            alert('Login Successful !');
            if (Type === 'Admin')
                window.location.href = "/adminHome";
            else if (Type === 'Lecturer')
                window.location.href = "/lecturerHome";
            else if (Type === 'Student')
                window.location.href = "/studentHome"
        } else {
            alert('Invalid Username or Password !');
            localStorage.setItem('LoggedInStatus', false);
        }
    }

    get Type(){
        return (localStorage.getItem('Type'))
    }

    get isLoggedIn() {
        return (localStorage.getItem('LoggedInStatus') === 'true');
    }

    get username() {
        if (this.isLoggedIn) {
            return localStorage.getItem('Username');
        } else {
            return 'Invalid';
        }
    }

    logout() {
        localStorage.removeItem('LoggedInStatus');
        localStorage.removeItem('Username');
        localStorage.removeItem('tokenData');
        localStorage.removeItem('Type');
        window.location.href = "/login"
    }
}