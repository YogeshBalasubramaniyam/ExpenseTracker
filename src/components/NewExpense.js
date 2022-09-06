import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
    const [showForm, setShowForm] = useState(false);
    const saveExpenseFormHandler = (expenseData) => {
        props.onAddExpense(expenseData);
        cancelFormHandler();
    };

    const showFormHandler = () => {
        setShowForm(true);
    }

    const cancelFormHandler = () => {
        setShowForm(false);
    }

	return (
		<div className="new-expense">
            {!showForm && <button onClick={showFormHandler}>
                Add New Expense
			</button>}
			{showForm && (
				<ExpenseForm
					onSaveExpenseForm={saveExpenseFormHandler}
					onCancelForm={cancelFormHandler}
				/>
			)}
		</div>
	);
}
