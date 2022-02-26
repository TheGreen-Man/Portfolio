import React from "react";
import "./NextButton.css";

export default function NextButton({ onClick }) {
	return (
		<div className="next-container">
			<div onClick={onClick}>Next</div>
		</div>
	);
}
