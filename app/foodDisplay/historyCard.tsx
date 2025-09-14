"use client"
import Image from "next/image";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Router from "next/router";

export default function historyCard({ params }: { params: { id: number, name: string, calories: number} }) {

    if (!params) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <div className="card" style={{ width: '18rem', margin: '10px' }}>
                <div className="card-body" style={{ border: '5px solid #ccc', borderRadius: '5px', padding: '10px', textAlign: 'center' }}>
                    <h5 className="card-title">{params.name}</h5>
                    <p className="card-text">Calories: {params.calories}</p>
                </div>
            </div>
        </div>
    )
}
