function click(e) {
	e.preventDefault();
	let section = document.querySelector(".work");
	let thisDiv = e.currentTarget;
	let imageContainer = e.currentTarget.children[0];
	let projectContentDiv = e.currentTarget.children[1];

	section.classList.add("chapter--expanded");
	section.classList.add("chapter--closable");
	thisDiv.classList.add("open");

	window.scrollTo({
		top: position(imageContainer) + 1,
		behavior: "smooth",
	});
	imageContainer.style.height = "40%";
	projectContentDiv.classList.remove("hidden");
	projectContentDiv.style.height = "auto";
}

export default click;

function position(e) {
	var value = 0;

	while (e) {
		value += e.offsetTop - e.scrollTop + e.clientTop;
		e = e.offsetParent;
	}

	return value;
}
