import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "react-hamburger-menu";
// import logo from '../logo.svg';
import "./css/Header.css";
import "./css/HamburgerMenu.scss";

const Header = (props) => {
	return (
		<header className="App-header">
			<div className="container">
				<HamburgerMenu
					isOpen={props.state.menuOpen}
					menuClicked={props.openMenu}
					width={32}
					height={24}
					strokeWidth={3}
					rotate={0}
					color="white"
					borderRadius={0}
					animationDuration={0.5}
					className="HamburgerMenu"
				/>
				<div className="logo">
					<Link to="./">A Logo here</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
