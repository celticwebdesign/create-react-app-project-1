import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hello from "./components/Hello";
import NewsAPI from "./components/NewsAPI";
import NewsSearchAPI from "./components/NewsSearchAPI";
import NotFound from "./components/NotFound";
import CheeseburgerMenu from "cheeseburger-menu";
import MenuContent from "./components/MenuContent";
import CameraApp from "./components/CameraApp";

class App extends Component {
	state = {
		welcome: "Hello To You",
		menuOpen: false,
	};
	openMenu() {
		this.setState({ menuOpen: true });
	}
	closeMenu() {
		this.setState({ menuOpen: false });
	}
	render() {
		return (
			<Router basename="create-react-app-project-1/">
				<div className="App">
					<CheeseburgerMenu
						isOpen={this.state.menuOpen}
						closeCallback={this.closeMenu.bind(this)}
					>
						<MenuContent
							closeCallback={this.closeMenu.bind(this)}
						/>
					</CheeseburgerMenu>
					<Header
						state={this.state}
						openMenu={this.openMenu.bind(this)}
					/>
					<Switch>
						{/* <Route exact path="/" render={() => <News />} /> */}
						<Route
							exact
							path="/"
							render={() => (
								<Hello message={this.state.welcome} />
							)}
						/>
						<Route
							exact
							path="/newsapi"
							render={() => <NewsAPI />}
						/>
						<Route
							exact
							path="/newssearchapi"
							render={() => <NewsSearchAPI />}
						/>
						<Route
							exact
							path="/camera"
							render={() => <CameraApp />}
						/>
						<Route component={NotFound} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
