import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import AuthForm from './AuthForm'
import mutation from '../mutations/Login'
import query from '../queries/CurrentUser'

class LoginForm extends Component {

  handleLogin({ email, password}) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }]
    })
  }

  render() {
    return (
      <div>
        <h3>Log in</h3>
        <AuthForm onSubmit={ this.handleLogin.bind(this) }/>
      </div>
    )
  }
}

export default graphql(mutation)(LoginForm)
