import { nanoid } from "nanoid";
import navbar from "../src/frames/ncr/nav.png";
import selection from "../src/frames/ncr/selection.png";
import work from "../src/frames/ncr/work.png";
import di from "../src/frames/ncr/dispatch.png";
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
				id: `${nanoid()}`,
				element: "h1",
				text: "Custom made mozilla firefox plugin, created to assist in ticket handeling trough Neos (NCR's Ticket handling tool).",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "Bill Gates once said he will choose a lazy person for a hard job because he will find an easy solution to it. Well, This is my easy solution to repetetivness of tickets",
			},
			{
				id: `${nanoid()}`,
				element: "h2",
				text: "MakeNeosGreatAgain!",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "Picture below is showing navigation bar on neos website. This plugin disables main function of clicking on logo, opening home page, and creates something much more out of it.",
			},

			{
				id: `${nanoid()}`,
				element: "img",
				src: navbar,
				alt: "Neos navigation bar",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "Clicking will create a dropdown menu. First 2 fields are not clickable, and they are pulling information, using ReGeX, from auto generated logs and showing issue information and register model.",
			},
			{
				id: `${nanoid()}`,
				element: "img",
				src: selection,
				alt: "Dropdown menu, from the Machine, 'selection' options",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "The selection of the correct model/issue now begins. In this case, the register is a SelfCheckout (SCO), model is R6L+, issue is with the bill acceptor (GSR50) and the exact location of the issue can be found accessing the register with sc030s05215us, and it is in this case in top module.",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "Once you have selected the exact location of the issue, the real assisting will begin. It will write, change, post, and do much more, but there are things that it can't do, like press enter 😂️ so it was made with checkpoints where it waits for click to continue.",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "I would be more than happy to explain and show how everything works in person.",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "Two fields marked with **** are dispatch model of the unit. It is filled automatically by Neos itself when KB is set, but some KB's are not connected with proper model, so these fields come in handy if it needs to be replaced.",
			},
			{
				id: `${nanoid()}`,
				element: "img",
				src: work,
				alt: "Dropdown menu, 'work' options",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "RR or DI means Remotely Resolved or Dispatch. RR process is really short, so i won't be talking about that one, but DI on the other hand is a bit different. Process goes somewhat like this, first a log needs to be sent, task needs to be created, then dispatched (from inside task itself), and after dispatch has been accepted, a return log will come with a number called SR, last part is taking that SR and adding it to the description.",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "Mutation observer really shines here, being able to chain multiple things together, and also some more ReGeX for the SR number search.",
			},
			{
				id: `${nanoid()}`,
				element: "img",
				src: di,
				alt: "Dropdown menu, 'dispatch' options",
			},
			{
				id: `${nanoid()}`,
				element: "h2",
				text: "Closure",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "Even though this project is fully operational, there are always ways to improve. Certain checkers that would remove the need for clicking to continue, model checker before clicking DI, extreme case scenarios where certain fields in ticket are missing so a field to add that info manually... But also, this would be a great exercise to rewrite everything using cypress and making it fully automatic.",
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
				id: `${nanoid()}`,
				element: "p",
				text: "This website is a definition of a junior project. Looking at the code, one can see a variety of different styles and approaches to everything, from problems to naming classes. Everything was left that way in order to show the process of learning.",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "It's made fully using React, and also some of the animations were done using the React Spring library, and others with regular CSS. This was done in order of testing different ways and seeing how they work.",
			},
			{
				id: `${nanoid()}`,
				element: "h3",
				text: "Let's talk about some of the problems that this website brought with it.",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "Probably the biggest problem, one that has shown itself rather fast, and that was fixed pretty much at the end of everything. It was chaining scroll with animations when switching from an open project to a second project.",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "Async/Await was my last resort in combating this problem, and let me be completely honest, it was used in a cavemans way, but it worked!",
			},
			{
				id: `${nanoid()}`,
				element: "h4",
				text: "A few other honorable mentions",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: '"Welcome" that appears when you first load the page was made in figma, a completely strange application for me. Same thing goes for Bow at the end, made to animate just once, the first time when a user scrolls to a certain position (done by intersection observer).',
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "After all of the frustrations, ups and downs, this was still really a lot of fun. Merging everything together and being limited only by lack of knowledge is a a force that is already filling my head with ideas for the next project.",
			},
		],
	},
	{
		title: "eCommerce",
		subtitle: "Future project",
		id: `${nanoid()}`,
		background: futureProjectBackground,

		content: [
			{
				id: `${nanoid()}`,
				element: "p",
				text: "This is just an idea at the moment. It is going to be a regular eCommerce website. My goal with this one is to make a fully operational website, ready to be used by a business owner. It should have everything like other website have, log in, admin privileges, basket, purchase option, maybe even a small database for articles.",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "It will also be made fully with react, but the main difference with portfolio is going to be the addition of TypeScript, as well as one of the CSS frameworks (probably tailwind) or maybe just Sass. Since the goal will be to make an production use website, there will also be a focus on accessability.",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "If you're reading this that probably means i have already started working on this website, and you can watch my progress on my github, where i will try to upload as often as i can.",
			},
		],
	},
];

export default PROJECTS;
