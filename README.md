---

# ASSETHub 

ASSETHUB is an innovative web application designed to foster connections among professionals, students, and enthusiasts in STEM (Science, Technology, Engineering, and Mathematics) fields. Built using React, it enables users to network, collaborate, share resources, and participate in STEM-related events.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User Profiles: Create and manage personal or professional profiles, highlighting your expertise and interests.
- Networking: Connect with peers, mentors, and professionals from various STEM disciplines.
- Resource Sharing: Share and access a library of resources, including articles, papers, and learning materials.
- Project Collaboration: Collaborate on STEM-related projects and work in teams to solve real-world problems.
- Event Management: Organize, promote, and participate in STEM-related events such as workshops, webinars, and hackathons.
- Mentorship Opportunities: Connect students or early-career professionals with mentors in specific fields.
- Dynamic Newsfeed: Stay updated with the latest developments in STEM through personalized news and articles.

## Technology Stack

- Frontend: 
  - React (JavaScript)
  - Axios for API calls
  - CSS for styling
- Backend:
  - Node.js (Express)
  - Sequelize (ORM) for database management
  - MySQL for relational data storage
- Deployment:
  - Ubuntu server for backend hosting
  - NGINX for reverse proxy
  - GitHub for version control
  - Docker for containerized deployment (optional)
- Security: 
  - JWT-based authentication
  - SSL/TLS encryption (for production)

## Installation

To get started with STEMProlinks, follow the steps below:

### Prerequisites

Before proceeding, ensure you have the following installed:

- Node.js: [Download Node.js](https://nodejs.org/) for your system.
- npm (Node Package Manager) or **Yarn**: npm comes with Node.js; alternatively, you can use Yarn [here](https://yarnpkg.com/).
- MySQL: Install and configure [MySQL](https://www.mysql.com/) for the backend database.
- Git: Make sure Git is installed for version control. [Download Git](https://git-scm.com/).

### Clone the Repository

To clone the repository, run the following command:

```bash
git clone https://github.com/Tausi95/STEMProlinks.git
cd STEMProlinks
```

### Backend Configuration

1. MySQL Database: Set up a MySQL database.
   - Create a `.env` file at the root of the project and add your MySQL database credentials as follows:

   ```bash
   DB_NAME=stemprolinks_db
   DB_USER=root
   DB_PASS=yourpassword
   DB_HOST=localhost
   DB_PORT=3306
   ```

2. Install Backend Dependencies:

```bash
cd backend
npm install
```

3. Run Migrations

```bash
npx sequelize db:migrate
```

### Frontend Configuration

1. Install Frontend Dependencies:

```bash
cd ../frontend
npm install
```

2. Environment Configuration:
   - Create a `.env` file in the frontend directory with the following values:

   ```bash
   REACT_APP_API_URL=http://localhost:5000
   ```

### Running the Application

1.Start the Backend:

```bash
cd backend
npm start
```

By default, the backend runs on `http://localhost:5000`.

2.*Start the Frontend:

```bash
cd ../frontend
npm start
```

The frontend will be accessible at `http://localhost:3000`.

### Build for Production

For production deployment, create an optimized build of the application:

```bash
npm run build
```

This will create a build folder with optimized assets for deployment.

## Usage

Once the application is running, users can:

1. Create an Account: Register by providing personal or professional details.
2. Explore Profiles: Browse and connect with other STEM professionals and students.
3. Join Events: Participate in events, webinars, and workshops listed on the platform.
4. Collaborate: Start or join projects to work on innovative solutions in STEM fields.
5. Access Resources: Utilize a variety of STEM-related resources shared by the community.

## Contributing

We welcome contributions! If you'd like to help improve the platform, here’s how you can get started:

### Contribution Workflow

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of feature or fix"
   ```
4. Push to your forked repository:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request to the main repository.

Make sure to follow the coding guidelines and include relevant tests for new features.

### Reporting Issues

If you encounter any issues or bugs, feel free to [open an issue](https://github.com/Tausi95/STEMProlinks/issues) on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for full details.

## Contact

For any inquiries or support, feel free to reach out:

- Email: [tausipro@gmail.com](mailto:tausipro@gmail.com)
- GitHub: [Tausi95](https://github.com/Tausi95)

---
