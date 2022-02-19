import React from "react";
import "./ExitButton.css";
import { Link } from "react-scroll";

function ExitButton({ onClick, to }) {
	return (
		<Link to={to} smooth={true} duration={1000}>
			<div className="circle" onClick={onClick}>
				{/* <div className="inner-one">
					<div className="inner-before"></div>
					<div className="inner-after"></div>

				</div> */}
				<div className="lines"></div>
			</div>
		</Link>
	);
}
export default ExitButton;
