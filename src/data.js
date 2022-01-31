import { nanoid } from "nanoid";
import navbar from "../src/frames/ncr/nav.png";
import selection from "../src/frames/ncr/selection.png";
import work from "../src/frames/ncr/work.png";
import di from "../src/frames/ncr/dispatch.png";

const PROJECTS = [
	{
		title: "TheMachine",
		subtitle: "Ticket assistant tool",
		id: `${nanoid()}`,
		content: [
			// {
			// 	id: `${nanoid()}`,
			// 	element: "h1",
			// 	text: "Intro",
			// },
			{
				id: `${nanoid()}`,
				element: "h1",
				text: "Custom made mozilla firefox plugin, created to assist in ticket handeling trough Neos (NCR's Ticket handling tool).",
			},
			// {
			// 	id: `${nanoid()}`,
			// 	element: "p",
			// 	text: "Now with that out of the way, let's begin!",
			// },
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
				alt: "alt",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "Clicking will create a dropdown menu. First 2 fields are not clickable, and they are pulling information from auto generated logs trough ReGeX and showing issue information and register model.",
			},
			{
				id: `${nanoid()}`,
				element: "img",
				src: selection,
				alt: "alt",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "The selection of the correct model/issue now begins. In this case, the register is a SelfCheckout (SCO), model is R6L+, issue is with the bill acceptor (GSR50) and a part that needs to be checked with the sc030s05215us is where is the issue located, that is in this case in top module.",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "As you might have noticed, there are also new fields here, **field is a regular back button, while the ***field is also generated from the information in the ticket, to create a register name that on click gets copied and can be used for easy access to the register via different app",
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
				text: "Two fields marked with **** are dispatch model of the unit. It is filled automatically when KB is set, but some KB's are not connected with proper model, so these fields are handy to check that and if needed replace.",
			},
			{
				id: `${nanoid()}`,
				element: "img",
				src: work,
				alt: "alt",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "RR or DI means Remotely Resolved or Dispatch. RR process is really short, so i won't be talking about that one, but DI on the other hand is a bit different. Process goes somewhat like this, first a log needs to be sent, task needs to be created, then dispatched (from inside task itself), and after dispatch has been accepted, a return log will come with a code called SR, last part is taking that SR and add it to the description.",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "Mutation observer really shines here, being able to chain multiple things together, and also some more regex for the SR number search.",
			},
			{
				id: `${nanoid()}`,
				element: "img",
				src: di,
				alt: "alt",
			},
			{
				id: `${nanoid()}`,
				element: "h2",
				text: "Closure",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "Even though this project is fully operational, there are always ways to improve. Certain checkers that would remove the need for clicking to continue, some additional features, extreme case scenarios where certain fields in ticket are missing so a field to add that info manually would come handy, etc. can always be added, but i would say that my main goal is to rewrite the whole thing, make it fully automatic, using cypress.",
			},
		],
	},
	{
		title: "Portfolio",
		subtitle: "It's this website!",
		id: `${nanoid()}`,
		content: [
			{
				id: `${nanoid()}`,
				element: "p",
				text: "This website was lots of fun building, but also lots of stress. It is made with with React, and animations were mainly done with React Spring library.",
			},
			{
				id: `${nanoid()}`,
				element: "h3",
				text: "Let's talk!",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "different styles",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "Unlike my first major project, the raw js plugin, this is something where all my knowledge had to be put together, first actual build of something, incorporating all aspects of web development. HTML, CSS and JS all together.",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "There were many hits at a brick wall creating this. Firstly, even though it was created in React, i wasn't utilising the component way of building, hooks or anything that react has to offer. Same goes for animation, starting this, everything was done in css, but later was converted to React Spring. ",
			},
		],
	},
	{
		title: "eCommerce",
		subtitle: "Planner like no other",
		id: `${nanoid()}`,
		content: [
			{
				id: `${nanoid()}`,
				element: "p",
				text: "After finishing this portfolio, realisation that i have learned a lot, and yet still don't know even more has came to my mind and my next course of action will be to make once again a website from scratch. This time it is going to be a production grade eCommerce website.",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "Why planner? Friend has a passion for making different styled planners. Everything ranging from proffesional to themed ones, and would like to showcase her work and create a web shop.This is an ideal opportunity for me to gain more expiriance, and for her to not take a financial hit in order to get everything going.",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "Goal is pretty simple here. Fully responsive, clean, website on which you should be able to review items, add to card, sign in, or make a purchase as guest. It will also be made using React.",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "Since this is a future project that will start as soon as this portfolio is finished, you can watch my progrees on my GitHub account",
			},
		],
	},
	// {
	// 	title: "Projekat 4",
	// 	subtitle: "Subtitle 4",
	// 	id: `${nanoid()}`,
	// 	content: [
	// 		{
	// 			id: `${nanoid()}`,
	// 			element: "p",
	// 			text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, dolorum. Totam maiores nisi consequatur voluptatum praesentium in nihil, eaque laudantium.",
	// 		},
	// 		{
	// 			// id: `${nanoid()}`,
	// 			id: `${nanoid()}`,
	// 			element: "p",
	// 			text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, dolorum. Totam maiores nisi consequatur voluptatum praesentium in nihil, eaque laudantium.",
	// 		},
	// 		{
	// 			// id: `${nanoid()}`,
	// 			id: `${nanoid()}`,
	// 			element: "p",
	// 			text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, dolorum. Totam maiores nisi consequatur voluptatum praesentium in nihil, eaque laudantium.",
	// 		},
	// 		{
	// 			id: `${nanoid()}`,
	// 			element: "p",
	// 			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In reiciendis nemo autem saepe? Quia reiciendis similique consequatur accusantium quas? Ut ullam, voluptas neque maiores maxime ex beatae corrupti sint molestias exercitationem iure, corporis fugit in pariatur error sed excepturi consectetur quasi veniam minima quia rem! Perspiciatis maxime earum excepturi quisquam quidem ut veritatis nesciunt aperiam numquam, quod totam porro! Totam dolor hic velit, praesentium suscipit, perspiciatis provident labore qui culpa, quos quasi illum cum blanditiis? Delectus vel soluta iure distinctio, cumque cum qui dolores. Architecto fugiat, aliquid illo alias cupiditate pariatur consequuntur ipsum mollitia dolor dicta recusandae minus, porro commodi.",
	// 		},
	// 		{
	// 			id: `${nanoid()}`,
	// 			element: "p",
	// 			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In reiciendis nemo autem saepe? Quia reiciendis similique consequatur accusantium quas? Ut ullam, voluptas neque maiores maxime ex beatae corrupti sint molestias exercitationem iure, corporis fugit in pariatur error sed excepturi consectetur quasi veniam minima quia rem! Perspiciatis maxime earum excepturi quisquam quidem ut veritatis nesciunt aperiam numquam, quod totam porro! Totam dolor hic velit, praesentium suscipit, perspiciatis provident labore qui culpa, quos quasi illum cum blanditiis? Delectus vel soluta iure distinctio, cumque cum qui dolores. Architecto fugiat, aliquid illo alias cupiditate pariatur consequuntur ipsum mollitia dolor dicta recusandae minus, porro commodi.",
	// 		},
	// 	],
	// },
];

export default PROJECTS;
