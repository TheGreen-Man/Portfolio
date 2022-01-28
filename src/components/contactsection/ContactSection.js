import React from "react";
import ContactForm from "../contactform/ContactForm";
import {
	FaGithub,
	FaLinkedin,
	FaRegEnvelopeOpen,
	FaRegFilePdf,
} from "react-icons/fa";
// import { HiMail } from "react-icons/hi";
import CreateNav from "../navbar/CreateNav";
import "./ContactSection.css";

export default function ContactSection() {
	return (
		<section className="fullpage-section contact gray" id="contact">
			<div className="left contact-l">
				<h1 className="unselectables">Contact</h1>
				<CreateNav />
			</div>
			<div className="right contact-r white">
				<h2>Let's get in touch!</h2>
				<p>
					If you have any additional questions, or are just interested
					in a colaboration, you are welcome to contact me!
				</p>
				<h3>Filip Crncevic</h3>
				<p>Front-End Developer</p>
				<ContactForm />
				<a
					href="http://github.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaGithub className="icon" />
				</a>
				<a
					href="http://linkedin.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedin className="icon" />
				</a>
				<FaRegEnvelopeOpen className="icon" />
				<FaRegFilePdf className="icon" />
			</div>
		</section>
	);
}
