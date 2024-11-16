## Overview

This is the Node.js backend for the Map Visualization and Marker Management system. The backend provides RESTful APIs to manage mill data and PKS dumpsite markers, enabling the frontend to interact with the system.

---

### **System Architecture**

1. **API Design**:
   - Built with Node.js and Express to handle requests for managing markers.
   - Exposes endpoints to retrieve mills data and CRUD operations for dumpsites.

2. **Database**:
   - MongoDB is used for storing dumpsite data.
   - Mill data is static and seeded into the system during setup.

3. **Middleware**:
   - Input validation using Joi.
   - Error handling middleware for consistent responses.

---

## Setup Instructions

### **Prerequisites**

- **Node.js**: Installed on your machine.
- **MongoDB**: Either a local instance or a cloud service like MongoDB Atlas.

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/Eshy10/mills-backend
   cd mills-backend

2. Install dependencies:
   ```bash
   npm install 

3. Start the server:
   ```bash
    npm start

## Assumptions 

1. **Mill Data**:
   - Mill data is static and does not require CRUD operations in this implementation.
 
2. **Validation**:
   - Relies on Joi to validate dumpsite data in POST/PUT requests.


## Endpoints
1. **Mills**:
   - GET /api/mills - Retrieve all mills.
 
2. **Dumpsites**:
   - GET /api/dumpsites - Retrieve all dumpsites.
	- POST /api/dumpsites - Add a new dumpsite.
	- PUT /api/dumpsites/:id - Update a dumpsite.

## Endpoints
- Set up a production database (e.g., MongoDB Atlas).
- Deploy to a Node.js hosting platform like Render, Heroku, or AWS.
- Configure environment variables for production in .env.