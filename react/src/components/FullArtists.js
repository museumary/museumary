import React from 'react';
import { Link } from 'react-router-dom';
import style from './Full.css';
import Pagination from 'react-js-pagination';


class FullArtists extends React.Component {
	constructor() {
  	super();
 		 this.state={
 		 	items:[],
 		 	activePage: 3
 		 };
 		 this.handlePageChange = this.handlePageChange.bind(this);
  }
  componentDidMount(){
  	fetch(`http://api.museumary.me/artist?entries_per_page=5000`)
 		.then(result=>result.json())
    .then(items=> {
			this.setState({items})
<<<<<<< HEAD:react/src/FullArtists.js
			this.setState({vararray: []})

			
		})
=======
		});
>>>>>>> upstream/development:react/src/components/FullArtists.js
  }

  handlePageChange(pageNumber) {
  	console.log(`active page is ${pageNumber}`);
  	this.setState({activePage: pageNumber});
  }


  render() {
		if(this.state.items.objects){
			var arr = [];
			this.state.items.objects.forEach(function(obj) {
				arr.push(obj);
			});
			return <div className="FullArtists">
						<div className="container">
							<div className="row">
									{
										arr.map(
											function(obj) {
												var url = '/artists/' + obj.id;
												return <div className="col-md-3">
															<Link to={url} activeClassName="active"><strong>{obj.name}</strong></Link><br/>
															<img src={obj.image_url} width="200" height="300"/><br/><br/>
													   </div>;
													   <br/>
											}
										)
									}
							</div>
							<br/>
							<br/>
							
						</div>
						<Pagination
							activePage={this.state.activePage}
							itemsCountPerPage={10}
					        totalItemsCount={450}
					        pageRangeDisplayed={5}
					        onChange={this.handlePageChange}
					    />
					</div>;
		}
		else {
			return <div className="FullArtists"></div>;
		}
	}
}

export default FullArtists;