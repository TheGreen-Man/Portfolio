export default function nextButtonClick(i) {
	let projectLinks = document.querySelectorAll(".project-nav a");
	if (i + 1 === projectLinks.length) projectLinks[0].click();
	else projectLinks[i + 1].click();
}
