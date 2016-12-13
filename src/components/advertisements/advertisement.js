import React from 'react'
import { Link } from 'react-router'

export default class Advertisement extends React.Component {
	render() {
    const { id, image, title, price, updated_at, city, category } = this.props.ad
    let image_url;

    if (! image) {
    	image_url = '../../../images/images.jpg'
    } else {
    	image_url = image
    }

    return (
    	<div className="col-md-10 advertisement">
    		<div className=" col-md-5 m-t-1 pull-left">
    			<img className="search-ad-image" src={image_url} height="150" width="150" /> 
    			<p className="m-l-2"><small>{updated_at}</small></p>
    		</div>
    		<div className="col-md-7 m-t-1">
    			<Link to={`/ad/${id}`} className="search-ad-title">{title}</Link>
    			<p className="search-ad-price">{price ? `${price} МКД` : 'По договор'}</p> 					
    			<p className="right-text m-t-3">{city}</p>
    			<p className="right-text">{category}</p>
    		</div>
    	</div>
    )
  }
}