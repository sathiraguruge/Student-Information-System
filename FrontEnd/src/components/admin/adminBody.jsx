import React, {Component} from 'react';
import { Fade } from 'react-slideshow-image';

export default class AdminBody extends Component {
    constructor() {
        super()
        this.slideImages = [
            '../../../public/images/h1.jpg',
            '../../../public/images/h1.jpg',
            '../../../public/images/h1.jpg'
        ]
        this.fadeProperties = {
            duration: 5000,
            transitionDuration: 500,
            infinite: false,
            indicators: true
        }
    }


    render() {
        return (
            <div style={{marginTop : "50px"}}>
            <Fade>
                <div className="each-slide">
                    <div style={{marginLeft : "210px" , marginBottom : "100px"}}>

                        <div className="imageContainer">
                        <img src={ require('../../images/i3.jpg')} alt="Image1" width="1500" height="700" style={{ display: "block", marginleft: "auto", marginRight: "auto"}}/>
                        <div className="centeredImageText">
                            <p className="footer-center" style={{ color: "black", fontSize: "20px"}}><b>Quality Education Wherever You Are</b><br/>In just 25 years, Wood Creak University has achieved amazing feats and emerged as one of Australia's great universities.</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="imageContainer">
                    <div style={{marginLeft : "210px" , marginBottom : "100px"}}>
                        <img src={ require('../../images/b1.jpg')} alt="Image2" width="1500" height="700" style={{ display: "block", marginleft: "auto", marginRight: "auto"}}/>
                        <div className="centeredImageText">
                            <p className="footer-center" style={{ color: "black", fontSize: "20px"}}><b>First Changemaker Campus in the Country </b><br/>Recognised as the first and only Changemaker Campus</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="imageContainer">
                    <div style={{marginLeft : "210px" , marginBottom : "100px"}}>
                        <img src={ require('../../images/e1.jpg')} alt="Image3" width="1500" height="700" style={{ display: "block", marginleft: "auto", marginRight: "auto"}}/>
                        <div className="centeredImageText">
                            <p className="footer-center" style={{ color: "black", fontSize: "20px"}}><b>Top 2% of Universities Worldwide</b><br/>One of the Top 600 universities in the world.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="imageContainer">
                    <div style={{marginLeft : "210px" , marginBottom : "100px"}}>
                        <img src={ require('../../images/i1.jpg')} alt="Image4" width="1500" height="700" style={{ display: "block", marginleft: "auto", marginRight: "auto"}}/>
                        <div className="centeredImageText">
                            <p className="footer-center" style={{ color: "black", fontSize: "20px"}}><b>Start your journey</b><br/>Wood Creak University degrees give you options for how and what you learn</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="imageContainer">
                    <div style={{marginLeft : "210px" , marginBottom : "100px"}}>
                        <img src={ require('../../images/i2.jpg')} alt="Image5" width="1500" height="700" style={{ display: "block", marginleft: "auto", marginRight: "auto"}}/>
                        <div className="centeredImageText">
                            <p className="footer-center" style={{ color: "black", fontSize: "20px"}}><b>Quality is not an act, but a habit. – Aristotle.</b></p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="imageContainer">
                    <div style={{marginLeft : "210px" , marginBottom : "100px"}}>
                        <img src={ require('../../images/i4.jpg')} alt="Image6" width="1500" height="700" style={{ display: "block", marginleft: "auto", marginRight: "auto"}}/>
                        <div className="centeredImageText">
                            <p className="footer-center" style={{ color: "black", fontSize: "20px"}}><b>Celebrating 80 Years of Excellency</b></p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="imageContainer">
                    <div style={{marginLeft : "210px" , marginBottom : "100px"}}>
                        <img src={ require('../../images/i5.jpg')} alt="Image7" width="1500" height="700" style={{ display: "block", marginleft: "auto", marginRight: "auto"}}/>
                        <div className="centeredImageText">
                            <p className="footer-center" style={{ color: "black", fontSize: "20px"}}><b>Make Your Ambitions a Reality</b><br/>Quality, Affordability, Employability</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="imageContainer">
                    <div style={{marginLeft : "210px" , marginBottom : "100px"}}>
                        <img src={ require('../../images/c1.jpg')} alt="Image8" width="1500" height="700" style={{ display: "block", marginleft: "auto", marginRight: "auto"}}/>
                        <div className="centeredImageText">
                            <p className="footer-center" style={{ color: "black", fontSize: "20px"}}><b>Earn your B.Sc</b><br/>In Counselor Education and Supervision</p>
                        </div>
                    </div>
                    </div>
                </div>
            </Fade>
            </div>
        )
    };
}