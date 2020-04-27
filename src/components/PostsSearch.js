import React, { Component } from "react";
// import PostsList from "./PostsList";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import { Query } from "react-apollo";
import gql from "graphql-tag";
import PostCard from "./PostCard";
import "./css/PostSearch.scss";

class PostsSearch extends Component {
	state = {
		searchQuery: "",
		searchGL: gql`
			query POSTS_SEARCH_QUERY($searchQuery: String!) {
				posts(where: { search: $searchQuery }) {
					edges {
						node {
							link
							postId
							title
							date
							author {
								name
							}
							featuredImage {
								sourceUrl
								altText
							}
						}
					}
				}
			}
		`,
		searchResults: "",
	};

	handleSubmit = (event) => {
		event.preventDefault();

		// show spinner on search start

		const { state } = this;
		const { searchQuery, searchGL } = state;

		/*
		https://stackoverflow.com/a/54614238/7364904
		Setting state in the Query component of react-apollo
		*/
		this.props.client
			.query({
				query: searchGL,
				variables: { searchQuery },
			})
			.then((data) => {
				// console.log(data.data.posts);

				/*
					stop spinner on search start
				*/

				// you need to test for results being > 0
				if (data.data.posts.edges.length) {
					// if > 0 do this.
					// place results into state(render is refreshed), build display.
					this.setState({
						searchResults: data.data.posts,
					});
				} else {
					// if 0 do that.
					// show error = no results returned, try again.
					this.setState({
						searchResults: 0,
					});
				}

				// console.log(this.state.searchResults);
			})
			.catch((err) => {
				console.log("catch", err);
			});
	};

	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	componentDidUpdate(prevProps, prevState) {
		// executes after state updated.
		// console.log("Re-render", prevState, this.state);
		// if (prevState.searchQuery !== this.state.searchQuery) {
		// }
	}

	render() {
		const { state, handleSubmit, handleInputChange } = this;
		const { searchQuery, searchResults } = state;

		return (
			<div className="PostSearch">
				<Form className="posts-search__form" onSubmit={handleSubmit}>
					<input
						type="text"
						className="posts-search__search-field"
						name="searchQuery"
						value={searchQuery}
						onChange={handleInputChange}
						placeholder="Search for blog posts…"
					/>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
				{searchResults && (
					<div className="results">
						<ul className="feeds">
							{searchResults.edges.map((edge, index) => {
								const { node: post } = edge;
								const { postId } = post;
								return (
									<li key={postId}>
										<PostCard post={post} />
									</li>
								);
							})}
						</ul>
					</div>
				)}
			</div>
		);
	}
}

export default PostsSearch;
