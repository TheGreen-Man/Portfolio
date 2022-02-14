export default function closer(selected) {
	let intro = document.querySelector(".intro");
	let about = document.querySelector(".about");
	let work = document.querySelector(".work");
	work.classList.remove("expanded");

	let projectsNodeList = document.querySelectorAll(".project-ul li > div");
	let projectsArray = Object.values(projectsNodeList);
	let position = projectsArray.findIndex((e) => e.id === selected);

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
