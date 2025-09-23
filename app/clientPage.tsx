"use client";
import Display from "./foodDisplay/Display";
import UploadForm from "./forms/uploadForm";
import ChatCoach from "./chat/chatCoach";
import { useState } from "react";


type clientHome = {
  foods: { id: number, name: string, average_calories: number, times_eaten: number };
  foodHist: { id: number, name: string,  calories: number };
};

export default function ClientHome({foods, foodHist}: clientHome) {
  const [prompt, setPrompt] = useState("");
	const promptSuggestions = [
		"What should i eat ?",
		"Who are you ?",
		"What is a balanced diet ?",
		"How many calories should I consume daily ?",
		"What are my last 10 meals ? ",
		"How does this app work ?",
    "Give me some healthy recipes",
    "How can I improve my eating habits ?",
    "What are some nutritious snacks I can have between meals ?",
	];

	return (
		<div>
			<Display foods={foods} foodHist={foodHist} />
			<div className="row align-items-center">
				<div className="col-3">
					<UploadForm />
				</div>
				<div className="col-9 align-items-center text-align-center" style={{ marginTop: "3rem" }}>
					<div className="row row-cols-3">
						{promptSuggestions.map((prompt, index) => (
              <div className="col" key={index}>
                <button className="glass-text-bubble" onClick={() => setPrompt(prompt)}> {prompt} </button>
              </div>
						))}
					</div>
				</div>
			</div>
			<ChatCoach prePrompt={prompt} setPrePrompt={setPrompt} />
		</div>
	);
}
