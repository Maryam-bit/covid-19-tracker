import React from 'react'
import { Bar } from 'react-chartjs-2';
import './chart.scss'


const Chart = ({ data, currentCountry }) => {
    const { confirmed, recovered, deaths, lastUpdate } = data;

    const barChart = (
        <Bar
            data={{
                labels: ["Infected", "Recovered", "Deaths"],
                datasets: [
                    {
                        label: 'infected',
                        backgroundColor: ["#123c69", "#59ba83", "#de6d6d"],
                        data: [confirmed.value, recovered.value, deaths.value],
                    },
                ],
            }}
        />
    );
    return (
        <div className="graph">
            <h3>Current State in {currentCountry? currentCountry : "Global"}</h3>
            {barChart}
        </div>
    )
}
export default Chart;