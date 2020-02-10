import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div  class=" container py-5" >
        <form method="post" class="form-group w-50 m-auto">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Your Name: 
            </label>
            <input type="text" name="name" class="form-control"/>
          </p>
          <p>
            <label>
              Your Email: 
            </label>
            <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </p>
          <p>
            <label>
              Message: 
            </label>
            <textarea name="message" class="form-control"/>
          </p>
          <p>
            <button type="submit" class="btn btn-primary">Send</button>
          </p>
        </form>
            </div>
        )
    }
}
