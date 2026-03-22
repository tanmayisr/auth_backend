# 🔐 Secure Auth System

A modular and scalable authentication backend built with Node.js, Express, MongoDB, and TypeScript using a clean layered architecture.

---

## 🚀 Features

* User Registration & Login
* Password Hashing (bcrypt)
* JWT Authentication (Access & Refresh Tokens)
* Layered Architecture (Handlers → Logic → Schemas)
* Role-based structure (ready for expansion)
* Input Validation (Zod)
* Email & OTP utilities (ready for integration)

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* TypeScript
* JSON Web Token (JWT)
* bcrypt
* Zod
* Nodemailer

---

## 🧱 Architecture Overview

This project follows a modular layered structure:

```id="arch_block"
Request → Endpoint → Handler → Logic → Schema → Database
```

---

## 📁 Project Structure

```id="structure_block"
src/
├── core/            # Database connection
├── handlers/        # Request handlers
├── logic/           # Business logic
├── schemas/         # Database schemas
├── endpoints/       # API routes
├── guards/          # Auth & role middlewares
├── helpers/         # Utility functions
├── validators/      # Zod validation schemas
├── interfaces/      # TypeScript interfaces
├── main.ts
└── server.ts
```

---



## 🔐 Authentication

* JWT-based authentication
* Access Token (short-lived)
* Refresh Token (long-lived)
* Middleware-based protection (guards)

---



