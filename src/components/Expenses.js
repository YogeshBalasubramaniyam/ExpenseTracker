import React, { useState } from "react";
import Card from "./Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState("2019");
	const selectYearHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = () => {
		const filtered_Expenses = props.expenses.filter(filterByYears);
		return filtered_Expenses;
	};

	function filterByYears(expense) {
		return new Date(expense.date).getFullYear().toString() === filteredYear;
	}

	console.log(filteredExpenses());
	return (
		<Card className="expenses">
			<ExpenseFilter
				defaultSelectedYear={filteredYear}
				onSelectYear={selectYearHandler}
			/>
			{<ExpensesChart expenses={filteredExpenses()} />}
			{<ExpenseList filteredExpenses={filteredExpenses()} />}
		</Card>
	);
}
