import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";

export default function ExpenseItem(props) {
	const title = props.title;
	const amount = props.amount;

	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">
					<span>&#8377;</span>
					{amount}
				</div>
			</div>
		</Card>
	);
}
