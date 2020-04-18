import React, { Component } from "react";
// import SpinnerLoading from "./SpinnerLoading";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import SplashScreen from "./SplashScreen";
import "./css/RandomUser.scss";

class RandomUser extends Component {
	state = {
		RandomUser: [],
		// api_loaded: false,
		// pageNumber: 1,
		renderSplashscreen: true,
	};
	// toggleSpinnerLoading = () => {
	// 	// show lower SpinnerLoading only on loading of more news
	// 	const load_more = document.getElementById("load_more");
	// 	const spinnerLoading = load_more.getElementsByClassName(
	// 		"spinnerLoading"
	// 	);
	// 	spinnerLoading[0].classList.toggle("show");
	// };
	mapsSelector = (lat, long) => {
		// https://medium.com/@colinlord/opening-native-map-apps-from-the-mobile-browser-afd66fbbb8a4
		// https://codepen.io/colinlord/pen/jWbELE
		if (
			/* if we're on iOS, open in Apple Maps */
			navigator.platform.indexOf("iPhone") !== -1 ||
			navigator.platform.indexOf("iPod") !== -1 ||
			navigator.platform.indexOf("iPad") !== -1 ||
			navigator.platform.indexOf("Mac") !== -1
		)
			window.open(`http://maps.apple.com/?q=${lat},${long}`);
		/* else use Google */ else
			window.open(
				`https://www.google.com/maps/search/?api=1&query=${lat},${long}`
			);
	};
	getNews = (update) => {
		// 'update': informs getNews that this is subsequent loading of news

		// Postman App

		var myHeaders = new Headers();
		myHeaders.append(
			"Cookie",
			"__cfduid=da715dd02f237cec0d012a432189a23021587202059"
		);

		var requestOptions = {
			method: "GET",
			headers: myHeaders,
			redirect: "follow",
		};

		fetch("https://randomuser.me/api/?results=10", requestOptions)
			.then((response) => response.text())
			.then(
				// result => console.log(result);
				(result) => {
					const json_results = JSON.parse(result);
					// console.dir(json_results.results);

					this.setState({
						// RandomUser: json_results.value, // an array of objects
						RandomUser: this.state.RandomUser.concat(
							json_results.results
						), // an array of objects
						// api_loaded: true,
						renderSplashscreen: false,
					});

					// console.dir(this.state);
				}
			)
			.catch((error) => console.log("error", error));

		// Postman App
	};
	componentDidMount() {
		this.getNews();
	}
	// componentDidUpdate(prevProps, prevState) {
	// 	if (prevState.pageNumber !== this.state.pageNumber) {
	// 		this.getNews("update");
	// 		// 'update': informs getNews that this is subsequent loading of news
	// 	}
	// }
	// showMoreNews = index => {
	// 	const li = document.getElementById(index + "_feed_content");
	// 	li.classList.toggle("show");
	// };
	// loadMoreNews = () => {
	// 	this.setState({
	// 		pageNumber: this.state.pageNumber + 1
	// 	});
	// 	// this.toggleSpinnerLoading();
	// };
	render() {
		if (this.state.renderSplashscreen) {
			return <SplashScreen />;
		} else {
			return (
				<div className="RandomUser">
					<div className="container">
						<ul className="feeds">
							{this.state.RandomUser.map((post, index) => {
								const d = new Date(Date.parse(post.dob.date));
								const months = [
									"January",
									"February",
									"March",
									"April",
									"May",
									"June",
									"July",
									"August",
									"September",
									"October",
									"November",
									"December",
								];
								const date =
									d.getDate() +
									" " +
									months[d.getMonth()] +
									" " +
									d.getFullYear();
								return (
									<li key={index}>
										<article>
											<Card>
												<Card.Body>
													<Card.Title>
														{post.name.title +
															" " +
															post.name.first +
															" " +
															post.name.last}
													</Card.Title>
													<Card.Text>
														<span className="gender">
															{post.gender}
														</span>
														<span className="dob">
															{date}
														</span>
														<span className="email">
															<a
																href={`mailto:${post.email}`}
															>
																{post.email}
															</a>
														</span>
														{post.picture
															.medium && (
															<span className="urlToImage">
																<img
																	src={
																		post
																			.picture
																			.medium
																	}
																	alt={
																		post
																			.name
																			.first +
																		" " +
																		post
																			.name
																			.last
																	}
																/>
															</span>
														)}
														<span className="location">
															<span className="street">
																{post.location
																	.street
																	.number +
																	" " +
																	post
																		.location
																		.street
																		.name}
															</span>
															<span className="city">
																{
																	post
																		.location
																		.city
																}
															</span>
															<span className="state">
																{
																	post
																		.location
																		.state
																}
															</span>
															<span className="country">
																{
																	post
																		.location
																		.country
																}
															</span>
															<span className="postcode">
																{
																	post
																		.location
																		.postcode
																}
															</span>
															<span className="coordinates">
																{/*
																Kept here as RandomUser API returns coordinates in the ocean
																<a
																	href={`https://www.google.com/maps/search/?api=1&query=${post.location.coordinates.latitude},${post.location.coordinates.longitude}`}
																>
																	Map
																</a> */}
																{/*
																Kept here as an example of how to use a link
																<a href="https://www.google.com/maps/search/?api=1&query=28.6139,77.2090">
																I am using these coordinates below simply to have a live map and pin.
																	Map
																</a> */}
																<Button
																	variant="primary"
																	size="sm"
																	className="read_more"
																	onClick={() =>
																		this.mapsSelector(
																			28.6139,
																			77.209
																		)
																	}
																>
																	Maps
																</Button>
															</span>
														</span>
													</Card.Text>
													{/* <Button
														variant="primary"
														size="sm"
														className="read_more"
														onClick={() =>
															// this.showMoreNews(index)
														}
													>
														Read More
													</Button> */}
												</Card.Body>
											</Card>
										</article>
									</li>
								);
							})}
						</ul>
						{/* <div id="load_more">
							<Button
								variant="primary"
								size="sm"
								className="load_more"
								// onClick={() => this.loadMoreNews()}
							>
								Load More
							</Button>
							<SpinnerLoading />
						</div> */}
					</div>
				</div>
			);
		}
	}
}

export default RandomUser;
