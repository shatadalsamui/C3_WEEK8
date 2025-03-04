# Course Management System

A full-stack application for managing online courses with separate interfaces for users and administrators.

## Features

### User Features
- User authentication (login/signup)
- Browse available courses
- Purchase courses
- View purchased courses

### Admin Features
- Admin authentication (login/signup)
- Create and manage courses
- Add course content
- Delete courses

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose ODM)
- JSON Web Tokens (JWT) for authentication
- Environment variables using dotenv

## Project Structure
```
.
├── config.js           # Configuration settings
├── db.js              # Database connection
├── index.js           # Main application entry point
├── middleware/        # Custom middleware
│   └── auth.js        # Authentication middleware
├── models/            # Database models
│   ├── User.js
│   ├── Admin.js
│   ├── Course.js
│   └── Purchase.js
└── routes/            # API routes
    ├── user.js
    ├── admin.js
    └── course.js
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example` and update the variables
4. Start the development server:
   ```bash
   npm start
   ```

## API Endpoints

### User Routes
- `POST /api/user/signup` - User registration
- `POST /api/user/login` - User login
- `GET /api/courses` - List all courses
- `POST /api/courses/:courseId/purchase` - Purchase a course
- `GET /api/user/courses` - View purchased courses

### Admin Routes
- `POST /api/admin/signup` - Admin registration
- `POST /api/admin/login` - Admin login
- `POST /api/admin/courses` - Create a course
- `DELETE /api/admin/courses/:courseId` - Delete a course
- `PUT /api/admin/courses/:courseId` - Update course content

## Good to Have (Future Improvements)
- Implement cookies instead of JWT for authentication
- Add rate limiting middleware
- Add frontend using EJS
- Build a React frontend
- Add input validation
- Implement error handling middleware
- Add API documentation with Swagger
- Add unit and integration tests
