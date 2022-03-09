import React, {useContext, useState} from "react";

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

    function getBudgetExpenses() {

    }
    function addExpense() {

    }
    function addBudget() {

    }
    function deleteExpense() {

    }
    function deleteBudget() {

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
