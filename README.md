# E-Commerce Website

A full-stack e-commerce website built with **React**, **Vite**, **Node.js**, and **MongoDB**.

## 📂 Project Structure
The project is organized into three main directories:

```
E-Commerce-Website/
│── admin/        # Administration dashboard for managing products, orders, and users
│── backend/      # Node.js server with MongoDB integration
│── frontend/     # React-based customer-facing storefront
│── README.md     # Documentation
│── package.json  # Project dependencies
│── .gitignore    # Files to ignore in Git
```

### 📂 Folder Structure

#### 🛠️ **Admin Dashboard** (admin/)
```
admin/
│── src/
│   │── components/       # Reusable UI components
│   │── pages/            # Dashboard pages
│   │── hooks/            # Custom hooks
│   │── context/          # State management
│   │── App.js            # Main app component
│   └── index.js          # Entry point
│── public/               # Static assets
│── package.json          # Dependencies
│── .env                  # Environment variables
```

#### 🖥️ **Backend Server** (backend/)
```
backend/
│── models/               # Database schemas
│── controllers/          # Business logic
│── routes/               # API endpoints
│── middleware/           # Authentication & file handling
│── config/               # Database & cloud storage configuration
│── server.js             # Entry point
│── package.json          # Dependencies
│── .env                  # Environment variables
```

#### 🛒 **Frontend Storefront** (frontend/)
```
frontend/
│── src/
│   │── components/       # Reusable UI components
│   │── pages/            # Website pages
│   │── hooks/            # Custom hooks
│   │── context/          # Global state (ShopContext)
│   │── App.js            # Main app component
│   └── index.js          # Entry point
│── public/               # Static assets
│── package.json          # Dependencies
│── .env                  # Environment variables
```

---

## 🛠️ Technology Stack

### 🌐 Frontend
- **React** - JavaScript library for building user interfaces
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Context API** - For state management (ShopContext)

### 🖥️ Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Cloudinary** - Cloud-based image management

---

## 🚀 Features

### 🛍️ Customer Facing (Frontend)
- Home page with featured products
- Product listings and individual product pages
- User authentication (login/signup)
- Shopping cart functionality
- Order placement and history
- Newsletter subscription
- Search functionality
- Responsive design

### 🔧 Admin Dashboard
- Product management (add, edit, delete)
- Order management
- User management
- Analytics (implied)

---

## ⚙️ Setup and Installation

### 🔴 Prerequisites
- **Node.js** (v14 or higher recommended)
- **npm** or **yarn**
- **MongoDB** account
- **Cloudinary** account (for image storage)

### 📌 Installation Steps

#### 1️⃣ Clone the repository
```sh
git clone https://github.com/alankrit98/e-commerce-website.git
cd e-commerce-website
```

#### 2️⃣ Setup environment variables
Create `.env` files in both **backend** and **frontend** directories based on the example templates.

#### 3️⃣ Install dependencies and start backend
```sh
cd backend
npm install
npm start
```

#### 4️⃣ Install dependencies and start frontend
```sh
cd ../frontend
npm install
npm run dev
```

#### 5️⃣ Install dependencies and start admin dashboard
```sh
cd ../admin
npm install
npm run dev
```

---

## 🔍 Frontend Components

### 🧩 **Key Components**
- `BestSeller.jsx` - Displays best-selling products
- `CartTotal.jsx` - Shopping cart summary and total
- `Footer.jsx` - Website footer
- `Hero.jsx` - Homepage hero section
- `LatestCollection.jsx` - Showcases newest products
- `Navbar.jsx` - Navigation header
- `NewsletterBox.jsx` - Email subscription component
- `OurPolicy.jsx` - Store policies information
- `ProductItem.jsx` - Individual product card
- `RelatedProducts.jsx` - Similar product suggestions
- `SearchBar.jsx` - Product search functionality
- `Title.jsx` - Section headings

### 📄 **Pages**
- `Home.jsx` - Landing page
- `Product.jsx` - Individual product details
- `Collection.jsx` - Product category listings
- `Cart.jsx` - Shopping cart
- `Login.jsx` - User authentication
- `Orders.jsx` - Order history
- `PlaceOrder.jsx` - Checkout process
- `About.jsx` - Company information
- `Contact.jsx` - Contact information

---

## 📂 Backend Architecture
The backend follows an **MVC architecture**:

- **Models**: Database schemas for products and users
- **Controllers**: Business logic for handling requests
- **Routes**: API endpoints for products and users
- **Middleware**: Authentication and file upload handling
- **Config**: Database and cloud storage configuration

---

## 📜 License
See the [MIT LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

🔥 Happy Coding! 🚀

