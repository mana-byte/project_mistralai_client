import Image from "next/image";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Display from "./foodDisplay/Display";
import UploadForm from "./forms/uploadForm";
import ChatCoach from "./chat/chatCoach";


async function getDataFood() {
    try {
        const res = await fetch('http://localhost:8000/foods');
        const data = await res.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

async function getDataFoodHist() {
    try {
        const res = await fetch('http://localhost:8000/cal/hist/30');
        const data = await res.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }k
}


export default async function Home() {
    const foods = await getDataFood();
    const foodHist = await getDataFoodHist();
    const total_cal = foodHist.pop();
    console.log(foods);
    console.log(foodHist);
	return (
        <div>
            <Display foods={foods} foodHist={foodHist} />
            <UploadForm />
            <ChatCoach />
        </div>
	);
}
