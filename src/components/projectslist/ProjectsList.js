import React from "react";
import { Link } from "react-scroll";
import "./ProjectsList.css";
export default function ProjectsList({
	title,
	id,
	selected,
	openProject,
	next,
	setUpDownAnimation,
}) {
	async function handleClick() {
		const promiseTimer = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve();
			}, 2010);
		});

		// this if will work if none of the projects are open
		if (!openProject) document.getElementById(id + "1").click();
		// else works if a project is open and user presses on another project
		else {
			document.getElementsByClassName("circle")[0].click();
			// await promiseTimer;
			// setUpDownAnimation(false);
			await promiseTimer;
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
