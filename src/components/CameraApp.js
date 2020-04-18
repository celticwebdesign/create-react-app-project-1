import React, { Component } from "react";
import Camera from "react-html5-camera-photo";
import SimpleStorage from "react-simple-storage";
import "react-html5-camera-photo/build/css/index.css";
import "./css/CameraApp.scss";

class CameraApp extends Component {
	state = {
		photos: []
	};
	handleTakePhoto = (dataUri) => {
		// console.log("takePhoto 111");
		// console.log(dataUri);
		this.setState({
			photos: [...this.state.photos, dataUri],
		});

		console.log(this.state.photos);

		// save photos to localstorage
	};
	handleCameraError = (error) => {
		// console.log('handleCameraError', error);
		// console.dir(error);
	};
	deletePhoto = (e) => {
		const photos = [...this.state.photos];
		photos.splice(e.target.id, 1);
		this.setState({ photos });
	};

	render() {
		return (
			<div className="CameraApp">
				<SimpleStorage parent={this} />
				<div className="container">
					{/* Show previous photos */}
					<ul className="feeds">
						{this.state.photos < 1 && (
							<li className="empty" key="empty">
								Take a photo
							</li>
						)}
						{this.state.photos.map((post, index) => {
							return (
								<li className="photo" key={index}>
									<img src={post} alt={index} />
									<br />
									<button
										onClick={this.deletePhoto}
										id={index}
									>
										Delete
									</button>
								</li>
							);
						})}
					</ul>
					{/* Show previous photos */}

					{/* Cammera */}
					<Camera
						onTakePhoto={(dataUri) => {
							this.handleTakePhoto(dataUri);
						}}
						onCameraError={(error) => {
							this.handleCameraError(error);
						}}
					/>
					{/* Cammera */}
				</div>
			</div>
		);
	}
}

export default CameraApp;
