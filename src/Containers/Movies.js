import React, { Component } from 'react'

class Movies extends Component {

  state = {
    isSubscribed: false
  }

  handleSubscribe = () => {
    this.setState({
      isSubscribed: !this.state.isSubscribed
    });
  }

  render() {
    return (
      <div>
        <h2>Movies | Testing Class Comp</h2>
        <p data-testid='heading'>Welcome to Movie Portal</p>
        <a href={this.props.url} 
        data-testid='link'>{this.props.url}</a>

        { this.state.isSubscribed? 
            <p>You are a Subscriber</p>
            :
            <p>You are not a Subscriber</p>
        }
        
        <button onClick={this.handleSubscribe} 
        data-testid="subscribeBtn">
            {this.state.isSubscribed? 
              'Unsubscribe'
              : 
              'Subscribe'
            }</button>
      </div>
    )
  }
}

export default Movies;