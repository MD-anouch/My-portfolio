import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                {/* <Link to="/aboutme">About Me</Link> */}
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/form">Contact Form</Link>

            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
            <Navigation>
              <Link to="/resume">Resume</Link>
              {/* <Link to="/aboutme">About Me</Link> */}
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/form">Contact Form</Link>
              <a className='social-media' href="https://github.com/MD-anouch?tab=repositories" rel="noopener noreferrer" target="_blank">
               <i className="fa fa-github-square" aria-hidden="true"> GIT</i>
              </a>
              <a className='social-media' href="https://www.linkedin.com/in/mouad-a-b66b1aa5/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true"> Linkedin</i>
              </a>    
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
