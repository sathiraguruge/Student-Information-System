import UserService from './UserService';
import axios from 'axios'

export default class APIService {

    constructor() {
        this.baseUrl = "http://localhost:3000/api";
        this.baseSpringBootUrl = "http://localhost:8080";
        this.userService = new UserService();
        const tokenData = this.userService.tokenData;

        this.messageHeaders = {
            "access-token": tokenData
        };
    }

    post(url, data, type) {
        return new Promise((resolve, reject) => {
            var baseURL = "";
            if (type === "SpringBoot")
                baseURL = this.baseSpringBootUrl;
            else if (type === "Node")
                baseURL = this.baseUrl;
            axios.post(baseURL + url, data, {headers: this.messageHeaders}).then(response => {
                if (response.data.message === "TokenExpiredError") {
                    alert("Session Timeout Please Login Again !");
                    this.userService.logout();
                    document.location.href = "login.html";
                }
                resolve(response);
            }).catch(err => {
                resolve(err);
            });
        });
    }

    put(url, data, type) {
        return new Promise((resolve, reject) => {
            var baseURL = "";
            if (type === "SpringBoot")
                baseURL = this.baseSpringBootUrl;
            else if (type === "Node")
                baseURL = this.baseUrl;
            axios.put(baseURL + url, data, {headers: this.messageHeaders}).then(response => {
                if (response.data.message === "TokenExpiredError") {
                    alert("Session Timeout Please Login Again !");
                    this.userService.logout();
                    document.location.href = "login.html";
                }
                resolve(response);
            }).catch(err => {
                resolve(err);
            });
        });
    }

    patch(url, data, type) {
        return new Promise((resolve, reject) => {
            var baseURL = "";
            if (type === "SpringBoot")
                baseURL = this.baseSpringBootUrl;
            else if (type === "Node")
                baseURL = this.baseUrl;
            axios.patch(baseURL + url, data, {headers: this.messageHeaders}).then(response => {
                if (response.data.message === "TokenExpiredError") {
                    alert("Session Timeout Please Login Again !");
                    this.userService.logout();
                    document.location.href = "login.html";
                }
                resolve(response);
            }).catch(err => {
                resolve(err);
            });
        });
    }

    postLogin(data) {
        return new Promise((resolve, reject) => {
            axios.post("http://localhost:3000/login/", data).then(response => {
                resolve(response);
            }).catch(err => {
                resolve(err);
            });
        });
    }

    postRegister(data) {
        return new Promise((resolve, reject) => {
            axios.post("http://localhost:3000/register/student", data).then(response => {
                resolve(response);
            }).catch(err => {
                resolve(err);
            });
        });
    }

    get(url, type) {
        var baseURL = "";
        if (type === "SpringBoot")
            baseURL = this.baseSpringBootUrl;
        else if (type === "Node")
            baseURL = this.baseUrl;
        return new Promise((resolve, reject) => {
            axios.get(baseURL + url, {headers: this.messageHeaders}).then(response => {
                if (response.data.message === "TokenExpiredError") {
                    alert("Session Timeout Please Login Again !");
                    this.userService.logout();
                    document.location.href = "login.html";
                }
                resolve(response);
            }).catch(err => {
                resolve(err);
            });
        });
    }

    delete(url, type) {
        var baseURL = "";
        if (type === "SpringBoot")
            baseURL = this.baseSpringBootUrl;
        else if (type === "Node")
            baseURL = this.baseUrl;
        return new Promise((resolve, reject) => {
            axios.delete(baseURL + url, {headers: this.messageHeaders}).then(response => {
                if (response.data.message === "TokenExpiredError") {
                    alert("Session Timeout Please Login Again !");
                    this.userService.logout();
                    document.location.href = "login.html";
                }
                resolve(response);
            }).catch(err => {
                resolve(err);
            });
        });
    }
}