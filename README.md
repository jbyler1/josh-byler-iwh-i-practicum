# HubSpot Practicum – Custom Object Integration

## Overview
This project is a Node.js + Express application that integrates with HubSpot’s CRM API to manage a custom object ("Magic Cards"). The app retrieves records, displays them in a table, and allows users to create new records via a form.

## Features
- Retrieve custom object records from HubSpot
- Display records using server-side rendering (Pug)
- Create new records via a form submission
- Secure API authentication using environment variables

## Live Data (HubSpot)
View the custom object records directly in HubSpot:
https://app.hubspot.com/contacts/51242020/objects/2-59561671/views/all/list?prefetch=

## Tech Stack
- Node.js
- Express
- Axios
- Pug

## Setup Instructions

1. Clone the repo:
   git clone <your-repo-url>

2. Install dependencies:
   npm install

3. Create a `.env` file:
   PRIVATE_APP_TOKEN=your_token_here

4. Run the app:
   node index.js

5. Open in browser:
   http://localhost:3000

## Routes
- `/` → View all records
- `/update-cobj` → Add a new record