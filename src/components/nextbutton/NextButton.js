import React from "react";
import "./NextButton.css";
export default function NextButton({ onClick }) {
	return (
		<div className="next-container" onClick={onClick}>
			<div className="mid">Next</div>
		</div>
	);
}
