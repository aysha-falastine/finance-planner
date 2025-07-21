// components/GoalCard.jsx
import React from 'react';

const GoalCard = ({ goal }) => {
  const progress = ((goal.savedAmount / goal.targetAmount) * 100).toFixed(1);
  const isComplete = goal.savedAmount >= goal.targetAmount;
  const deadlineDate = new Date(goal.deadline).toLocaleDateString();

  return (
    <div className={`goal-card ${isComplete ? 'completed' : ''}`}>
      <h3>{goal.name}</h3>
      <p>Saved: ${goal.savedAmount} / ${goal.targetAmount}</p>
      <progress value={goal.savedAmount} max={goal.targetAmount}></progress>
      <p>{progress}% complete</p>
      <p>Category: {goal.category}</p>
      <p>Deadline: {deadlineDate}</p>
    </div>
  );
};

export default GoalCard;
