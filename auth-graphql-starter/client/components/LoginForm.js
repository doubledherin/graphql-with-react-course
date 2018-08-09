import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { hashHistory } from 'react-router'
import AuthForm from './AuthForm'
import mutation from '../mutations/Login'
import query from '../queries/CurrentUser'

class LoginForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      errors: []
    }
  }

  componentWillUpdate(nextProps) {
    if (!this.props.data.user && nextProps.data.user) {
      hashHistory.push('/dashboard')
    }
  }

  handleLogin({ email, password}) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }]
    }).catch(res => {
      const errors = res.graphQLErrors.map(error => error.message)
      this.setState({ errors })
    })
  }

  render() {
    return (
      <div>
        <h3>Log in</h3>
        <AuthForm
          onSubmit={ this.handleLogin.bind(this) }
          errors={this.state.errors}/>
      </div>
    )
  }
}

export default graphql(query)(
  graphql(mutation)(LoginForm)
)
