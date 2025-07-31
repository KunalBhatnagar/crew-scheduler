# 🚤 Crew Scheduler (An admin portal)

Crew Scheduler (An admin portal) is a comprehensive web-based scheduling and crew management application tailored specifically for dive operations, facilitating efficient boat and crew scheduling with robust role-based authentication and reporting features.

## 🌟 Features

- **Boat & Crew Scheduling**
  - Easy drag-and-drop scheduling.
  - Schedule visibility: 6 months ahead, 1 year historical.
  - Cycle management with automatic resets and validations.

- **Crew Management**
  - CRUD operations for crew details.
  - Track training, cycles, and availability.
  - Soft-delete to retain historical schedules.

- **Role-based Authentication**
  - JWT secure login for Managers and Co-managers.
  - Granular permissions and protected routes.

- **PDF Schedule Reports**
  - Export custom schedule reports.
  - Professional, print-ready PDF formatting.

## 🛠 Tech Stack

- **Frontend:** React.js, Tailwind CSS, Axios, React Router DOM, date-fns, jsPDF
- **Backend:** Node.js, Express.js, PostgreSQL, JWT
- **Deployment:** Vercel (Frontend), AWS EC2 and RDS (Backend)
- **CI/CD:** GitHub Actions

## ⚙️ Installation

### Frontend

```bash
git clone https://github.com/yourusername/dive-ops-admin-portal.git
cd dive-ops-admin-portal/frontend
npm install
npm run dev
```

## Backend
- cd ../backend
- npm install
- npm start

## Environment Variables
- PORT=4000
- JWT_SECRET=your_secret_here
- MANAGER_USER=manager_username
- MANAGER_PASS=manager_password
- COMANAGER_USER=comanager_username
- COMANAGER_PASS=comanager_password
- DB_HOST=your_db_host
- DB_PORT=5432
- DB_USER=your_db_user
- DB_PASSWORD=your_db_password
- DB_DATABASE=your_db_name

## Deployment 
- Frontend: Hosted on Vercel
- Backend: AWS EC2 with PostgreSQL database on AWS RDS.
- CI/CD: Integrated using GitHub Actions.
