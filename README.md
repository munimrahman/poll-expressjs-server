# VanishVote Server

VanishVote Server is a backend application for managing polls and votes. It provides APIs to create polls, cast votes, and add reactions to polls.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [API Documentation](#api-documentation)
- [Error Handling](#error-handling)
- [Database Schema](#database-schema)
- [Contributing](#contributing)

## 🚀 Prerequisites

- Node.js
- MongoDB

## ⚙️ Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd vanishvote-server
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:
   Create a `.env` file in the root directory:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

5. Start the server:

   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

## 📚 API Documentation

Base URL: `/api/v1`

### 🗳️ Polls API

#### Create Poll

- **Method:** `POST`
- **Endpoint:** `/polls/create`
- **Request Body:**
  ```json
  {
    "question": "Your poll question",
    "options": [{ "text": "Option 1" }, { "text": "Option 2" }],
    "type": "multiple-choice",
    "hideResultsUntilEnd": true,
    "duration": 24
  }
  ```
- **Success Response (201):**
  ```json
  {
    "success": true,
    "pollId": "poll_id"
  }
  ```

#### Get Poll Details

- **Method:** `GET`
- **Endpoint:** `/polls/:pollId`
- **Success Response (200):**
  ```json
  {
    "question": "Your poll question",
    "options": [
      {
        "text": "Option 1",
        "votes": 0
      }
    ],
    "type": "multiple-choice",
    "hideResultsUntilEnd": false,
    "reactions": {
      "fire": 0,
      "like": 0
    },
    "expiresAt": "timestamp"
  }
  ```

### 🗽 Votes API

#### Cast Vote

- **Method:** `POST`
- **Endpoint:** `/votes/vote`
- **Request Body:**
  ```json
  {
    "pollId": "poll_id",
    "optionIndex": 0
  }
  ```
- **Success Response (200):**
  ```json
  {
    "success": true,
    "message": "Vote recorded"
  }
  ```

#### Add Reaction

- **Method:** `POST`
- **Endpoint:** `/votes/reaction`
- **Request Body:**
  ```json
  {
    "pollId": "poll_id",
    "reactionType": "like"
  }
  ```
- **Success Response (200):**
  ```json
  {
    "success": true,
    "message": "Reaction added"
  }
  ```

## ⚠️ Error Handling

All errors follow this format:

```json
{
  "message": "Error description"
}
```

**Common Status Codes:**

- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `500` - Internal Server Error

## 🗄️ Database Schema

### Poll Schema

```javascript
{
  question: String,
  options: [{
    text: String,
    votes: Number
  }],
  type: String,
  expiresAt: Date,
  hideResultsUntilEnd: Boolean,
  reactions: {
    fire: Number,
    like: Number
  },
  timestamps: true
}
```
