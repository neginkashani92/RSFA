# RSFA (Le Repos Saint-François)

## Project Overview

This project is an internal administrative panel for RSFA (Le Repos Saint-François).
It is designed to help the super administrator manage system activities and operations.
The panel includes features such as:

- **Dashboard and system overview**
- **Client management**
- **User and role handling**
- **Settings and configuration**
- **Secure access using authentication and protected routes**

The system is built as a modern web application with a focus on:

- **Clean UI**
- **Maintainable component structure**
- **Scalable architecture**
- **Secure API communication**

## Tech Stack

The project relies on a robust set of modern web technologies:

- **Framework**: React (powered by Vite)
- **Routing**: React Router DOM
- **UI & Styling**: Tailwind CSS, Radix UI, Lucide React, clsx, tailwind-merge
- **Form Handling**: React Hook Form, Yup
- **Data Visualization**: Recharts
- **HTTP Client**: Axios

## Installation

Follow these steps to set up the project locally.

### 1. Clone the repository

```bash
git clone <repository_url>
cd RSFA
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in the terminal).

### 4. Build for production

To create a production-ready build:

```bash
npm run build
```

## Project Structure

Here is an overview of the main folders and files in the project:

- **`src/components/`** → Reusable UI and logic components.
- **`src/pages/`** → Main application pages (Dashboard, Client, Settings, etc.).
- **`src/lib/`** → Utilities such as API configuration and helper functions.
- **`src/assets/`** → Static files (images, icons, etc.).
- **`src/routes.jsx`** → Application routing configuration.
