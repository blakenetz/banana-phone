import React, { Component } from 'react';
import 'whatwg-fetch';

class SignupForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      formSent: false,
      invalidEmail: false,
      reqName: false,
      reqEmail: false,
      name: '',
      email: '',
      submitButton: 'SUBMIT'
    }
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    const name = e.target.name
    const value = e.target.value

    this.setState({
      [name]: value
    })
  }

  handleBlur(e){
    let name = e.target.name
    let value = e.target.value

    switch (name){
      case 'name':
        value.trim().length > 0 ? this.setState({ reqName: false }) : this.setState({ reqName: true });
        break;
      case 'email':
        const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        value.trim().length > 0 ? this.setState({ reqEmail: false }) : this.setState({ reqEmail: true });
        reg.test(value) ? this.setState({ invalidEmail: false }) : this.setState({ invalidEmail: true })
        break
    }
  }

  handleSubmit(e){
    e.preventDefault();

    fetch('/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.success) {
          this.setState({formSent: true})
          this.setState({submitButton: 'THANKS!'})
        }
        else this.setState({formSent: false})
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render(){
    return (
      <section className="container">
        <form onSubmit={this.handleSubmit}>
          <p><strong>Order your Banana Phone <a href='https://igg.me/at/bananaphone' target='_blank'>Now</a></strong></p>
          { this.state.formSent
            ? <p className='sent-message'>Thanks a <strong>bunch!</strong> We'll be in touch shortly!</p>
            : <p>Sign up to stay updated</p> }
          <div className="row">
            <div className="one-half column">
              <input type="text"
                    name="name"
                    placeholder="Name"
                    className="u-full-width"
                    disabled={this.state.formSent}
                    value={this.state.name}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur} />
              { this.state.reqName ? <p className="helper">Yellow!!? I think you forgot something... </p> : null }
            </div>

            <div className="one-half column">
              <input type="email"
                    name="email"
                    placeholder="Email"
                    className="u-full-width"
                    disabled={this.state.formSent}
                    value={this.state.email}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    noValidate />
              { this.state.reqEmail ? <p className="helper">Yellow!!? I think you forgot something... </p> : null }
              { this.state.invalidEmail ? <p className="helper">Double-check your email address, you might have a typo... </p> : null }
            </div>
          </div>

          <div className="submit-wrapper">
            <input type="submit"
                    className="button"
                    value={this.state.submitButton}
                    disabled={this.state.formSent || this.state.reqEmail || this.state.invalidEmail || this.state.reqName || this.state.name.length == 0 || this.state.email.length == 0 } />
          </div>
        </form>
      </section>
    )
  }

}

export default SignupForm;
