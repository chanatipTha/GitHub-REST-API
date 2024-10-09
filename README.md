#JavaScript Project: GitHub User Search
This project is a JavaScript-based web application built to search GitHub users by their username and display their profile information along with their repositories.

#Purpose
This project was developed for an interview with Meyer. It demonstrates the use of the GitHub REST API, React for the frontend, and provides a simple interface for searching GitHub users and displaying detailed information about their repositories.

#Features
-Search GitHub users by their username.
-Display user's GitHub profile information, including:
  -Avatar
  -Username
  -Bio
  -GitHub profile link
-Display a list of repositories belonging to the user.
-Download a specific repository as a zip file.

#Technologies Used
-JavaScript (ES6): For the main logic and functionality.
-React.js: A JavaScript library for building user interfaces.
-React Router: For navigation between pages.
-GitHub REST API: To fetch user data and repositories from GitHub.
-CSS: For styling the components.

#Installation and Setup Instructions
1.Clone the repository: Clone this repository to your local machine using the following command:
git clone https://github.com/chanatipTha/GitHub-REST-API.git

2.Navigate to the project directory:
cd GitHub-REST-API

3.Install dependencies: Use npm to install the necessary dependencies for this project:
npm install

4.Run the application: To start the development server, use the following command:
npm start

This will open the application in your default browser at http://localhost:3000.

#Usage
1.Enter a GitHub username in the search bar.
2.Click the "Search" button to fetch the user's profile and repositories.
3.View the user information and repository details on the next page.
4.Optionally, click the "Download" button next to any repository to download it as a ZIP file.

#Project Structure
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── UserSearch.jsx
│   │   └── UserInfo.jsx
│   ├── App.js
│   ├── index.js
│   └── UserSearch.css
├── .gitignore
├── package.json
├── README.md
└── package-lock.json
-UserSearch.jsx: The main component for searching GitHub users.
-UserInfo.jsx: The component for displaying user profile and repositories.
-Header.jsx: Navigation header of the application.
