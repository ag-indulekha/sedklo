# Cloud Cost Estimator

A **full-stack web application** that helps users estimate cloud resource costs for computing, storage, and databases. Built using **React** for the frontend and **Spring Boot** for the backend.

---

## Features

- Add multiple cloud resources (EC2, RDS, Storage, etc.) and their configurations.
- Dynamically calculate **unit prices and total costs** for all resources.
- Smooth navigation between resources with **previous/next buttons** and **dot indicators**.
- Animated input cards using **Framer Motion**.
- Responsive and clean **light/dark theme options**.
- Billing-style result section with per-resource and total cost breakdown.

---

## Technologies Used

- **Frontend:** React, Tailwind CSS, Framer Motion, React Icons
- **Backend:** Java, Spring Boot
- **Database:** Optional (for persistent pricing data)
- **Other:** UUID for unique resource IDs, Fetch API for frontend-backend communication

---

## Screenshots

![Form Input](screenshots/inputForm.png)  
*Resource input form with navigation*  

![Result Section](screenshots/result.png)  
*Pricing summary in a bill format*

---

## Installation

### Backend
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd backend
