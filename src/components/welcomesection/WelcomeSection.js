import React from "react";
import WelcomeSVG from "../../frames/WelcomeSVG";
import CreateNav from "../navbar/CreateNav";
import "./WelcomeSection.css";

export default function WelcomeSection() {
	return (
		<section className="fullpage-section intro dark">
			<h1 className="proffesion">Front-end Developer</h1>

			<div className="image-container">
				<WelcomeSVG />
			</div>
			<CreateNav />
		</section>
	);
}
