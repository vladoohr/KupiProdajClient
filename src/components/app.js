import React, { Component } from 'react';

// import components
import Navbar from './navbar'

export default class App extends Component {
  render() {
    return (
    	<div>
	  		<Navbar location={this.props.location}/>
	  		{this.props.children}
			</div> 
    );
  }
}
