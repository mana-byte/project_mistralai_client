// This is ai generated
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

interface TypewriterProps {
	text: string;
	speed?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 150 }) => {
	const [displayedText, setDisplayedText] = useState("");

	useEffect(() => {
		let index = 0;
		const interval = setInterval(() => {
			setDisplayedText((prev) => prev + text.charAt(index));
			index++;
			if (index >= text.length) clearInterval(interval);
		}, speed);

		return () => clearInterval(interval);
	}, [text, speed]);

	return <Markdown>{displayedText}</Markdown>;
};

export default Typewriter;
