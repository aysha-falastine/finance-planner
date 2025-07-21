// components/GoalForm.jsx
import React, { useState } from 'react';
import { createGoal } from '../Components/Api';

const initialForm = {
  name: '',
  targetAmount: '',
  savedAmount: 0,
  category: '',
  deadline: ''
};

const GoalForm = ({ onGoalCreated }) => {
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newGoal = await createGoal({ ...formData, createdAt: new Date().toISOString() });
    onGoalCreated(prev => [...prev, newGoal]);
    setFormData(initialForm);
  };

  return (
    <form className="goal-form" onSubmit={handleSubmit}>
      <input name="name" placeholder="Goal name" value={formData.name} onChange={handleChange} required />
      <input name="targetAmount" type="number" placeholder="Target amount" value={formData.targetAmount} onChange={handleChange} required />
      <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
      <input name="deadline" type="date" value={formData.deadline} onChange={handleChange} required />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default GoalForm;
