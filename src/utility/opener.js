export default function opener() {
	let intro = document.querySelector(".intro");
	let about = document.querySelector(".about");
	if (window.screen.width <= 990)
		window.scrollTo(0, intro.clientHeight * 2 + about.clientHeight);
	else window.scrollTo(0, intro.clientHeight + about.clientHeight);
}
