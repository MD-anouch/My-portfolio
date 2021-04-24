import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
// import profile from '../image/profile.jpg'


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.garvisor.com/frontend/images/empty-user-pic.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | php | Laravel | Mysql</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="hhttps://www.linkedin.com/in/mouad-anouch-54212620b/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/MD-anouch?tab=repositories" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href='https://drive.google.com/open?id=1GBKBghIEQ01u1BJKJDd5oAh8fbO9iHXs' target="_blank" rel="noopener noreferrer" >
            {/* <i class="fa fa-file" aria-hidden="true"/> */}
            <img
              src="https://cdn0.iconfinder.com/data/icons/job-resume-1/665/7-_Download_Resume-512.png"
              alt="avatar"
              className="cv-img"
              />
          </a>

          {/* Youtube */}
          {/* <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a> */}

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
