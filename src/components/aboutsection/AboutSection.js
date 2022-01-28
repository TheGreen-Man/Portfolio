import React from "react";
import CreateNav from "../navbar/CreateNav";
import me from "../../frames/Mee.png";
import "./AboutSection.css";
import peace from "../../frames/Peace.png";

export default function AboutSection() {
	return (
		<section className="fullpage-section about" id="about">
			<div className="left about-l green">
				<img className="headshot" src={me} alt="me" />
				<h1 className="unselectables">About</h1>
				<CreateNav />
			</div>
			<div className="right about-r white">
				<div className="about-content">
					<h3>
						I am a junior front end developer from Belgrade, Serbia.
					</h3>
					<p>
						In my professional experience I have tried several
						different professions, but upon stumbling to web
						development, I knew I was <em>hooked</em>.
					</p>
					<h4>Humble beginnings</h4>
					<p>
						First encounter with HTML and CSS came while in first
						year of college, where we were making our personal
						websites to upload our assignments to.
					</p>
					<p>
						Having zero knowledge in HTML & CSS, it was made fairly
						simple, but yet it was filled with hidden links, jokes
						and wacky images that made anyone who visited laugh, at
						least on the inside.
					</p>

					<h5>A few moments later</h5>
					<p>
						A couple of years later, life brought me to NCR. Working
						there, I have noticed that there are many ways to
						increase my efficiency by automatisation, and so the
						idea to build "The Machine" was born. More information
						about this project will be in the project section below.
					</p>
					<h5>The present and the future</h5>
					<p>
						The feeling of creating something that was just an idea
						a while ago is irreplaceable. It is something that
						pushes me to keep learning.
					</p>
					<span className="pre-goals">Aims and goals</span>
					<ul className="goals">
						<li className="goals-li">Website performance</li>
						<li className="goals-li">Accessability</li>
						<li className="goals-li">React Native</li>
						<li className="goals-li">Testing (cypress)</li>
						<li className="goals-li">Mastering already known</li>
					</ul>
					<div className="l-img-r-text">
						<img src={peace} alt="Hi" className="foo" />
						<div className="poo">
							<p>
								As a self taught, I enjoy working alone, but I
								also believe that working in a team makes things
								run a lot faster and smoother.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}