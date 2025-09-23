"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FoodCard from "./foodCard";
import HistoryCard from "./historyCard";
import { useState } from "react";
import Slider from "react-slick";

type Display = {
	foods: {
		id: number;
		name: string;
		average_calories: number;
		times_eaten: number;
	}[];
	foodHist: { eaten_food_id: number; name: string; calories: number }[];
};

export default function Display({ foods, foodHist }: Display) {
	const [foodDisplay, setFoodDisplay] = useState(true);
	const [buttonText, setButtonText] = useState("Show History of meals");
	const settings = {
		dots: true,
		infinite: true,
		speed: 2999,
		pauseOnHover: true,
		arrows: true,
		autoplaySpeed: 3000,
		autoplay: true,
		slidesToShow: 4,
		slidesToScroll: 1,
	};

	function clickHandler() {
		setFoodDisplay(!foodDisplay);
		setButtonText(foodDisplay ? "Show Eaten foods" : "Show History of meals");
		console.log("Toggled foodDisplay to:", !foodDisplay);
	}

	return (
		<div>
			<div style={{ textAlign: "center", margin: "20px" }}>
				<button onClick={clickHandler} className="btn btn-dark">
					{buttonText}
				</button>
			</div>
			{foodDisplay ? (
				<Slider {...settings}>
					{foods.map(
						(food: {
							id: number;
							name: string;
							average_calories: number;
							times_eaten: number;
						}) => (
							<div key={food.id}>
								<FoodCard
									params={{
										id: food.id,
										name: food.name,
										average_calories: food.average_calories,
										times_eaten: food.times_eaten,
									}}
								/>
							</div>
						),
					)}
				</Slider>
			) : (
				<Slider {...settings}>
					{foodHist.map(
						(food: {
							eaten_food_id: number;
							name: string;
							calories: number;
						}) => (
							<div key={food.eaten_food_id}>
								<HistoryCard
									params={{
										id: food.eaten_food_id,
										name: food.name,
										calories: food.calories,
									}}
								/>
							</div>
						),
					)}
				</Slider>
			)}
		</div>
	);
}
