import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

class Header extends Component {
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

		const renderMenuItems = () => {
		if (this.props.authenticated) {
			return (
			<ul className={ "nav navbar-nav " + pullNavRight}>
			<li className="nav-item">
    		<Link to="profil" className="nav-link right-nav-items">Име</Link>
	    </li>
	    <li className="nav-item">
    		<Link to="signout" className="nav-link right-nav-items">Одјави се</Link>
	    </li>			
	    </ul>
			)
		} 
		
		return (
			<ul className={ "nav navbar-nav " + pullNavRight}>
			<li className="nav-item">
    		<Link to="signin" className="nav-link right-nav-items">Најава</Link>
	    </li>
	    <li className="nav-item">
    		<Link to="signup" className="nav-link right-nav-items">Регистрација</Link>
	    </li>
	    </ul>
		)		
	}
	
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

		        {renderMenuItems()}
		      
		      </div>
		    </div>
			</nav>
		)
	}
}

const mapStateToProps = state => {
	return {authenticated: state.auth.authenticate}
}

export default connect(mapStateToProps)(Header)