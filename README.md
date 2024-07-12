# User Management System

## Description

The User Management System is a web application that allows administrators to manage user data. It includes features such as user creation, searching, listing, and filtering. The frontend is built using React and Vite, and it leverages Ant Design for a consistent and responsive UI. Axios is used for making HTTP requests to the backend API.

## Features

-   **User Listing**: Display a list of users with pagination.
-   **User Searching**: Search users based on various criteria like name and email.
-   **User Creation**: Add new users through a form.
-   **User Filtering**: Filter users based on various criteria.
-   **Responsive Design**: The UI is responsive and works well on different screen sizes.

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/user-management-system.git
    cd user-management-system
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm run dev
    ```

## Usage

1. **Run the application**:

    ```bash
    npm run dev
    ```

2. **Open your browser** and navigate to `http://localhost:5173`.

3. **Interact with the application** to manage users.

## API Endpoints

-   **Create User**: `POST /user/register`
-   **Get All Users**: `GET /user`
