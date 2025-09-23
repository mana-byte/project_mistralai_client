"use client";
import React from "react";
import Typewriter from "./Typewriter";
import { useEffect } from "react";
import "./chat.css";

type ChatResponse = {
	prePrompt: string;
	setPrePrompt?: (value: string) => void;
};

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

export default function ChatCoach({ prePrompt, setPrePrompt }: ChatResponse) {
	const [chatResponse, setChatResponse] = React.useState("");
	const [isLoading, setIsLoading] = React.useState(false);
	const [typedText, setTypedText] = React.useState("");

	const inputRef = React.useRef<HTMLInputElement>(null);
	const formDivRef = React.useRef<HTMLDivElement>(null);
	const outputDivRef = React.useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (inputRef.current && formDivRef.current) {
			const newWidth = typedText.length * 11 + 70;
			formDivRef.current.style.width = `${newWidth}px`;
		}
	}, [typedText]);

	useEffect(() => {
		if (outputDivRef.current && (isLoading || chatResponse !== "")) {
			const numOfLines = chatResponse.split("\n").length;
			const maxCharPerLine = Math.max(
				...chatResponse.split("\n").map((line) => line.length),
				50,
			);
			const newHeight = numOfLines * 24 + 100;
			const newWidth = Math.min(maxCharPerLine * 12 + 70, 1200);

			outputDivRef.current.style.width = `${newWidth}px`;
			outputDivRef.current.style.height = `${newHeight}px`;
		}
	}, [chatResponse, isLoading]);

	useEffect(() => {
		if (setPrePrompt && prePrompt !== "") {
			setTypedText(prePrompt);
			setPrePrompt("");
		}
	}, [prePrompt, setPrePrompt, setTypedText]);

	return (
		<div
			style={{
				margin: "20px",
				textAlign: "center",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				width: "auto",
			}}
		>
			<div
				ref={formDivRef}
				className="card mt-2 glass-card-form-input"
				style={{ height: "50px", width: "70px" }}
			>
				<div className="card-body">
					<form
						onSubmit={async (e) => {
							const questionCopy = typedText;
							e.preventDefault();
							setIsLoading(true);
							setTypedText("");
							const response = await fetchChatResponse(questionCopy);
							setIsLoading(false);
							setChatResponse(response);
						}}
						className="invisible-form"
						autoComplete="off"
					>
						<input
							type="text"
							ref={inputRef}
							className="form-control"
							name="question"
							onChange={(e) => {
								setTypedText(e.target.value);
							}}
							value={typedText}
							style={{ height: "100%" }}
						/>
						<button type="submit"></button>
					</form>

					{isLoading ? null : (
						<h5
							style={{ marginBottom: "0px" }}
							className="card-title replacement-input"
						>
							{typedText}
							<span className="blink">█</span>
						</h5>
					)}
				</div>
			</div>

			<div className="card mt-2 glass-card-form-output" ref={outputDivRef}>
				<div className="card-body">
					<div className="card-text">
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
							<Typewriter text={chatResponse} speed={15} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
