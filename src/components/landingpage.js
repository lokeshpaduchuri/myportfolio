import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../images/webIcons/ItsMe.jpg'

class Landingpage extends Component{
    render(){
        return(
            <div>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        //  src = "data:image/jpeg;base64,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"
                         src= {avatar}
                         alt="Avatar"
                         className="avatar-img"
                        />
                        <div className="banner-text">
                            <p className="bannerHeader">Full Stack Developer</p>
                            <hr></hr>
                            <p className="bannertechnologies">HTML/CSS | Bootstrap | Javascript | Angular | React | React Native | AWS | Firebase | Google Analytics </p>
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/lokeshpaduchuri" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                </a>

                                {/* GitHub */}
                                <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github" aria-hidden="true"></i>
                                </a>

                                {/* Instagram */}
                                <a href="https://www.instagram.com/lokip_photography/" target="_blank"  rel="noopener noreferrer">
                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                            </div>

                        </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Landingpage;