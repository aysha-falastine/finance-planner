// App.js (React Entry Point)
import React, { useEffect, useState } from 'react';
import Dashboard from './Components/Dashboard';
import GoalList from './Components/GoalList';
import GoalForm from './Components/GoalForm';
import DepositForm from './Components/DepositForm';
import { fetchGoals } from './Components/Api';
import './App.css';

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetchGoals().then(setGoals);
  }, []);

  return (
    <div className="app">
      <h1>Finance Planner</h1>
      <Dashboard goals={goals} />
      <div className="actions">
        <GoalForm onGoalCreated={setGoals} />
        <DepositForm goals={goals} onDeposit={setGoals} />
      </div>
      <GoalList goals={goals} />
    </div>
  );
}

export default App;
