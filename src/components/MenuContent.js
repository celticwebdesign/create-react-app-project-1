import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/MenuContent.scss";

class MenuContent extends Component {
	render() {
		let items = [
			{ i: 0, to: "./#/", title: "Home" },
			{ i: 1, to: "./#/newsapi", title: "News API" },
			{ i: 2, to: "./#/newssearchapi", title: "News Search API" },
			{ i: 3, to: "./#/random-user", title: "Random User" },
			{ i: 4, to: "./#/camera", title: "Camera" },
		];

		return (
			<div className="menu">
				{items.map((item) => (
					<div className="menu-item" key={item.i}>
						<a
							href={item.to}
							onClick={this.props.closeCallback}
							rel="noopener noreferrer"
							title={item.title}
						>
							{item.title}
						</a>
					</div>
				))}
			</div>
		);
	}
}

export default MenuContent;
