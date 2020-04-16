import React, { Component } from "react";
import "./css/NewsAPI.scss";

class NewsAPI extends Component {
	state = {
		newsAPI: [],
		api_loaded: false
	};
	componentDidMount() {
		// Postman App
		var myHeaders = new Headers();
		myHeaders.append("Authorization", "5828a7b4e2474b048548236b0b2854d5");

		var requestOptions = {
			method: "GET",
			headers: myHeaders,
			redirect: "follow",
			pageSize: 2
		};

		fetch("https://newsapi.org/v2/top-headlines?country=gb", requestOptions)
			.then(response => response.text())
			.then(result => {
				// console.log("1" + JSON.parse(result));
				const json_results = JSON.parse(result);
				// console.log("3" + JSON.parse(result));
				// console.log("2" + json_results.articles);
				this.setState({
					newsAPI: json_results.articles, // an array of objects
					api_loaded: true
				});
				// console.log("3" + this.state.news);
				// console.log("4" + this.state.api_loaded);
				// console.table("5" + this.state.news);
			})
			.catch(error => console.log("error", error));
		// Postman App
	}
	showMoreNews = index => {
		// console.log(index);
		const li = document.getElementById(index + "_feed_content");
		li.classList.toggle("show");
		// console.log(li);
	};
	render() {
		return (
			<div className="News">
				<div className="container">
					<ul className="feeds">
						{this.state.api_loaded < 1 && (
							<li key="empty">No posts yet!</li>
						)}
						{this.state.newsAPI.map((post, index) => {
							// console.dir(post);
							const d = new Date(Date.parse(post.publishedAt));
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
										<header className="article-title">
											<h2>
												<a
													href={post.url}
													target="_blank"
													rel="noopener noreferrer"
												>
													{post.title}
												</a>
											</h2>
										</header>
										<main>
											<div className="publishedAt">
												{date}
											</div>
											{post.urlToImage && (
												<div className="urlToImage">
													<img
														src={post.urlToImage}
														alt={post.title}
													/>
												</div>
											)}
											{post.description ? (
												<div className="description">
													{post.description
														.split(" ")
														.splice(0, 10)
														.join(" ") + "..."}
												</div>
											) : (
												""
											)}
											{post.content ? (
												<div
													className="content"
													id={index + "_feed_content"}
												>
													{post.content}
												</div>
											) : (
												""
											)}
											<button
												className="read_more"
												onClick={() =>
													this.showMoreNews(index)
												}
											>
												Read More
											</button>
										</main>
										{/* <footer className="article_footer">
											<p>footer</p>
										</footer> */}
									</article>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}

export default NewsAPI;
