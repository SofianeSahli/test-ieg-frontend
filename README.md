# Sample Blog App

## Introduction
This project is an **Angular 20** application built as part of a **technical assessment**.  
It implements:
- **NgRx Store** for state management
- **NgRx Effects** for side effect handling
- **NgRx Entity** for efficient entity list management

It also integrates:
- **ngx-translate** for multilingual support
- **ngx-formly** for dynamic and reusable form generation
- **Session-based authentication** for secure user sessions
- **Server-Side Rendering (SSR)** with **Express** for SEO and performance optimization

The architecture is based on **standalone components** for better modularity and scalability, making the project adaptable for **microservice-oriented backends**.

---

## Prerequisites
- **Node.js** (recommended: v18+)
- **npm** (recommended: v9+)
- Internet connection to install dependencies

---

## Installation & Run

### 1. Clone the repository
```bash
git clone <repository-url>
```
### 2. Install dependencies
Use the --legacy-peer-deps flag to avoid peer dependency conflicts:
``` bash
npm install --legacy-peer-deps
```
### 3. Start the development server
```bash
npm run ng serve
```
The application will be available at: http://localhost:4200

