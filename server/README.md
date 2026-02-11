# 🏥 Smart Hospital Management System – Backend

## 📌 Project Overview

The Smart Hospital Management System is a web-based backend application developed using **Node.js, Express.js, and MongoDB**.

This system automates and manages core hospital operations such as:

- User Management (Admin, Doctor, Patient)
- Ward & Bed Tracking
- Appointment Scheduling
- Patient Admission & Discharge
- Medical Records Management
- Billing & Payment Tracking

The objective of this project is to improve hospital workflow efficiency, reduce manual errors, and provide centralized digital management.

---

## 🚀 Tech Stack

- **Node.js** – Runtime Environment  
- **Express.js** – Backend Framework  
- **MongoDB** – NoSQL Database  
- **Mongoose** – MongoDB ODM  
- **JWT (jsonwebtoken)** – Authentication  
- **bcryptjs** – Password Hashing  
- **dotenv** – Environment Configuration  
- **Morgan** – Request Logging  
- **CORS** – Cross-Origin Handling  

---


## 🔐 Authentication & Authorization

- JWT-Based Authentication
- Role-Based Access Control
- Available Roles:
  - ADMIN
  - DOCTOR
  - PATIENT
- Protected Routes Using Middleware

---

## 🏥 Core Modules

### 1️⃣ User Management
- Register / Login
- Get Users by Role
- Update Profile
- Change Password
- Activate / Deactivate User (Soft Delete)

---

### 2️⃣ Ward Management
- Create Wards
- View Ward Details
- Track Total Beds per Ward

---

### 3️⃣ Bed Management
- Create Beds
- Track Bed Status:
  - AVAILABLE
  - OCCUPIED
  - MAINTENANCE
- Assign Beds to Patients During Admission

---

### 4️⃣ Appointment System
- Book Appointments
- Doctor-Patient Scheduling
- Appointment Status Tracking

---

### 5️⃣ Admission & Discharge
- Admit Patient
- Automatically Update Bed Status
- Discharge Patient
- Release Bed on Discharge

---

### 6️⃣ Medical Records
- Store Diagnosis
- Add Prescriptions
- Upload Lab Reports
- Maintain Patient Medical History

---

### 7️⃣ Billing & Payment
- Generate Hospital Bills
- Add Service Charges
- Calculate Total Amount
- Track Payment Status:
  - UNPAID
  - PARTIAL
  - PAID
- Record Payment Transactions

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development
```
---


## 🎯 Project Highlights

- Clean Modular Architecture
- Separation of Concerns
- Role-Based Security
- Scalable Backend Structure
- Real-World Hospital Workflow Implementation

---

## 📚 Academic Purpose

This project is developed as a Final Year Major Project for Computer Engineering to demonstrate:

- Full stack Development
- Database Design
- RESTful API Architecture
- Authentication & Authorization
- Real-World System Modeling

---

## 👨‍💻 Author

Developed as part of Final Year Engineering Project By Anuj Pal and Krunal Lodha.

---
