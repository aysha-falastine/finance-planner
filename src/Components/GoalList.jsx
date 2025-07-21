// components/GoalList.jsx
import React from 'react';
import GoalCard from './GoalCard';

const GoalList = ({ goals }) => {
  if (goals.length === 0) {
    return (
      <div className="goal-list empty">
        <p>No goals yet</p>
        <button onClick={() => alert('Show Goal Form')}>+ Create Your First Goal</button>
      </div>
    );
  }

  return (
    <div className="goal-list">
      {goals.map(goal => (
        <GoalCard key={goal.id} goal={goal} />
      ))}
    </div>
  );
};

export default GoalList;
