import "./Chart.css";
import React from "react";
import ChartBar from "./ChartBar";

export default function Chart(props) {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const maximumValue = Math.max(...dataPointValues);
  console.log(props.dataPoints)
	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					value={dataPoint.value}
					label={dataPoint.label}
					maxValue={maximumValue}
					key={dataPoint.label}
				/>
			))}
		</div>
	);
}
