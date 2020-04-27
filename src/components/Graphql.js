import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import PostsSearch from "./PostsSearch";
import Container from "react-bootstrap/Container";
// import SpinnerLoading from "./SpinnerLoading";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import SplashScreen from "./SplashScreen";
import "./css/Graphql.scss";

// https://www.wpgraphql.com/2019/01/10/build-an-app-using-react-and-the-graphql-plugin-for-wordpress-in-15mins/

const client = new ApolloClient({
	// Change this to the URL of your WordPress site.
	uri: "https://www.marketmechina.com/wp/graphql/",
});

const Graphql = () => (
	<ApolloProvider client={client}>
		<div className="Graphql">
			<Container>
				<h2 className="title">
					My first WPGraphQL & Apollo app{" "}
					<span className="emoji" role="img" aria-label="rocket">
						🚀
					</span>
				</h2>
				<PostsSearch client={client} />
			</Container>
		</div>
	</ApolloProvider>
);

export default Graphql;
