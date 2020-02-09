import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              {/* <img
                src="https://www.garvisor.com/frontend/images/empty-user-pic.png"
                alt="avatar"
                style={{height: '200px'}}
                 /> */}
            </div>

            <h2 style={{paddingTop: '2em'}}>Mouad Anouch</h2>
            <h4 className=' mdl-typography--text-capitalize' style={{color: 'grey'}}>full stack web developer</h4>
            {/* <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/> */}
            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> */}
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Bd sebta Residence Al Alia G8 APP8, Mohammedia </p>
            <h5>Phone</h5>
            <a className='mail' href='tel://+212 687654051'>06 87 65 40 51</a>
            <h5>Email</h5>
            {/* <p>mou-998@hotmail.fr</p> */}
            <a className='mail' href='mailto:mouad.anouch7@gmail.com'>mouad.anouch7@gmail.com</a>
            <h5>Web</h5>
            <a className='mail' href='https://my-portfolio-mouad.netlify.com' target="_blank" rel="noopener noreferrer">https://my-portfolio-mouad.netlify.com</a>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            {/* <FontAwesomeIcon icon="download" /> */}
            <button type="button" className="btn btn-dark">
              <a href='https://drive.google.com/open?id=1GBKBghIEQ01u1BJKJDd5oAh8fbO9iHXs' target="_blank" rel="noopener noreferrer" className='cv'>  <i className="fa fa-download"/> Download my cv</a>
            </button>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
                 startYear={2019}
                 endYear={2019}
                 schoolName="3W academy"
                 schoolDescription="Formation Développeur WEB Full-Stack"
                  />   
            <Education
                 startYear={2018}
                 endYear={2019}
                 schoolName="IFIAG"
                 schoolDescription="Licence Professionnelle Management et Entreprenariat"
                  />  
            <Education
              startYear={2016}
              endYear={2018}
              schoolName="Bts Khawarizmi"
              schoolDescription="Études brevet de technicien supérieur "
               /> 
                <Education
                 startYear={2015}
                 endYear={2016}
                 schoolName="LYCCEE TECHNIQUE MOHAMMEDIA"
                 schoolDescription="Baccalauréat System électrique"
                  />
              
              
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={'01/08/2017'}
              endYear={'30/08/2017'}
              jobName="CONCEPTEC"
              jobDescription="Stage service de maintenance"
              />

              <Experience
                startYear={'03/05/2018'}
                endYear={'06/06/2018'}
                jobName="SOMAC"
                jobDescription="Stage service de maintenance"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                  skill="HTML/CSS"
                  progress={80}
                  /> 
              <Skills
                  skill="Bootstrap"
                  progress={80}
                  />
              <Skills
                skill="javascript"
                progress={40}
                />
                  <Skills
                    skill="laravel"
                    progress={70}
                    />
                     <Skills
                    skill="Mysql"
                    progress={65}
                    />
                    <Skills
                    skill="PHP"
                    progress={50}
                    /> 
                    <Skills
                      skill="React js"
                      progress={50}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
