import Container from "react-bootstrap/Container";
import { Button, Stack } from "react-bootstrap";
import BudgetCard from "./components/BudgetCard";
import AddBudgetModal from "./components/AddBudgetModal";
import { useState } from "react";

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
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
            <Button variant='outline-primary'>Add Expense</Button>
          </Stack>
          <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr)',
              gap: '1rem',
              alignItems: 'flex-start'
          }}>
          <BudgetCard name={'Freak Nik'} amount={90000} max={15000}/>
          </div>
        </Container>
        <AddBudgetModal show={showAddBudgetModal} handleClose={() => {setShowAddBudgetModal(false)}}/>
    </>
  );
}

export default App;
