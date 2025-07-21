// components/Dashboard.jsx
import React from 'react';

const Dashboard = ({ goals }) => {
  const total = goals.length;
  const saved = goals.reduce((sum, goal) => sum + goal.savedAmount, 0);
  const target = goals.reduce((sum, goal) => sum + goal.targetAmount, 0);
  const completed = goals.filter(goal => goal.savedAmount >= goal.targetAmount).length;

  const today = new Date();
  let urgentCount = 0;
  let overdueCount = 0;

  goals.forEach(goal => {
    const deadline = new Date(goal.deadline);
    const remainingDays = (deadline - today) / (1000 * 60 * 60 * 24);

    if (remainingDays <= 30 && remainingDays > 0 && goal.savedAmount < goal.targetAmount) {
      urgentCount++;
    }

    if (remainingDays <= 0 && goal.savedAmount < goal.targetAmount) {
      overdueCount++;
    }
  });

  return (
    <div className="dashboard">
      <div className="stat-card">
        <h3>{total}</h3>
        <p>Active savings goals</p>
      </div>
      <div className="stat-card">
        <h3>${saved}</h3>
        <p>{((saved / target) * 100 || 0).toFixed(1)}% of total target</p>
      </div>
      <div className="stat-card">
        <h3>{completed}</h3>
        <p>{completed}/{total} goals achieved</p>
      </div>
      <div className="stat-card">
        <h3>{urgentCount}</h3>
        <p>{urgentCount} urgent, {overdueCount} overdue</p>
      </div>
    </div>
  );
};

export default Dashboard;
