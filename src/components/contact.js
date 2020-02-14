import React, { Component } from 'react';
import Form from './Form'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            {/* <h2>Mouad Anouch</h2>
            <img
              src="https://www.garvisor.com/frontend/images/empty-user-pic.png"
              alt="avatar"
              style={{height: '250px'}}
               /> */}
               <Form/>
             {/* <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p> */}

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            {/* <section> */}
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    <a className='mail' href='tel://+212 687654051'>06 87 65 40 51</a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <i class="fa fa-linkedin" aria-hidden="true"/>
                    <a className='mail' target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/mouad-a-b66b1aa5/'>Mouad Anouch</a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                   <a className='mail' href='mailto:mouad.anouch7@gmail.com'>mouad.anouch7@gmail.com</a>
                  </ListItemContent>
                </ListItem>
                {/* <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    MySkypeID
                  </ListItemContent>
                </ListItem> */}
              </List>
            </div>
            {/* </section> */}
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
