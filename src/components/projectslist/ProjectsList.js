import React from "react";
import { Link } from "react-scroll";
import "./ProjectsList.css";
export default function ProjectsList({
	title,
	id,
	selected,
	openProject,
	next,
}) {
	function handleClick() {
		if (!openProject) document.getElementById(id + "1").click();
		else next(id);
	}
	return (
		// is in nav.project-nav>ul
		<li>
			<Link
				to={selected ? " " : openProject}
				smooth={true}
				duration={1000}
				onClick={selected ? undefined : handleClick}
				className={selected ? "links selected" : "links"}
			>
				{title}
			</Link>
		</li>
	);
}
