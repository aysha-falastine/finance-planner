// components/DepositForm.jsx
import React, { useState } from 'react';
import { updateGoalAmount } from '../Components/Api';

const DepositForm = ({ goals, onDeposit }) => {
  const [goalId, setGoalId] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const selectedGoal = goals.find(goal => goal.id === goalId);
    if (!selectedGoal) return;

    const updated = await updateGoalAmount(goalId, selectedGoal.savedAmount + parseFloat(amount));
    onDeposit(goals.map(g => g.id === goalId ? updated : g));
    setGoalId('');
    setAmount('');
  };

  return (
    <form className="deposit-form" onSubmit={handleSubmit}>
      <select value={goalId} onChange={(e) => setGoalId(e.target.value)} required>
        <option value="">Select Goal</option>
        {goals.map(goal => (
          <option key={goal.id} value={goal.id}>{goal.name}</option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Deposit</button>
    </form>
  );
};

export default DepositForm;
