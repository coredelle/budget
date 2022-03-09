import React, {useContext, useState} from "react";
import { v4 as uuidV4 } from 'uuid';

// context helps pass info easily
const BudgetsContext = React.createContext();

export function useBudgets() {
    return useContext(BudgetsContext);
}

// expense {
//     id:
//     name:
//     max
// }

// budget {
//     id:
//     budgetId:
//     amount:
//     description:
// }


export const BudgetsProvider = ({ children }) => {
    const [budgets, setBudgets] = useState([]);
    const [expenses, setExpenses] = useState([]);

    function getBudgetExpenses(budgetId) {
        return expenses.filter(expense => expense.budgetId === budgetId);
    }
    function addExpense({description, amount, budgetId}) {
        setExpenses(prevExpenses => {
            return [...prevExpenses, { id: uuidV4(), description, amount, budgetId}]
        });
    }
    function addBudget({name, max}) {
        setBudgets(prevBudgets => {
            if (prevBudgets.find(budget => budget.name === name)) {
                return prevBudgets;
            }
            return [...prevBudgets, { id: uuidV4(), name, max}]
        });
    }
    function deleteExpense({ id }) {
        setExpenses(prevExpenses => {
            return prevExpenses.filter(budget => budget.id !== id);
        });
    }
    function deleteBudget({ id  }) {
        setBudgets(prevBudgets => {
            return prevBudgets.filter(budget => budget.id !== id);
        });
    }

    return (
        // this allows all children to have access to whatever the value is (empty object right now)
        <BudgetsContext.Provider value={{
            budgets,
            expenses,
            getBudgetExpenses,
            addExpense,
            addBudget,
            deleteExpense,
            deleteBudget
        }}>
            {children}
        </BudgetsContext.Provider>
    )
}
