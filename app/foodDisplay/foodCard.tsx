"use client";
import Image from "next/image";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Router from "next/router";

export default function FoodCard({
	params,
}: {
	params: {
		id: number;
		name: string;
		average_calories: number;
		times_eaten: number;
	};
}) {
	if (!params) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<div className="card" style={{ width: "18rem", margin: "10px" }}>
				<div
					className="card-body"
					style={{
						border: "5px solid #ccc",
						borderRadius: "5px",
						padding: "10px",
						textAlign: "center",
					}}
				>
					<h5 className="card-title">{params.name}</h5>
					<p className="card-text">
						Average Calories: {params.average_calories}
					</p>
					<p className="card-text">Times Eaten: {params.times_eaten}</p>
				</div>
			</div>
		</div>
	);
}
