import React, { useState } from "react";
import "./WorkSection.css";
import CreateNav from "../navbar/CreateNav";
import ProjectsNav from "../projectsnav/ProjectsNav";
import ProjectsList from "../projectslist/ProjectsList";
import ExitButton from "../exitbutton/ExitButton";
import { useSpring, animated, useSpringRef, useChain } from "react-spring";
// import promiseTimer from "../../utility/promiseTimer";
import closer from "../../utility/closer";
import opener from "../../utility/opener";
export default function WorkSection({ projects }) {
	const [selectedProject, setSelectedProject] = useState("");
	const [leftRightAnimation, setLeftRightAnimation] = useState(false);
	const [upDownAnimation, setUpDownAnimation] = useState(false);
	async function handleClick(e, id) {
		e.preventDefault();
		setLeftRightAnimation(true);
		setUpDownAnimation(true);
		// await promiseTimer(1500);
		setTimeout(() => {
			setSelectedProject(id);
			opener();
		}, 1500);
	}

	async function handleClose(e) {
		e.preventDefault();
		setLeftRightAnimation(false);
		setUpDownAnimation(false);
		// await promiseTimer(2000);
		setTimeout(() => {
			setSelectedProject("");
			closer(selectedProject);
		}, 2000);
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
		!leftRightAnimation ? [1.5, 1.5] : [1, 1]
	);

	const spawnProjects = projects.map((e, i) => (
		<ProjectsNav
			id={e.id}
			title={e.title}
			subtitle={e.subtitle}
			background={e.background}
			content={e.content}
			index={i}
			handleClick={(event) => handleClick(event, e.id)}
			shouldShow={!selectedProject || selectedProject === e.id}
			leftRight={leftRightAnimation}
			upDown={upDownAnimation}
			selected={selectedProject === e.id}
			key={e.id + "pnkey"}
		/>
	));

	const spawnProjectsLi = projects.map(({ title, id }) => (
		<ProjectsList
			title={title}
			id={id}
			selected={selectedProject === id}
			openProject={selectedProject}
			key={id + "plkey"}
			setUpDownAnimation={setUpDownAnimation}
			setSelectedProject={setSelectedProject}
		/>
	));
	return (
		<section className="fullpage-section work chapter" id="work">
			<animated.div className="left work-l light" style={leftContainer}>
				<h1 className="unselectables">Work</h1>
				<nav className="project-nav">
					<ul>{spawnProjectsLi}</ul>
				</nav>

				<CreateNav />

				{upDownAnimation && (
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
