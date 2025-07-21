// src/Components/Api.jsx
const API_URL = 'http://localhost:5000/goals';

export const fetchGoals = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createGoal = async (goal) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(goal)
  });
  return res.json();
};

export const updateGoalAmount = async (id, newAmount) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ savedAmount: newAmount })
  });
  return res.json();
};

export const deleteGoal = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
}
