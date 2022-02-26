import { nanoid } from "nanoid";
import navbar from "../src/frames/ncr/nav.png";
import selection from "../src/frames/ncr/selection.png";
import work from "../src/frames/ncr/work.png";
import ncrBackground from "../src/frames/ncr/ncr123.png";
import portfolioBackground from "../src/frames/portfolio.png";
import futureProjectBackground from "../src/frames/future.png";
const PROJECTS = [
	{
		title: "TheMachine",
		subtitle: "Ticket assistant tool",
		background: ncrBackground,
		id: `${nanoid()}`,

		content: [
			{
				element: "p",
				text: '"Those who are unaware they are walking in darkness will never seek the light." - Bruce Lee',
			},
			{
				element: "h1",
				text: "Custom made mozilla firefox plugin",
			},
			{
				element: "p",
				text: "Working in NCR I have noticed that many of the things are repeating themselfes when handleing tickets. Simple copy/paste from dozens of sticky notes wasn't going to cut it. Auto Hotkey script was a step in the right direction, but after learning some basics of JS, I knew I wanted more.",
			},
			{
				element: "p",
				text: "This plugin mounts itself on Neos (NCR's ticket handling website) navbar logo, disabling the main function, redirection to home page, and making so much more.",
			},

			{
				element: "img",
				src: navbar,
				alt: "Neos navigation bar",
			},

			{
				element: "p",
				text: "Clicking on the logo will create a dropdown menu. First couple of clicks are waited for the user to select proper type/model/issue. There are also additional fields marked with stars, wich help user in gathering information quicker, preparing register ID, and of course there is a back button in case of missclick.",
			},
			{
				element: "img",
				src: selection,
				alt: "Dropdown menu, from the Machine, 'selection' options",
			},
			{
				element: "p",
				text: "After the selection has been completed, real work starts. It will now write, change, post, and do so much more. After every action, it will stop and wait for user to click again to continue. Sometimes user input is needed between some actions, sometimes not. This also works as a safety net.",
			},
			{
				element: "img",
				src: work,
				alt: "Dropdown menu, 'work' options",
			},

			{
				element: "p",
				text: "Neos does some things, on its own, like changing product/model info on certain issues to incorrect one. This doesn't happen for all issues, and people remember on which issue they need to rewrite the info, but even the best sometimes forget and the whole process takes couple of times longer then it should. That is exactly one of the things that this plugin helps avoid. It allows users to focus on quality of work, without needing to remember unneccasary information.",
			},

			{
				element: "p",
				text: "One other way this plugin boosts efficiency is removing the need for the user to use multiple programs in order of getting issueID as well as issue description. It has a 'database' of it's own. Also, since each description is sort of unique, it needs to have a register number in it, this plugin does that as well, using ReGeX!",
			},

			{
				element: "h2",
				text: "Conclusion",
			},

			{
				element: "p",
				text: "Interesting yet practical project, ironically named MakeNeosGreatAgain!, helping me with not only learning JS, but improving the quallity and efficiency of my work.",
			},
		],
	},
	{
		title: "Portfolio",
		subtitle: "It's this website!",
		background: portfolioBackground,
		id: `${nanoid()}`,
		content: [
			{
				element: "p",
				text: "This website is my first bigger project, combining all my knowledge of HTML, CSS and js. It's made using React, and some of the animations were done using React Spring library.",
			},
			{
				element: "h4",
				text: "Let's talk about some of the problems that this website brought with it.",
			},
			{
				element: "p",
				text: "Probably the biggest problem, one that has shown itself rather fast, and that was fixed pretty much at the end of everything. It was chaining scroll with animations when switching from an open project to a second project.",
			},
			{
				element: "p",
				text: "Async/Await was my last resort in combating this problem, and let me be completely honest, it was used in a cavemans way, but it worked!",
			},
			{
				element: "p",
				text: '"Welcome" at the first section, and bow person at the last were both made using Figma. That was my first encounter with the app, and a lot of googling and trial and error was done in order of creating that.',
			},
			{
				element: "p",
				text: "Bow animation at the end, that needs to run only once was done using intersection observer",
			},
			{
				element: "p",
				text: "After all of the frustrations, ups and downs, this was still really a lot of fun. Merging everything together and being limited only by lack of knowledge is a force that is already filling my head with ideas for the next project.",
			},
		],
	},
	{
		title: "eCommerce",
		subtitle: "Future project",
		background: futureProjectBackground,
		id: `${nanoid()}`,
		content: [
			{
				element: "p",
				text: "This one is still just an idea. Main focus here is going to be getting familiar with new web technologies.",
			},
			{
				element: "p",
				text: "My goal is to make fully operational website, that is going to have authentication, user privilege management (basic user vs admin), payment processing and a database for the articles.",
			},
			{
				element: "p",
				text: "Some of the main differences between this portfolio and the eComm website are going to be the addition of TypeScript, Sass and accessibility friendly.",
			},
			{
				element: "p",
				text: "I'm looking forward in creating this website, and all of the surprises encounters with new web technologies will bring!",
			},
		],
	},
];

export default PROJECTS;
