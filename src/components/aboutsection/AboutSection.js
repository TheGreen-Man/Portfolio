import React from "react";
import CreateNav from "../navbar/CreateNav";
import me from "../../frames/Mee.png";
import "./AboutSection.css";
import peace from "../../frames/Peace.png";

export default function AboutSection() {
	return (
		<section className="fullpage-section about" id="about">
			<div className="left about-l accent">
				<img className="headshot" src={me} alt="me" />
				<h1 className="unselectables">About</h1>
				<CreateNav />
			</div>
			<div className="right about-r light">
				<div className="about-content">
					<h3>
						I am a junior front end developer from Belgrade, Serbia.
					</h3>
					<p>
						In my employment history I have tried several different
						professions, but upon stumbling to web development, I
						knew I was <em>hooked</em>.
					</p>
					<h4>Start of a wonderful journey</h4>
					<p>
						First encounter with HTML and CSS came while in college,
						where we were making our personal websites to upload our
						assignments to.
					</p>
					<p>
						Having zero knowledge in HTML & CSS, it was made fairly
						simple, yet it was filled with hidden links, jokes and
						wacky images that appear on hover. making anyone who
						visited laugh, at least on the inside.
					</p>

					<h4>The idea that set everything in motion</h4>

					<p>
						A couple of years later, life brought me to NCR. Working
						there, I have noticed that there are many ways to
						increase my efficiency, and so the idea to build "The
						Machine" was born. More information about this project
						will be in the project section below.
					</p>
					<h4>What the future holds</h4>
					<p>
						The feeling of creating something that was just an idea
						a while ago is irreplaceable. It is something that
						pushes me.
					</p>
					<span className="pre-goals">Aims and goals</span>
					<ul className="goals">
						<li className="goals-li">Performance</li>
						<li className="goals-li">React and React Native</li>
						<li className="goals-li">Testing (cypress/jest)</li>
						<li className="goals-li">Security</li>
						<li className="goals-li">Accessability</li>
						<li className="goals-li">Mastering already known</li>
					</ul>
					<div className="l-img-r-text">
						<img
							src={peace}
							alt="Hand peace sign"
							className="peace"
						/>
						<div className="peace-text">
							<p>
								As a self taught developer, I enjoy working
								alone, but I strongly believe in teamwork in
								order of achieving greatness.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
