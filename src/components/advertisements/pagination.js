import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router' 
import * as actions from '../../actions'

class Pagination extends Component {
	updateAds(page) {
		this.props.getAds(page)
	}

	renderPaginationItem() {
		const { page } = this.props.location.query
		const { pathname } = this.props.location
		const { user } = this.props
		const ads_per_page = 3
		const pages = Math.floor((this.props.ads.length + ads_per_page -1) / ads_per_page)
		let links = [];

		for (let i = 1; i <= pages; i++) {
			if (i == page) {
	    	links.push(<li className="page-item active" key={i}><Link to={`${pathname}?page=${i}`} onClick={this.updateAds.bind(this, i)} className="page-link">{i}</Link></li>)
			} else {
	    	links.push(<li className="page-item" key={i}><Link to={`${pathname}?page=${i}`} onClick={this.updateAds.bind(this, i)} className="page-link">{i}</Link></li>)				
			}
		}

		return links
	}

	render() {
		return (
			<ul className="pagination">
				{ this.renderPaginationItem() }
		  </ul>
		)
	}
}

export default Pagination