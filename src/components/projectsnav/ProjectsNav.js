import React from "react";
import "./ProjectsNav.css";
import { Link } from "react-scroll";
import { useSpring, animated, useSpringRef, useChain } from "react-spring";
import MoreButton from "../morebutton/MoreButton";
import NextButton from "../nextbutton/NextButton";
import contentCreator from "../../utility/contentCreator";
import nextButtonClick from "../../utility/nextButtonClick";

function ProjectsNav({
	id,
	title,
	subtitle,
	background,
	content,
	index,
	handleClick,
	shouldShow,
	leftRight,
	upDown,
	selected,
}) {
	let handleNextButtonClick = () => nextButtonClick(index);

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
		!leftRight ? [1, 1] : [1.5, 1.5]
	);

	const nextButton = <NextButton onClick={handleNextButtonClick} />;
	const hiddenContent = content.map((e) => contentCreator(e));
	return (
		<li id={shouldShow ? null : "die"}>
			<div className="project" id={id}>
				<animated.div className="animated-div" style={imageContainer}>
					<Link
						to={selected ? " " : id}
						smooth={true}
						duration={1000}
						onClick={selected ? null : handleClick}
						className="project__header"
						id={id + "1"}
						href="#"
					>
						<div
							className="project-image"
							style={{ backgroundImage: `url(${background})` }}
						></div>
						<div className="header-content">
							<h5 className="header-title">{title}</h5>
							<h6 className="header-subtitle">{subtitle}</h6>

							<MoreButton />
						</div>
					</Link>
				</animated.div>
				<animated.div
					style={infoContainer}
					className="project-content"
					id={id + "2"}
				>
					{hiddenContent}
					{nextButton}
				</animated.div>
			</div>
		</li>
	);
}

export default ProjectsNav;
