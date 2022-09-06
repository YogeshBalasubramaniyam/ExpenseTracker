import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

const INITIAL_EXPENSES = [
	{
		id: "e1",
		title: "Food",
		amount: 535,
		date: new Date(2022, 2, 26),
	},
	{
		id: "e2",
		title: "Shirts",
		amount: 2890,
		date: new Date(2022, 5, 30),
	},
	{
		id: "e3",
		title: "Pants",
		amount: 2240,
		date: new Date(2022, 6, 30),
	},
	{
		id: "e4",
		title: "Trousers",
		amount: 1220,
		date: new Date(2022, 1, 1),
	},
	{
		id: "e5",
		title: "Food",
		amount: 1212,
		date: new Date(2022, 7, 22),
	},
];

function App() {
	const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

	const addExpenseHandler = (expenseData) => {
		setExpenses((previousExpense) => {
			const expenseId = previousExpense.length + 1;
			expenseData = { ...expenseData, id: "e" + expenseId };
			return [expenseData, ...previousExpense];
		});
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses expenses={expenses} />
		</div>
	);
}

export default App;
