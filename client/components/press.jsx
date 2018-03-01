import React, { Component } from 'react';

export default class Press extends Component {
	componentDidMount() {
		const parent = document.querySelector('.press');
		const pressSection = document.querySelector('.pressWrapper');
		parent.setAttribute('style', `height:${pressSection.offsetHeight}px`);
	}

	render(){
		return (
			<section className="press">

				<div className="pressWrapper container">
					<h2>Press</h2>
					<div className="pressLinks">
						{/* HUFFPOST */}
						<div className="logo">
							<a href="https://www.huffingtonpost.com/entry/ring-ring-ring-ring-ring-ring-ring_us_590b3d84e4b02655f844f1e2"
								target="_blank"
								rel="noopener noreferrer"
								id="gtm-huffpost"
								className="gtm-media">
								<img src="images/huffpost.png" alt="HuffPost logo" />
							</a>
						</div>

						{/* MASHABLE */}
						<div className="logo">
							<a href="http://mashable.com/2017/05/04/banana-phone-indiegogo/#PFkR6ke.dPq8"
								target="_blank"
								rel="noopener noreferrer"
								id="gtm-mashable"
								className="gtm-media">
								<img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Mashable.png" alt="Mashable logo" />
							</a>
						</div>

						{/* THE VERGE */}
						<div className="logo">
							<a href="https://www.theverge.com/circuitbreaker/2017/5/4/15545232/banana-phone-indiegogo-campaign"
								target="_blank"
								rel="noopener noreferrer"
								id="gtm-verge"
								className="gtm-media">
								<img src="images/verge.png" alt="The Verge logo" />
							</a>
						</div>

						{/* FOOD AND WINE */}
						<div className="logo">
							<a href="https://www.foodandwine.com/news/banana-phone-indiegogo"
								target="_blank"
								rel="noopener noreferrer"
								id="gtm-foodandwine"
								className="gtm-media">
								<img src="http://www.foodandwine.com/sites/all/modules/custom/ti_amg_fw_mm_config/img/logo_FoodandWine.png" alt="Food and Wine logo" />
							</a>
						</div>

						{/* CNET */}
						<div className="logo">
							<a href="https://www.cnet.com/news/banana-phone-indiegogo-crowdfunding-bluetooth-handset/"
								target="_blank"
								rel="noopener noreferrer"
								id="gtm-cnet"
								className="gtm-media">
								<img src="https://upload.wikimedia.org/wikipedia/en/8/8f/Cnetlogo.png" alt="CNET logo" />
							</a>
						</div>

					</div>
				</div>
			</section>
		)
	}
}