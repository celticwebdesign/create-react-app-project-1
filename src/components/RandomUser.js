import React, { Component } from "react";
import SpinnerLoading from "./SpinnerLoading";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import SplashScreen from "./SplashScreen";
import "./css/RandomUser.scss";

class RandomUser extends Component {
	state = {
		RandomUser: [],
		api_loaded: false,
		pageNumber: 1,
		renderSplashscreen: true
	};
	toggleSpinnerLoading = () => {
		// show lower SpinnerLoading only on loading of more news
		const load_more = document.getElementById("load_more");
		const spinnerLoading = load_more.getElementsByClassName(
			"spinnerLoading"
		);
		spinnerLoading[0].classList.toggle("show");
	};
	getNews = update => {
		// 'update': informs getNews that this is subsequent loading of news

		// Postman App

		var myHeaders = new Headers();
		myHeaders.append(
			"x-rapidapi-host",
			"contextualwebsearch-websearch-v1.p.rapidapi.com"
		);
		myHeaders.append("x-rapidapi-key", "mixRQpajIV7xgRyAnm2az9xjSEPZpcef");
		myHeaders.append("Authorization", "5828a7b4e2474b048548236b0b2854d5");

		var requestOptions = {
			method: "GET",
			headers: myHeaders,
			redirect: "follow"
		};

		var autoCorrect = false;
		var pageSize = 10;
		var q = "wordpress";

		fetch(
			"https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/RandomUser?autoCorrect=" +
				autoCorrect +
				"&pageNumber=" +
				this.state.pageNumber +
				"&pageSize=" +
				pageSize +
				"&q=" +
				q +
				"&safeSearch=false",
			requestOptions
		)
			.then(response => response.text())
			.then(result => {
				const json_results = JSON.parse(result);
				this.setState({
					// RandomUser: json_results.value, // an array of objects
					RandomUser: this.state.RandomUser.concat(
						json_results.value
					), // an array of objects
					api_loaded: true,
					renderSplashscreen: false
				});
				console.dir(this.state);

				if (update === "update") {
					this.toggleSpinnerLoading();
				}
			})
			.catch(error => console.log("error", error));

		// Postman App
	};
	componentDidMount() {
		this.getNews();
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.pageNumber !== this.state.pageNumber) {
			this.getNews("update");
			// 'update': informs getNews that this is subsequent loading of news
		}
	}
	showMoreNews = index => {
		const li = document.getElementById(index + "_feed_content");
		li.classList.toggle("show");
	};
	loadMoreNews = () => {
		this.setState({
			pageNumber: this.state.pageNumber + 1
		});
		this.toggleSpinnerLoading();
	};
	render() {
		if (this.state.renderSplashscreen) {
			return <SplashScreen />;
		}
		else {
			return (
				<div className="RandomUser">
					<div className="container">
						<ul className="feeds">
							{/* {this.state.api_loaded < 1 && (
								<li key="empty">
									<SpinnerLoading />
								</li>
							)} */}
							{this.state.RandomUser.map((post, index) => {
								// console.dir(post);
								const d = new Date(Date.parse(post.datePublished));
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
									"December"
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
														<a
															href={post.url}
															target="_blank"
															rel="noopener noreferrer"
															dangerouslySetInnerHTML={{
																__html: post.title
															}}
														></a>
													</Card.Title>
													<Card.Text>
														<span className="publishedAt">
															{date}
														</span>
														{post.image.url && (
															<span className="urlToImage">
																<img
																	src={
																		post.image
																			.url
																	}
																	alt={post.title}
																/>
															</span>
														)}
														{post.description ? (
															<span
																className="description"
																dangerouslySetInnerHTML={{
																	__html:
																		post.description
																			.split(
																				" "
																			)
																			.splice(
																				0,
																				10
																			)
																			.join(
																				" "
																			) +
																		"..."
																}}
															></span>
														) : (
															""
														)}
														{post.body ? (
															<span
																className="content"
																id={
																	index +
																	"_feed_content"
																}
																dangerouslySetInnerHTML={{
																	__html:
																		post.body
																}}
															></span>
														) : (
															""
														)}
													</Card.Text>
													<Button
														variant="primary"
														size="sm"
														className="read_more"
														onClick={() =>
															this.showMoreNews(index)
														}
													>
														Read More
													</Button>
												</Card.Body>
											</Card>
										</article>
									</li>
								);
							})}
						</ul>
						<div id="load_more">
							<Button
								variant="primary"
								size="sm"
								className="load_more"
								onClick={() => this.loadMoreNews()}
							>
								Load More
							</Button>
							<SpinnerLoading />
						</div>
					</div>
				</div>
			);
		}
	}
}

export default RandomUser;
