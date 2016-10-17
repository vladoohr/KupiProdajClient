import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Navbar extends Component {
	constructor() {
		super()
		this.state = {collapsed: true}
	}

	toggleCollapse() {
		const collapsed = !this.state.collapsed
		this.setState({ collapsed })
	}

	render(){
		const { location } = this.props
		const rootActive = location.pathname === "/" ? 'active' : ''
		const newActive = location.pathname.match(/newАdvertisement/) ? 'active' : ''
		const helpActive = location.pathname.match(/help/) ? 'active' : ''

		const { collapsed } = this.state
		const collapseClass = this.state.collapsed ? 'collapse' : ''
		const pullNavRight = this.state.collapsed ? 'pull-xs-right' : ''
	
		return(
			<nav className="navbar navbar-full navbar-dark bg-inverse">
				<div className="container">
					<button className="navbar-toggle hidden-sm-up" type="button" onClick={this.toggleCollapse.bind(this)} data-toggle={ collapseClass }>
	    			&#9776;
	  			</button>

	  			<div className={ "navbar-toggleable-xs " + collapseClass}>
		        <ul className="nav navbar-nav">
		        	<li className={ "nav-item " + rootActive }>
		        		<Link to="/" className="nav-link">Сите огласи</Link>
					    </li>
					    <li className={ "nav-item " + newActive }>
		        		<Link to="new" className="nav-link">Внеси оглас</Link>
					    </li>
					    <li className={ "nav-item " + helpActive }>
		        		<Link to="help" className="nav-link">Помош</Link>
					    </li>
		        </ul>

		        <ul className={ "nav navbar-nav " + pullNavRight}>
		        	<li id="najava" className="nav-item">
		        		<Link to="signin" className="nav-link">Најава</Link>
					    </li>
					    <li id="registracija" className="nav-item">
		        		<Link to="signup" className="nav-link">Регистрација</Link>
					    </li>
		        </ul>
		      </div>
		    </div>
			</nav>
		)
	}
}