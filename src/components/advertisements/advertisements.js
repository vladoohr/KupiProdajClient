import React, { Component } from 'react'
import { Field, Fields, reduxForm } from 'redux-form' 
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as actions from '../../actions'

import Advertisement from './advertisement'
import Pagination from './pagination'

class Advertisements extends Component {
	constructor(props) {
		super(props)
		this.state = {
			category: 1,
			search: ''
		}
	}

	componentWillMount() {
		const { search, category } = this.state
		this.props.getAdvertisements(1, {search, category})
	}

	getAds(page) {
		const { search, category } = this.state
		this.props.getAdvertisements(page, {search, category})
	}

	handleSearch(values) {
		let { search } = values
		const { page } = this.props.location.query

		// temporary workaround for redux form
		if (search === undefined) {
    	search = ""
		}
		
		this.setState({search})

		this.props.getAdvertisements(page, {search, category: this.state.category})
	}

	handleCategory(category) {
		const { page } = this.props.location.query

		this.setState({category})

		this.props.getAdvertisements(page, {category, search: this.state.search})
	}

	renderCategories() {
		const categories = ['Сите', 'Возила', 'Живеалишта', 'Дом и Семејство', 'Електроника', 'Спорт и Рекреација', 'Бизнис и Работа', 'Шопинг', 'Друго']

		return(
			categories.map((item, index) => {
				if (index+1 === this.state.category) {
					return <Link onClick={this.handleCategory.bind(this, index+1)} className='nav-link active' key={item}>{item}</Link>					
				} else {
					return <Link onClick={this.handleCategory.bind(this, index+1)} className='nav-link' key={item}>{item}</Link>
				}
			})
		)
	}

	render() {
		const { location } = this.props
		const { handleSubmit, pristine, reset, submitting } = this.props

		return (
				<div className='container'>
					<div className="col-md-2 m-t-2">
						<nav className="nav nav-pills nav-stacked">
							{this.renderCategories()}
						</nav>
					</div>
					
					<div className="col-md-10 advertisements">
	          <form onSubmit={handleSubmit(this.handleSearch.bind(this))} className="form-inline search">
		          <Field name="search" component="input" type="text" className="form-control" placeholder="Барај"/>
	            <button className="btn btn-primary m-l-1" type="submit">Search</button>
	          </form>

						{this.props.ads_per_page.map((ad) => <Advertisement {...this.props} key={ad.id} ad={ad} />)}
					
						<div className="col-md-6 offset-md-3">
							<Pagination {...this.props} getAds={this.getAds.bind(this)} location={location} />
						</div>
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

Advertisements = reduxForm({
  form: "Advertisements"
})(Advertisements)

Advertisements = connect(
  mapStateToProps,
  actions
)(Advertisements)

export default Advertisements