import Container from "react-bootstrap/Container";
import { Button, Stack } from "react-bootstrap";
import BudgetCard from "./components/BudgetCard";
import AddBudgetModal from "./components/AddBudgetModal";
import { useState } from "react";
import { useBudgets } from "./contexts/BudgetsContexts";
import AddExpenseModal from "./components/AddExpenseModal";
import UncategorizedBudgetCard from "./components/UncategorizedBudgetCard";
import TotalBudgetCard from "./components/TotalBudgetCard";

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState();
  const { budgets, getBudgetExpenses } = useBudgets();

  function openAddExpenseModal(budgetId) {
      setShowAddExpenseModal(true);
      setAddExpenseModalBudgetId(budgetId);
  }

  return (
    <>
        {/*my gives mergin at top and bottom of page*/}
        <Container className='my-4'>
            {/*gap is the space between elements, mb is margin bottom*/}
          <Stack direction='horizontal' gap='2' className='mb-4'>
            {/*  me sticks it to the left side of the screen*/}
            <h1 className='me-auto'>Budgets</h1>
            {/*  variant gives color*/}
            <Button variant='primary' onClick={() => setShowAddBudgetModal(true)}>Add Budget</Button>
            <Button variant='outline-primary' onClick={openAddExpenseModal}>Add Expense</Button>
          </Stack>
          <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr)',
              gap: '1rem',
              alignItems: 'flex-start'
          }}>
          {budgets.map(budget => {
              const amount = getBudgetExpenses(budget.id).reduce((total, expense) => total + expense.amount, 0);
              return (
                  <BudgetCard
                      key={budget.id}
                      name={budget.name}
                      amount={amount}
                      max={budget.max}
                      onAddExpenseClick={() => openAddExpenseModal(budget.id)}
                  />
              )
          })}
          <UncategorizedBudgetCard />
          <TotalBudgetCard />
          </div>
        </Container>
        <AddBudgetModal
            show={showAddBudgetModal}
            handleClose={() => {setShowAddBudgetModal(false)}}
        />
        <AddExpenseModal
            show={showAddExpenseModal}
            defaultBudgetId={addExpenseModalBudgetId}
            handleClose={() => setShowAddExpenseModal(false)}
        />
    </>
  );
}

export default App;
