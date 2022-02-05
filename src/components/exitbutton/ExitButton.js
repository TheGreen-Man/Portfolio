import React from "react";
import "./ExitButton.css";
import { Link } from "react-scroll";

function ExitButton({ onClick, to }) {
	// function junk() {
	// 	let x = document.getElementsByClassName("project");
	// 	return x[index].id;
	// }
	return (
		// <a className="chapter__close-button preloader">
		// 	<span className="slice"></span>
		// 	<span className="slice"></span>
		// 	<span className="slice"></span>
		// 	<span className="slice"></span>
		// 	<span className="slice"></span>
		// 	<span className="slice"></span>
		// 	<span className="slice"></span>
		// 	<span className="slice"></span>
		// 	<i className="icon">C</i>
		// </a>
		<Link to={to} smooth={true} duration={1000}>
			<div className="circle" onClick={onClick}>
				<div className="lines"></div>
			</div>
		</Link>
	);
}
export default ExitButton;
