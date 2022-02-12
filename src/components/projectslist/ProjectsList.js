import React from "react";
import { Link } from "react-scroll";
import "./ProjectsList.css";
import promiseTimer from "../../utility/promiseTimer";
import closer from "../../utility/closer";

export default function ProjectsList({
	title,
	id,
	selected,
	openProject,
	setUpDownAnimation,
	setSelectedProject,
}) {
	async function handleClick(e) {
		// this if will work if none of the projects are open
		if (!openProject) document.getElementById(id + "1").click();
		// else works if a project is open and user presses on another project
		else {
			setUpDownAnimation(false);
			await promiseTimer(2000);
			setSelectedProject("");

			closer(openProject);
			await promiseTimer(50);
			document.getElementById(id + "1").click();
		}
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
