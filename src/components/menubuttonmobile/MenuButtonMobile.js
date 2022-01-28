import React, { useState } from "react";
import "./MenuButtonMobile.css";
import CreateNav from "../navbar/CreateNav";
export default function MenuButtonMobile() {
	const [show, setShow] = useState(false);

	function onClick() {
		setShow(!show);
	}

	return (
		<>
			<div
				className={show ? "menu-button ex" : "menu-button"}
				onClick={onClick}
			>
				<div className="bars"></div>
			</div>
			<div className={show ? "hidden-menu show" : "hidden-menu"}>
				<CreateNav
					hideHiddenMenuInMobile={() => {
						setShow(false);
					}}
				/>
			</div>
		</>
	);
}
