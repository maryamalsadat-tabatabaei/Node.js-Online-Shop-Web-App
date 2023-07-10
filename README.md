# Node.js Online Shop Web App
This is an online shop web application built with Node.js. It provides a platform for users to browse and purchase products. The application uses Mongoose for data models, Express for routing and handling requests and responses, and EJS as the view engine. It follows the Model-View-Controller (MVC) architectural pattern.

<img src="https://github.com/maryamalsadat-tabatabaei/online-shop/assets/87692864/0b48c1d4-5b74-4165-9e5f-965cb7e22ad0" alt="Admin Products Page" width="30%" height="auto">
<img src="https://github.com/maryamalsadat-tabatabaei/online-shop/assets/87692864/b2e56e5a-ae91-4e85-9cac-85a05046fac9" alt="Shop Products Page" width="30%" height="auto">
<img src="https://github.com/maryamalsadat-tabatabaei/online-shop/assets/87692864/0af765a2-a0ca-4dbc-9a86-3fbe56461df1" alt="Add Product Page" width="30%" height="auto">
<img src="https://github.com/maryamalsadat-tabatabaei/online-shop/assets/87692864/72840110-5fe1-401d-8e6c-be3a1fbe1247" alt="Edit Product Page" width="30%" height="auto">
<img src="https://github.com/maryamalsadat-tabatabaei/online-shop/assets/87692864/09e89c16-fcab-4747-96c3-2ccaec449624" alt="Product Detail Page" width="30%" height="auto">
<img src="https://github.com/maryamalsadat-tabatabaei/online-shop/assets/87692864/0bd18697-455e-4fa1-bb7b-d5283f587ce1" alt="Cart Page" width="30%" height="auto">
<img src="https://github.com/maryamalsadat-tabatabaei/online-shop/assets/87692864/154d11bc-9361-4cb5-bd96-2b737aec6f10" alt="Order Page" width="30%" height="auto">
<img src="https://github.com/maryamalsadat-tabatabaei/online-shop/assets/87692864/ea85ee9c-f4ae-4dde-9a8e-b1c96f36909b" alt="Invioce PDF Download Page" width="30%" height="auto">
<img src="https://github.com/maryamalsadat-tabatabaei/online-shop/assets/87692864/ea85ee9c-f4ae-4dde-9a8e-b1c96f36909b" alt="Invioce PDF Download Page" width="30%" height="auto">
<img src="https://github.com/maryamalsadat-tabatabaei/online-shop/assets/87692864/f3c5931c-4a5d-4371-b200-b789d220cab0" alt="Sigup Page" width="30%" height="auto">
<img src="https://github.com/maryamalsadat-tabatabaei/online-shop/assets/87692864/09e37048-5393-48ab-a003-33bf78bc010c" alt="Login Page" width="30%" height="auto">

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Features](#features)
- [API Documentation](#api-documentation)
- [Dependencies](#dependencies)
- [Project Background](#project-background)

## Installation

1. Clone the repository: `git clone https://github.com/maryamalsadat-tabatabaei/Node.js-Online-Shop-Web-App.git`
2. Navigate to the project directory: `cd Node.js-Online-Shop-Web-App`
3. Install dependencies: `npm install`
4. Start the application: `npm start`
5. Open your browser and visit http://localhost:3000

## Configuration

To configure the project, create .env file and add the following variables:

- DB_PASSWORD
- MONGO_DB_PASSWORD
- MONGO_DB_USER
- MONGO_DB_COLLECTION
- MONGO_DB_PORT
- SENDGRID_API_KEY
- SRRIPE_API_KEY

## Features
- The online shop web app provides the following features:

  - User Authentication: Users can log in to their accounts to access personalized features.
  - Product Browsing: Users can view all products available in the shop.
  - Product Details: Users can access detailed information about each product.
  - Cart Functionality: Users can add products to their cart for later purchase.
  - Ordering: Users can place orders for the products in their cart and receive an invoice.

- Admin users have additional capabilities:
  - Product Management: Admins can add, edit, and delete products from the shop.

## API Documentation

`GET /admin/products`: Get all the admin products.<br>
`GET /admin/add-product`: Get the add product page.<br>
`POST /admin/add-product`: Save a product.<br>
`GET /admin/edit-product/:productId`: Retrieve the product.<br>
`POST /admin/edit-product`: Update the product.<br>
`POST /admin/delete-product`: Delete product.<br>
`GET /product-list`: Get all the products.<br>
`GET /`: Get all the products.<br>
`GET /product-list/:productId`: Get the product details.<br>
`GET /cart`: Get the cart products.<br>
`POST /cart`: Delete the products from the card and put them in the order list.<br>
`POSt /cart-delete-item`: Delete the product from the cart.<br>
`GET /orders`: Get the ordered products.<br>
`POST /create-order`: Order the products.<br>
`GET /checkout`: Checkout the product order.<br>

## Dependencies
The following dependencies are used in this application:

- `express`: Fast, unopinionated, minimalist web framework for Node.js.
- `mongoose`: Elegant MongoDB object modeling for Node.js.
- `ejs`: Embedded JavaScript templates for rendering views.
- `body-parser`: Node.js body parsing middleware.

## Project Background

This project is based on Maximilian Schwarzmüller's tutorial on Udemy Complete Node.js. I have made modifications and I built upon that foundation to extend the project's functionality and address specific requirements. However, the core concept and initial implementation were inspired by the course and the work of the original author.

