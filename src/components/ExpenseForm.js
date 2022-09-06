import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
	// const [enteredTitle, setEnteredTitle] = useState("");
	// const [enteredAmount, setEnteredAmount] = useState("");
	// const [enteredDate, setEnteredDate] = useState("");
	const [userInput, setUserInput] = useState({
		enteredTitle: "",
		enteredAmount: "",
		enteredDate: "",
	});

	// const titleChangeHandler = (event) => setEnteredTitle(event.target.value);
	// const amountChangeHandler = (event) => setEnteredAmount(event.target.value);
	// const dateChangeHandler = (event) => setEnteredDate(event.target.value);

	const titleChangeHandler = (event) => {
		// setUserInput({ ...userInput, enteredTitle: event.target.value });
		setUserInput((previousState) => {
			return { ...previousState, enteredTitle: event.target.value };
		});
	};

	const amountChangeHandler = (event) => {
		// setUserInput({ ...userInput, enteredAmount: event.target.value });
		setUserInput((previousState) => {
			return { ...previousState, enteredAmount: event.target.value };
		});
	};

	const dateChangeHandler = (event) => {
		// setUserInput({ ...userInput, enteredDate: event.target.value });
		setUserInput((previousState) => {
			return { ...previousState, enteredDate: event.target.value };
		});
	};

	// function submitHandler(event) {
	// 	event.preventDefault();
	// 	let expense = {
	// 		title: enteredTitle,
	// 		amount: enteredAmount,
	// 		date: enteredDate,
	// 	};
	// 	setEnteredTitle("");
	// 	setEnteredAmount("");
	// 	setEnteredDate("");
	// 	console.log(expense);
	// }

	const submitHandler = (event) => {
		event.preventDefault();
		let expenseData = {
			title: userInput.enteredTitle,
			amount: Number(userInput.enteredAmount),
			date: new Date(userInput.enteredDate),
		};
		setUserInput({
			enteredTitle: "",
			enteredAmount: "",
			enteredDate: "",
		});
		props.onSaveExpenseForm(expenseData);
	};

	return (
		<div className="new-expense__controls">
			<form onSubmit={submitHandler}>
				<div className="new-expense__controls">
					<div className="new-expense__control">
						<label>Title</label>
						<input
							type="string"
							onChange={titleChangeHandler}
							// value={enteredTitle}
							// value={userInput.enteredTitle}
						></input>
					</div>
					<div className="new-expense__control">
						<label>Amount</label>
						<input
							type="number"
							min="0"
							step="1"
							onChange={amountChangeHandler}
							// value={enteredAmount}
							// value={userInput.enteredAmount}
						></input>
					</div>
					<div className="new-expense__control">
						<label>Date</label>
						<input
							type="date"
							min="01-01-2019"
							max="31-12-2022"
							onChange={dateChangeHandler}
							// value={enteredDate}
							// value={userInput.enteredDate}
						></input>
					</div>
					<div className="new-expense__actions">
						<button onClick={props.onCancelForm}>Cancel</button>
						<button type="submit">Add Expense</button>
					</div>
				</div>
			</form>
		</div>
	);
}
