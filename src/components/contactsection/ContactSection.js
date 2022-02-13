import React from "react";
import ContactForm from "../contactform/ContactForm";
import {
	FaGithub,
	FaLinkedin,
	FaRegEnvelopeOpen,
	FaRegFilePdf,
} from "react-icons/fa";
import CreateNav from "../navbar/CreateNav";
import "./ContactSection.css";

export default function ContactSection() {
	return (
		<section className="fullpage-section contact dark" id="contact">
			<div className="left contact-l">
				<h1 className="unselectables">Contact</h1>
				<CreateNav />
			</div>
			<div className="right contact-r light">
				<h2>Let's get in touch!</h2>
				<p>
					If you have any additional questions, or are just interested
					in a colaboration, you are welcome to contact me!
				</p>
				<h3>Filip Crncevic</h3>
				<p>Front-End Developer</p>
				<ContactForm />
				<a
					href="https://github.com/TheGreen-Man"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaGithub className="icon" />
				</a>
				<a
					href="https://www.linkedin.com/in/filip-crncevic-8b50881a3/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedin className="icon" />
				</a>
				<a href="mailto:crncevicf@gmail.com?subject=Hello!">
					<FaRegEnvelopeOpen className="icon" />
				</a>
				<a href="../../frames/Crncevic_CV.pdf" download>
					<FaRegFilePdf className="icon" />
				</a>
			</div>
		</section>
	);
}
