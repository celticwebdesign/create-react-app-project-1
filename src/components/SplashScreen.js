import React from "react";
import "./css/SplashScreen.scss";
import logo from './img/logo.svg';

const SplashScreen = () => {

	return (
		<div class="SplashScreen">
			<img src={logo} alt="SplashScreen"/>
		</div>
	);
};

export default SplashScreen;
