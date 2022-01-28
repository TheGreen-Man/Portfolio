/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import WelcomeSection from "./components/welcomesection/WelcomeSection";
import AboutSection from "./components/aboutsection/AboutSection";
import WorkSection from "./components/worksection/WorkSection";
import ContactSection from "./components/contactsection/ContactSection";
import ByeSection from "./components/byesection/ByeSection";
import scroll from "./js/scroll";
import PROJECTS from "./data";
import MenuButtonMobile from "./components/menubuttonmobile/MenuButtonMobile";

function App() {
	if (window.screen.width >= 990) window.addEventListener("scroll", scroll);
	return (
		<>
			<MenuButtonMobile />
			<WelcomeSection />
			<AboutSection />
			<WorkSection projects={PROJECTS} />
			<ContactSection />
			<ByeSection />
		</>
	);
}

export default App;
