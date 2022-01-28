function scroll() {
	let section = document.querySelector("section").clientHeight;
	let about = document.querySelector(".about-r").clientHeight;
	let work = document.querySelector(".work-r").clientHeight;
	let contact = document.querySelector(".contact-r").clientHeight;

	let aboutTitle = document.querySelector(".about-l");
	let workTitle = document.querySelector(".work-l");
	let contactTitle = document.querySelector(".contact-l");

	if (window.scrollY > section && window.scrollY < about) {
		aboutTitle.classList.add("fixed");
		aboutTitle.style.top = "0";
		workTitle.style.top = "0";
	} else if (window.scrollY > about && window.scrollY < section + about) {
		aboutTitle.style.top = about - section + "px";
		aboutTitle.classList.remove("fixed");
		workTitle.style.top = "0";
		workTitle.classList.remove("fixed");
	} else if (
		window.scrollY > section + about &&
		window.scrollY < about + work
	) {
		workTitle.classList.add("fixed");
		workTitle.style.top = "0";
		contactTitle.classList.remove("fixed");
		contactTitle.style.top = "0";
	} else if (
		window.scrollY > about + work + 1 &&
		window.scrollY < section + about + work
	) {
		workTitle.classList.remove("fixed");
		workTitle.style.top = work - section + "px";
		contactTitle.style.top = "0";

		contactTitle.classList.remove("fixed");
	} else if (
		window.scrollY >= section + about + work &&
		window.scrollY < about + work + contact
	) {
		contactTitle.classList.add("fixed");
		contactTitle.style.top = "0";
	} else {
		// workTitle.classList.remove("fixed");
		aboutTitle.classList.remove("fixed");
		contactTitle.classList.remove("fixed");
		contactTitle.style.top = contact - section + "px";
	}
}

export default scroll;
