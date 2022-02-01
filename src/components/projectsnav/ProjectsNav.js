/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import HexagonButton from "../hexagonbutton/HexagonButton";
import "./ProjectsNav.css";
import "./ProjectsNavExpanded.css";
import { Link } from "react-scroll";
import { useSpring, animated, useSpringRef, useChain } from "react-spring";
import NextButton from "../nextbutton/NextButton";

function ProjectsNav({
	id,
	title,
	subtitle,
	content,
	index,
	handleClick,
	shouldShow,
	leftRight,
	upDown,
	selected,
}) {
	let foo = document.querySelectorAll(".project-nav a");
	function nextButtonClick() {
		if (index + 1 === foo.length) foo[0].click();
		else foo[index + 1].click();
	}

	function abc(e) {
		if (e === 0) return "a";
		if (e === 1) return "b";
		if (e === 2) return "c";
		if (e === 3) return "d";
	}

	const info = content.map((e) => {
		if (e.element === "p") return <p key={e.id}>{e.text}</p>;
		else if (e.element === "h1") return <h1 key={e.id}>{e.text}</h1>;
		else if (e.element === "h2") return <h2 key={e.id}>{e.text}</h2>;
		else if (e.element === "h3") return <h3 key={e.id}>{e.text}</h3>;
		else if (e.element === "img")
			return <img key={e.id} src={e.src} alt={e.alt} />;
		else return null;
	});

	const imageContainerApi = useSpringRef();
	const imageContainer = useSpring({
		ref: imageContainerApi,
		to: { height: !upDown ? "100vh" : "55vh" },
		config: { duration: 500 },
	});

	const infoContainerApi = useSpringRef();
	const infoContainer = useSpring({
		ref: infoContainerApi,
		to: { height: !upDown ? "0px" : "100%" },
		config: { duration: !upDown ? 500 : 0 },
	});

	useChain(
		[imageContainerApi, infoContainerApi],
		//closing   // openinng
		!leftRight ? [1, 1] : [1.5, 1.5]
	);

	const nextButton = <NextButton onClick={nextButtonClick} />;

	return (
		<li id={shouldShow ? null : "die"}>
			<div
				// style={openAnimated}
				className="project"
				id={id}
			>
				<animated.div className="opo" style={imageContainer}>
					<Link
						to={selected ? " " : id}
						smooth={true}
						duration={1000}
						onClick={selected ? null : handleClick}
						className="project__header"
						id={id + "1"}
						href="#"
					>
						<div className={`project-image ${abc(index)}`}></div>
						<div className="header-content">
							<h5 className="header-title">{title}</h5>
							<h6 className="header-subtitle">{subtitle}</h6>

							<HexagonButton />
						</div>
					</Link>
				</animated.div>
				<animated.div
					style={infoContainer}
					className="project-content"
					id={id + "2"}
				>
					{info}
					{nextButton}
				</animated.div>
			</div>
		</li>
	);
}

export default ProjectsNav;
