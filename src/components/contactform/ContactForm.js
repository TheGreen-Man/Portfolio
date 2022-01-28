import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./ContactForm.css";

export default function ContactForm() {
	const [state, handleSubmit] = useForm("mdoyvpbp");
	const ty = <p className="ty">Thank you!</p>;
	// console.log(state.succeeded);
	return (
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Name</label>
				<input id="name" name="Name" type="text" />
				<label htmlFor="email">E-Mail</label>
				<input id="email" name="E-mail" type="email" />
				<ValidationError
					prefix="Email"
					field="email"
					errors={state.errors}
				/>
				<label htmlFor="message">Message</label>
				<textarea id="message" name="Message" cols="30" rows="10" />
				<ValidationError
					prefix="Message"
					field="message"
					errors={state.errors}
				/>
				<button type="submit" disabled={state.submitting}>
					Submit
				</button>
				{state.succeeded ? ty : null}
			</form>
		</div>
	);
}
