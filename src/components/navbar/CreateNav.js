import React from "react";
import { Link } from "react-scroll";
import "./createNav.css";

function CreateNav({ hideHiddenMenuInMobile }) {
	return (
		<nav className="main-nav">
			<ul>
				<li>
					<Link
						to="about"
						smooth={true}
						duration={1500}
						className="nav--links"
						onClick={hideHiddenMenuInMobile}
					>
						About
					</Link>
				</li>
				<li>
					<Link
						to="work"
						smooth={true}
						duration={1500}
						className="nav--links"
						onClick={hideHiddenMenuInMobile}
					>
						Work
					</Link>
				</li>
				<li>
					<Link
						to="contact"
						smooth={true}
						duration={1500}
						className="nav--links"
						onClick={hideHiddenMenuInMobile}
					>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default CreateNav;
