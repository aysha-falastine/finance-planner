# Finance Planner

A full-stack goal management dashboard that helps users track multiple savings goals, deposit funds, and visualize financial progress — built with **React** and powered by **JSON Server**.

---

## Features

-  **Create, Update, Delete Goals**
  - Add financial goals (e.g. Travel, Emergency Fund)
  - Set target amount, deadline, category
-  **Real-Time Progress Tracking**
  - View how much is saved
  - See remaining amount and visual progress bar
-  **Make Deposits**
  - Allocate money to any goal
  - Automatic progress updates
-  **Smart Overview**
  - Total goals and money saved
  - Completed goals, urgent goals, overdue warnings
-  **Persistent Backend**
  - All data stored and served via `json-server`

---

##  Tech Stack

- **Frontend**: React + Vite
- **Backend**: json-server (mock REST API)
- **Deployment**: Render

---

##  Project Structure
```smart-goal-planner/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── Dashboard.jsx
│ │ ├── GoalList.jsx
│ │ ├── GoalCard.jsx
│ │ ├── GoalForm.jsx
│ │ └── DepositForm.jsx
│ ├── services/
│ │ └── api.js
│ ├── App.jsx
│ ├── App.css
│ ├── index.css
│ └── main.jsx
├── db.json (for json-server)```

📌 Future Improvements

    Goal editing modal

    Auth system for multiple users

    Mobile-responsive layout

    Notification system for urgent goals

    License
    author
    Asha Mohamed.

