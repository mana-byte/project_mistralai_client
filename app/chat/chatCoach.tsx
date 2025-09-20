"use client";
import Image from "next/image";
import React from "react";
import Markdown from "react-markdown";

async function fetchChatResponse(ask_question: string) {
	try {
		const res = await fetch("http://localhost:8000/chat", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ question: ask_question }),
		});
		const data = await res.json();
		if (data.response == 1 || !data.response) {
			return "Sorry, I couldn't get a response at this time.";
		}
		return data.response;
	} catch (error) {
		console.error("Error fetching chat response:", error);
		return "Sorry, I couldn't get a response at this time.";
	}
}

export default function ChatCoach() {
	const [question, setQuestion] = React.useState("");
	const [chatResponse, setChatResponse] = React.useState("");
	const [isLoading, setIsLoading] = React.useState(false);
	return (
		<div
			style={{
				margin: "20px",
				marginLeft: "100px",
				marginRight: "100px",
				textAlign: "center",
			}}
		>
			<div className="card mt-2">
				<form
					onSubmit={async (e) => {
						const questionCopy = question;
						e.preventDefault();
						setIsLoading(true);
						setQuestion("");
						const response = await fetchChatResponse(questionCopy);
						setIsLoading(false);
						setChatResponse(response);
					}}
				>
					<input
						type="text"
						className="form-control"
						name="question"
						placeholder="Ask chat gourmand a food related question... (ex: What should I eat ? What did i eat in the last 8 meals ? Can I a slice of cake ?)"
						onChange={(e) => setQuestion(e.target.value)}
						value={question}
					/>
					<button type="submit"></button>
				</form>
				<div className="card-body">
					{isLoading ? (
						<div
							className="d-flex justify-content-center align-items-center"
							style={{ minHeight: "10vh" }}
						>
							<div className="spinner-border text-primary" role="status">
								<span className="visually-hidden">Loading...</span>
							</div>
						</div>
					) : (
						<h5 style={{ marginBottom: "25px" }} className="card-title">
							le Chat Gourmand is ready
						</h5>
					)}
					<div className="card-text">
						<Markdown>{chatResponse}</Markdown>
					</div>
				</div>
			</div>
		</div>
	);
}
