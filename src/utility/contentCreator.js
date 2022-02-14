export default function contentCreator(e) {
	if (e.element === "p") return <p key={e.id}>{e.text}</p>;
	else if (e.element === "h1") return <h1 key={e.id}>{e.text}</h1>;
	else if (e.element === "h2") return <h2 key={e.id}>{e.text}</h2>;
	else if (e.element === "h3") return <h3 key={e.id}>{e.text}</h3>;
	else if (e.element === "h4") return <h4 key={e.id}>{e.text}</h4>;
	else if (e.element === "img")
		return <img key={e.id} src={e.src} alt={e.alt} />;
	else return null;
}
