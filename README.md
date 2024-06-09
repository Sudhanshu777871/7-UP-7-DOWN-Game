### 7 Up 7 Down Game
Project Description
The 7 Up 7 Down Game is a simple dice betting game built with React for the frontend and Node.js with Express for the backend. Players start with 5000 points and place bets on whether the sum of two dice will be below 7, exactly 7, or above 7. Winning conditions:

* 7 Down: Sum is less than 7.
* Lucky 7: Sum is exactly 7.
* 7 Up: Sum is greater than 7.
Points are updated based on the player's bet and the dice outcome.

### Features

* React Frontend: Mobile-first design with Material UI.
* Node.js Backend: REST API with Express.
* Points Calculation: Real-time update of points based on bet results.
* Axios: For API requests.
### Technologies Used
### Frontend
* React
* Material UI
* Axios
### Backend
* Node.js
* Express

### Setup Instructions
### Prerequisites
* Node.js installed on your machine
* NPM or Yarn package manager
### Installation
1. Clone the Repository
   git clone https://github.com/Sudhanshu777871/7-UP-7-DOWN-Game.git
   cd 7-UP-7-DOWN-Game-master

2. Install Backend Dependencies
Navigate to the backend directory and install the required dependencies.
  cd backend
  npm install

3. Install Frontend Dependencies
Navigate to the frontend directory and install the required dependencies.
  cd ../frontend
  npm install

### Running the Project
1. Start the Backend Server
Navigate to the backend directory and start the server.

cd backend
node server.js OR nodemon server.js
The backend server will run on http://localhost:5000

2. Start the Frontend
Navigate to the frontend directory and start the React development server.
  cd ../frontend
  npm run dev

The frontend will run on http://localhost:3000

### Project Structure

7-up-7-down-game/
├── backend/
│   ├── node_modules/
│   ├── server.js
│   └── package.json
└── frontend/
    ├── node_modules/
    ├── public/
    ├── src/
    │   ├── App.css
    │   ├── App.js
    │   ├── index.js
    │   └── ...
    ├── package.json
    └── ...
### API Endpoints

POST /api/roll
Rolls two dice and returns the results.

* Response:
  {
  "dice1": 3,
  "dice2": 4,
  "total": 7
}

POST /api/update-points
Updates player points based on the bet and dice results.

* Request:
{
  "bet": 200,
  "choice": "7up",
  "total": 8
}

* Response:
  {
  "points": 5200
}

