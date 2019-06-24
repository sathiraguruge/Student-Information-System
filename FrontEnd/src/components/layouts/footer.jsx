import React, {Component} from 'react';

export default class Footer extends Component {

    render() {
        return <div>
            <div className="footer-distributed">
                <div className="footer-left">
                    <h3>Company<span>logo</span></h3>
                    <p className="footer-company-name">Woodcreek Hills University &copy; 2019</p>
                </div>

                <div className="footer-center">

                    <div>
                            <i className="fa fa-map-marker"/>
                        <p><span>21 Revolution Street</span> 1028 Victoria Street, Illinois</p>
                    </div>

                    <div>
                        <i className="fa fa-phone"/>
                        <p>+224-636-8052</p>
                    </div>

                    <div>
                        <i className="fa fa-envelope"/>
                        <p><a href="mailto:woodcreakuniversity@gmail.com">woodcreakuniversity@gmail.com</a></p>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span>About the University</span>
                        Academic Programs. World-Class Faculty. Degree programs: Arts & Humanities, Business, Cyber &
                        Technology, Education, Health Sciences, Social Sciences, Nursing.<br/><br/>
                        Wherever you are on your academic journey, our community is waiting for you to make your mark.
                    </p>

                    <div className="footer-icons">
                            <a href="#"><i className="fa fa-facebook"/></a>
                        <a href="#"><i className="fa fa-twitter"/></a>
                        <a href="#"><i className="fa fa-linkedin"/></a>
                        <a href="#"><i className="fa fa-github"/></a>
                    </div>
                </div>
            </div>
        </div>;
    }
}