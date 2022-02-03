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
	setSelectedProject,
}) {
	function helper() {
		let a = document.querySelectorAll(".project-ul li > div");
		let aa = Object.values(a);
		let intro = document.querySelector(".intro");
		let about = document.querySelector(".about");
		let position = aa.findIndex((ra) => ra.id === openProject);
		if (window.screen.width <= 990)
			window.scrollTo(
				0,
				intro.clientHeight * 2 +
					about.clientHeight +
					intro.clientHeight * position
			);
		else
			window.scrollTo(
				0,
				intro.clientHeight +
					about.clientHeight +
					intro.clientHeight * position
			);
	}
	async function handleClick(e) {
		const promiseTimer = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve();
			}, 2000);
		});
		const promiseTimer2 = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve();
			}, 2010);
		});
		// this if will work if none of the projects are open
		if (!openProject) document.getElementById(id + "1").click();
		// else works if a project is open and user presses on another project
		else {
			// document.getElementsByClassName("circle")[0].click();
			setUpDownAnimation(false);
			await promiseTimer;
			setSelectedProject("");
			helper(e.target.innerText);
			await promiseTimer2;
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
