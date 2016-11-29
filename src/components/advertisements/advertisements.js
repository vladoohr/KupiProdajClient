import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router' 
import * as actions from '../../actions'

import Advertisement from './advertisement'
import Pagination from './pagination'

class Advertisements extends Component {
	componentWillMount() {
		this.props.getAdvertisements(1)
	}

	getAds(page) {
		this.props.getAdvertisements(page)
	}

	render() {
		const { location } = this.props
		return (
			<div className='container'>
				{this.props.ads_per_page.map((ad) => <Advertisement {...this.props} key={ad.id} ad={ad} />)}
				<div className="col-md-6 offset-md-3">
					<Pagination {...this.props} getAds={this.getAds.bind(this)} location={location} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { 
		user: state.auth.user,
		ads: state.ads.ads,
		ads_per_page: state.ads.ads_per_page
	}
}

export default connect(mapStateToProps, actions)(Advertisements)