import { nanoid } from "nanoid";
import ob from "../src/img/6.jpeg";

const PROJECTS = [
	{
		title: "TheMachine",
		subtitle: "Ticket assistant tool",
		id: `${nanoid()}`,
		content: [
			{
				id: `${nanoid()}`,
				element: "h1",
				text: "Intro",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "This is a mozilla firefox plugin, made with raw vanilla js. It is made as a plugin and is uploaded directly from local computer in order to prevent any confidental information leakage. This is also a disclaimer that i will show some of the featuers and how it works.",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "Now with that out of the way, let's begin!",
			},
			{
				id: `${nanoid()}`,
				element: "h2",
				text: "MakeNeosGreatAgain!",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "This plugin will remove the main function of clicking on the webpages logo (sending to home page, that is never used and is just a nuisence), and instead it will show a dropdown menu. ",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "Firstly, you would navigate trough the dropdown menu by clicking on its fields, and it will rerender accordingly. Main usage of this is being able to select the correct unit and the exact issue that it is having. There are also some additional features that will be later explained.",
			},
			{
				id: `${nanoid()}`,
				element: "img",
				src: ob,
				alt: "alt",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "Now that the correct model and issue has been selected, the plugin starts doing it's thing. I won't bore you with the details and will try to explain in short what is happening. We will go step by step:",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "Step 1: Opens KB searcher, selects it, set's its value to [KB+' '] written in POSLOG. My part here is that i need to press backspace (to triger onChange) and enter key, wait for it to search KB, and select the proper one.",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "Step 2: Exits KB searcher, opens ticket general information field, changes: title, description, product and model. Title and description is the same log written twice, it is dynamically altered, it has '-XX-' in it, where by regex it will replace that with the register number (ex. 01, 99). Same thing goes here as for KB, my part is to click on title and description field and press backspace or space (it will crop excess whitespace automatically on save, just needed to trigger onChange), and product and model are dropdowns on which i don't need to change anything. Click Save button.",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "Step 3+: Now is the part where it writes logs in the ticket. 1st one is always dynamically created by writing name of the person who created the ticket and the issue details, and other logs are written in the POSLOG, depending on the issue, there might be only the first log, or more (up to 3). I do not need to do anything on this part, other then to press the button on the list and it will write and post the log on its own. Fun part about here, since again onChange was not triggered, 'Post' button remains grayed out as if nothing was written on it, but",
			},
			{
				id: `${nanoid()}`,
				element: "p",
				text: "Step 4: There is a choice now, the ticket is either going to be resolved or dispatched. If click on resolved, it prepares everything to resolve the ticket only leaves empty field for the name that i need to fill. If ticket needs to be dispatched, it will write a log and not post it just stay there.",
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
