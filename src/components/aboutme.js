import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';


class Aboutme extends Component{
    render(){
        return(
            <div className='resume-body'>
                <Grid className= 'resume-grid'>
                <Cell col={3} className="aboutmeImage">
                    <img src="data:image/png;base64,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" alt="myphoto"></img>
                </Cell>
                <Cell col={9} className="aboutMeDetails">
                    <p className= 'aboutMeText'>A developer, traveller and photographer</p>
                    <p className= 'aboutMeText'>Located in White Plains, NY working for Pioneer Global Inc</p>
                    <p className= 'aboutMeText'>In development I specialize in design, coding for front-end web applications</p>
                    <p className= 'aboutMeText'>Experienced in front-end development with in depth understanding of web elements and expertise in HTML, CSS, Angular, React and Javascript</p>
                    <p className= 'aboutMeText'>Experience with cloud technologies like Firebase and AWS</p>
                    <p className= 'aboutMeText'>Photographer with footprints in landscape, portraits and wildlife photography</p>
                    <p className= 'aboutMeText'>Been in development since 2015 and photography since 2011</p>
                </Cell>
                </Grid>
            </div>
        )
    }
}

export default Aboutme;