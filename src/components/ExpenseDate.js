import React from "react";
import "./ExpenseDate.css";

export default function ExpenseDate(props) {
	const day = props.date.toLocaleString("en-US", { day: "2-digit" });
	const month = props.date.toLocaleString("en-US", { month: "long" });
	const year = props.date.toLocaleString("en-US", { year: "numeric" });
	return (
		<div className="expense-date">
			<div className="expense-date__month">{year}</div>
			<div className="expense-date__year">{month}</div>
			<div className="expense-date__day">{day}</div>
		</div>
	);
}
