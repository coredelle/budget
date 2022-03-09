import React, { useContext } from "react";

// context helps pass info easily
const BudgetsContext = React.createContext();

export function useBudgets() {
    return useContext(BudgetsContext);
}

export const BudgetsProvider = ({ children }) => {
    return (
        // this allows all children to have access to whatever the value is (empty object right now)
        <BudgetsContext.Provider value={{}}>
            {children}
        </BudgetsContext.Provider>
    )
}
