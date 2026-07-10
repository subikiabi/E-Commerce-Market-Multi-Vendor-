# E-Commerce Market (Multi-Vendor)

## Project Overview
E-Commerce Market (Multi-Vendor) is a full-stack web application that allows multiple vendors to sell products on a single platform. Customers can browse products, add items to the cart, and place orders. Vendors can manage their products, while the admin can manage users, vendors, products, and orders.

## Features
- User Registration and Login
- Vendor Registration and Dashboard
- Product Management (Add, Edit, Delete)
- Product Search
- Shopping Cart
- Order Management
- Admin Dashboard
- Responsive User Interface

## Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript
- Bootstrap 5

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Authentication
- JWT (JSON Web Token)
- bcrypt.js

## Project Structure

```
E-Commerce-Market/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── vendor.html
│   ├── cart.html
│   ├── orders.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

## Installation

1. Clone the repository.
2. Open the project in Visual Studio Code.
3. Open the backend folder.
4. Install dependencies:

```bash
npm install
```

5. Start MongoDB.
6. Run the server:

```bash
node server.js
```

or

```bash
npm run dev
```

7. Open `frontend/index.html` using Live Server.

## Future Enhancements
- Payment Gateway Integration
- Wishlist
- Product Reviews and Ratings
- Order Tracking
- Email Notifications
- Vendor Analytics Dashboard

## Author

**Abinaya S**

## License

This project is developed for educational and internship purposes.
