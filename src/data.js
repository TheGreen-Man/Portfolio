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
				text: "Step 4: There is a choice now, the ticket is either going to be resolved or dispatched. If click on resolved, it prepares everything to resolve the ticket only leaves empty field for the name that i need to fill. If ticket needs to be dispatched, it will write a log and not post it just stay there.",
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
				text: "Step 4.1: Dispatch part is separated into 3 clicks. 1st part is that it will post the log that has been previously written (reason why it doesn't do that straight away, ocasionaly the log needs to be changed, so it leaves room for that), create a task, and once it has been created it will enter the task (it does all this with mutation observer).",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "Step 4.2: Now inside the task, it will dispatch the task and once it gets a log that it has been dispatched, it will return back to ticket, again done with mutation observer",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "Step 4.3: After the task has been dispatched, the SR number will show, it needs to be entered in to the description field, and it needs to be posted as a log. This is exactly what this step does, and once again onChange effect needs to be triggered on description field, and Save button clicked after that. This is it, ticket has been completed!",
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
				text: "Additional features",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "Field marked with red number 1, is converting register.store information (generated in every ticket), something that looks like XX.XXXX.US (can have less digits, like 1.5.US) into something that we are using that needs to be in format sc0XXs0XXXXus (example above would be sc001s00005us), and automaticaly puts it in temporary location (copys it, ready to be pasted).",
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
				// id: `${nanoid()}`,
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
		title: "Projekat 3",
		subtitle: "Subtitle 3",
		id: `${nanoid()}`,
		content: [
			{
				id: `${nanoid()}`,
				element: "p",
				text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, dolorum. Totam maiores nisi consequatur voluptatum praesentium in nihil, eaque laudantium.",
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
