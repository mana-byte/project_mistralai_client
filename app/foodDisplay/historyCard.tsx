"use client";

type HistoryParams = {
	id: number;
	name: string;
	calories: number;
};

export default function historyCard({params}: {params: HistoryParams}) {
	if (!params) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<div className="glass-card" style={{ width: "18rem" }}>
				<div
					className="card-body"
					style={{
						borderRadius: "5px",
						padding: "10px",
						textAlign: "center",
					}}
				>
					<h5 className="card-title">{params.name}</h5>
					<p className="card-text">Calories: {params.calories}</p>
				</div>
			</div>
		</div>
	);
}
