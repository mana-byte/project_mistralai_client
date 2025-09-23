import ClientHome from "./clientPage";

async function getDataFood() {
	try {
		const res = await fetch("http://localhost:8000/foods");
		const data = await res.json();
		return data;
	} catch (error) {
		console.error("Error fetching data:", error);
		return [];
	}
}

async function getDataFoodHist() {
	try {
		const res = await fetch("http://localhost:8000/cal/hist/30");
		const data = await res.json();
		return data;
	} catch (error) {
		console.error("Error fetching data:", error);
		return [];
	}
}

export default async function Home() {
	const foods = await getDataFood();
	const foodHist = await getDataFoodHist();
	const total_cal = foodHist.pop();
	return <ClientHome foods={foods} foodHist={foodHist} />;
}
