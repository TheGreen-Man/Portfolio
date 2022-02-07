import React, { useState, useRef, useMemo, useEffect } from "react";
import "./ByeSection.css";
import animationArray from "../../frames/thankyou";

export default function ByeSection() {
	const [image, setImage] = useState(animationArray[0]);
	const observedSection = useRef(null);

	const options = useMemo(() => {
		return { root: null, rootMargin: "0px", threshold: 0.65 };
	}, []);
	function animate(i) {
		setTimeout(() => {
			setImage(animationArray[i]);
		}, 150 * i);
	}
	useEffect(() => {
		const observer = new IntersectionObserver(function (entrie, observer) {
			if (!entrie[0].isIntersecting) return;
			setTimeout(() => {
				for (let i = 0; i < animationArray.length; i++) {
					animate(i);
				}
			}, 666);
			observer.disconnect(observedSection.current);
		}, options);

		observer.observe(observedSection.current);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<section
			className="fullpage-section good-bye green"
			ref={observedSection}
		>
			<div className="aaaa">
				<img
					src={image}
					alt="bow animation"
					className="bow-animation"
				/>
			</div>
			<div className="ty"></div>
		</section>
	);
}
