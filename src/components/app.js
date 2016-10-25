import React, { Component } from 'react';
import Header from './header'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {
  render() {
    return (
    	<MuiThemeProvider>
    		<div>
		    	<Header location={this.props.location}/>
		    	{this.props.children}
		    </div>
	    </MuiThemeProvider>
    );
  }
}
