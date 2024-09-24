# Content
1. [Personal Library Manager](#personal-library-manager)
2. [Technologies Used](#technologies-used)
3. [Setup Instructions](#setup-instructions)
   - [Prerequisites](#prerequisites)
   - [Clone the Repository](#clone-the-repository)
   - [Install Dependencies](#install-dependencies)
   - [Run the Mock Server](#run-the-mock-server)
   - [Run the Client Application](#run-the-client-application)
4. [Usage](#usage)
5. [API Endpoints](#api-endpoints)

## Personal Library Manager

A React.js application built with TypeScript, SWR, Axios, Formik, and Material UI (MUI) that allows users to manage a personal collection of books. Users can add new books, view the list of existing books, update book details, and delete books.

## Technologies Used

- React.js
- TypeScript
- SWR
- Axios
- Formik
- Material UI (MUI)
- Node.js (for the mock server)

## Setup Instructions

Follow these steps to set up the project on your local machine:

### Prerequisites

- Node.js (v14 or later)
- npm

### Clone the Repository

```bash
git clone https://github.com/yourusername/personal-library-manager.git
cd personal-library-manager
```

### Install Dependencies

Navigate to both the client and server directories and install the dependencies.

For the client application:

```bash
cd personal-library-manager
npm install
```

For the server (mock Node.js server):

```bash
cd books_library_app_mock_server
npm install
```

### Run the Mock Server

Start the server to handle API requests.

```bash
npm books_library_app_mock_server start
```

The server will run on http://localhost:3001.

### Run the Client Application

In a new terminal window, navigate to the client directory and start the React application:

```bash
cd personal-library-manager
npm start
```

The client application will be available at http://localhost:5173

## Usage

1.Open the application in your web browser.
2.Use the form to add a new book with its title, author, genre, and description.
3.View the list of books and perform actions to edit or delete entries.
4.The application automatically updates the list using SWR.

## API Endpoints

The following endpoints are available on the mock server:

GET /books: Retrieve the list of all books.
POST /books: Add a new book.
PUT /books/:id: Update an existing book.
DELETE /books/:id: Delete a book by its ID.