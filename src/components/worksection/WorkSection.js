import React, { useState } from "react";
import CreateNav from "../navbar/CreateNav";
import ProjectsNav from "../projectsnav/ProjectsNav";
import "./WorkSection.css";
import ProjectsList from "../projectslist/ProjectsList";
import ExitButton from "../../html/ExitButton";
import { useSpring, animated, useSpringRef, useChain } from "react-spring";
export default function WorkSection(props) {
	const [selectedProject, setSelectedProject] = useState("");
	const [leftRightAnimation, setLeftRightAnimation] = useState(
		Boolean(false)
	);
	const [upDownAnimation, setUpDownAnimation] = useState(Boolean(false));

	async function handleClick(e, id) {
		const promiseTimer = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve();
			}, 1500);
		});
		try {
			e.preventDefault();
			setLeftRightAnimation(true);
			setUpDownAnimation(true);
			let section = document.querySelector(".work");
			let intro = document.querySelector(".intro");
			let about = document.querySelector(".about");
			await promiseTimer;
			setSelectedProject(id);
			section.classList.add("chapter--expanded");
			window.scrollTo(0, intro.clientHeight + about.clientHeight);
		} catch (err) {
			alert("error, we are all going to die!");
		}
	}

	async function handleClose(e) {
		let a = document.querySelectorAll(".project-ul li > div");
		let aa = Object.values(a);
		let x = aa.findIndex((e) => e.id === selectedProject);
		const promiseTimer = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve();
			}, 2000);
		});
		try {
			e.preventDefault();
			setLeftRightAnimation(false);
			setUpDownAnimation(false);
			let section = document.querySelector(".work");
			let intro = document.querySelector(".intro");
			let about = document.querySelector(".about");
			await promiseTimer;
			section.classList.remove("chapter--expanded");
			setSelectedProject("");
			window.scrollTo(
				0,
				intro.clientHeight + about.clientHeight + intro.clientHeight * x
			);
		} catch (err) {
			alert(err);
		}
	}

	const leftContainerApi = useSpringRef();
	const leftContainer = useSpring({
		ref: leftContainerApi,
		to: { width: !leftRightAnimation ? "50%" : "30%" },
		config: { duration: 500 },
	});

	const rightContainerApi = useSpringRef();
	const rightContainer = useSpring({
		ref: rightContainerApi,
		to: {
			width: !leftRightAnimation ? "50%" : "70%",
			left: !leftRightAnimation ? "50%" : "30%",
		},
		config: { duration: 500 },
	});

	useChain(
		[leftContainerApi, rightContainerApi],
		// closing  // opening
		!leftRightAnimation ? [1.5, 1.5] : [1, 1]
	);

	const spawnProjects = props.projects.map((e, i) => (
		<ProjectsNav
			id={e.id}
			title={e.title}
			subtitle={e.subtitle}
			content={e.content}
			index={i}
			handleClick={(event) => handleClick(event, e.id, i)}
			shouldShow={!selectedProject || selectedProject === e.id}
			leftRight={leftRightAnimation}
			upDown={upDownAnimation}
			selected={selectedProject === e.id}
			key={e.id + "pnkey"}
		/>
	));

	const spawnProjectsLi = props.projects.map((e, index) => (
		<ProjectsList
			title={e.title}
			id={e.id}
			selected={selectedProject === e.id}
			openProject={selectedProject}
			next={next}
			key={e.id + "plkey"}
			setUpDownAnimation={setUpDownAnimation}
			setSelectedProject={setSelectedProject}
		/>
	));
	async function next(id) {
		const promiseTimer = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve();
			}, 1500);
		});
		const promiseTimer2 = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve();
			}, 2000);
		});
		setUpDownAnimation(false);
		await promiseTimer;
		setSelectedProject("");
		await promiseTimer2;
		document.getElementById(id + "1").click();
	}

	return (
		<section className="fullpage-section work chapter" id="work">
			<animated.div className="left work-l white" style={leftContainer}>
				<h1 className="unselectables">Work</h1>
				<nav className="project-nav">
					<ul>{spawnProjectsLi}</ul>
				</nav>

				<CreateNav />

				{!upDownAnimation ? null : (
					<ExitButton onClick={handleClose} to={selectedProject} />
				)}
			</animated.div>
			<animated.div
				className="right work-r"
				style={rightContainer}
				name="my"
			>
				<nav>
					<ul className="project-ul">{spawnProjects}</ul>
				</nav>
			</animated.div>
		</section>
	);
}
