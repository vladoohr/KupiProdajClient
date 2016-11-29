import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import * as actions from '../../actions'

class SingleAdvertisement extends React.Component {
    componentWillMount() {
        const { ad_id } = this.props.params
        this.props.loadData(ad_id)
    }

	render() {
        const { id, image, title, description, price, updated_at, city, category } = this.props.ad
        const { full_name, email, phone } = this.props.user
        let image_url;

        if (! image) {
            image_url = '../../../images/images.jpg'
        } else {
            image_url = `http://localhost:3000/${image}`
        }

        return (
            <div className="container">
                <div className="col-md-10 m-t-3 advertisement">
                    <div className=" col-md-4 m-t-1 pull-left">
                        <img className="search-ad-image" src={image_url} height="150" width="150" /> 
                        <p className="m-l-2"><small>{updated_at}</small></p>
                        <p className="left-text">&#9737; {city}</p>
                        <p className="left-text">&#9759; {category}</p>
                    </div>
                    <div className="col-md-8 m-t-1">
                        <Link to={`/ad/${id}`} className="search-ad-title">{title}</Link>
                        <p className="m-t-1">{description}</p>
                        <p className="search-ad-price">{price ? `${price} МКД` : 'По договор'}</p>
                    </div>
                    <div className="col-md-12">
                        <p className="right-text m-t-3">&#9817; {full_name}</p>
                        <p className="right-text">&#9990; <Link to={`tel:${phone}`}>{phone}</Link></p>
                        <p className="right-text">&#x40; <Link to="#">Прати маил</Link></p>
                    </div>             
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.ads.user,
        ad: state.ads.ad_data
    }
}

export default connect(mapStateToProps, actions)(SingleAdvertisement)