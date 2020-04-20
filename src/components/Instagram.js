import React, { Component } from "react";
// import SpinnerLoading from "./SpinnerLoading";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import SplashScreen from "./SplashScreen";
import { buildUrl } from "react-instafeed";
import "./css/Instagram.scss";

class Instagram extends Component {
	state = {
		InstagramAPI: [],
		// api_loaded: false,
		pageNumber: 1,
		renderSplashscreen: true,
	};
	getInstagram = (update) => {
		const options = {
			accessToken: "314727228.77932de.6531038d25d94fd1b4855d2aca1b1a24",
			// clientId: "client...",
			get: "user", // popular, user
			// locationId: null,
			resolution: "standard_resolution", // thumbnail, low_resolution, standard_resolution
			// sortBy: "none", // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
			// tagName: null,
			userId: 314727228,
		};

		const instagramUrl = buildUrl(options);
		console.log(instagramUrl);

		// Postman app
		var requestOptions = {
			method: "GET",
			redirect: "follow",
		};

		fetch(instagramUrl, requestOptions)
			.then((response) => response.text())
			.then((result) => {
				const json_results = JSON.parse(result);
				// console.log(json_results);
				this.setState({
					// InstagramAPI: json_results.data, // an array of objects
					InstagramAPI: this.state.InstagramAPI.concat(
						json_results.data
					), // an array of objects
					// api_loaded: true,
					renderSplashscreen: false,
				});
				// console.dir(this.state);
			})
			.catch((error) => console.log("error", error));
		// Postman app
	};
	componentDidMount() {
		this.getInstagram();
	}
	render() {
		if (this.state.renderSplashscreen) {
			return <SplashScreen />;
		} else {
			return (
				<div className="InstagramAPI">
					<Container>
						<Row className="feeds">
							{this.state.InstagramAPI.map(
								(
									{ images, created_time, caption, link },
									index
								) => {
									const image = images.standard_resolution;
									console.dir(link);

									return (
										<Col xs={12} md={6} lg={4} key={index}>
											<article>
												<Card>
													<Card.Body>
														<Card.Text>
															<a href={link}>
																<Image
																	src={
																		image.url
																	}
																	title={
																		caption.text
																	}
																	width={
																		image.width
																	}
																	height={
																		image.height
																	}
																	fluid
																/>
															</a>
														</Card.Text>
													</Card.Body>
												</Card>
											</article>
										</Col>
									);
								}
							)}
							;
						</Row>
					</Container>
				</div>
			);
		}
	}
}

export default Instagram;
