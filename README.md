# Node.js Online Shop Project
This is an online shop web app written in node.js.

<img src="https://github.com/maryamalsadat-tabatabaei/online-shop/assets/87692864/0b48c1d4-5b74-4165-9e5f-965cb7e22ad0" alt="Admin Products Page" width="300" height="200">
<img src="https://github.com/maryamalsadat-tabatabaei/online-shop/assets/87692864/b2e56e5a-ae91-4e85-9cac-85a05046fac9" alt="Shop Products Page" width="300" height="200">
<img src="https://github.com/maryamalsadat-tabatabaei/online-shop/assets/87692864/0af765a2-a0ca-4dbc-9a86-3fbe56461df1" alt="Add Product Page" width="300" height="200">
<img src="https://github.com/maryamalsadat-tabatabaei/online-shop/assets/87692864/72840110-5fe1-401d-8e6c-be3a1fbe1247" alt="Edit Product Page" width="300" height="200">
<img src="https://github.com/maryamalsadat-tabatabaei/online-shop/assets/87692864/09e89c16-fcab-4747-96c3-2ccaec449624" alt="Product Detail Page" width="300" height="200">
<img src="https://github.com/maryamalsadat-tabatabaei/online-shop/assets/87692864/0bd18697-455e-4fa1-bb7b-d5283f587ce1" alt="Cart Page" width="300" height="200">
<img src="https://github.com/maryamalsadat-tabatabaei/online-shop/assets/87692864/154d11bc-9361-4cb5-bd96-2b737aec6f10" alt="Order Page" width="300" height="200">
<img src="https://github.com/maryamalsadat-tabatabaei/online-shop/assets/87692864/ea85ee9c-f4ae-4dde-9a8e-b1c96f36909b" alt="Invioce PDF Download Page" width="300" height="200">
<img src="https://github.com/maryamalsadat-tabatabaei/online-shop/assets/87692864/ea85ee9c-f4ae-4dde-9a8e-b1c96f36909b" alt="Invioce PDF Download Page" width="300" height="200">
<img src="https://github.com/maryamalsadat-tabatabaei/online-shop/assets/87692864/f3c5931c-4a5d-4371-b200-b789d220cab0" alt="Sigup Page" width="300" height="200">
<img src="https://github.com/maryamalsadat-tabatabaei/online-shop/assets/87692864/09e37048-5393-48ab-a003-33bf78bc010c" alt="Login Page" width="300" height="200">

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [API Documentation](#api-documentation)
- [Project Background](#project-background)

## Installation

1. Clone the repository: `git clone https://github.com/maryamalsadat-tabatabaei/online-shop.git`
2. Navigate to the project directory: `cd online-shop`
3. Install dependencies: `npm install`

## Usage

To run the project, use the following command:

<pre><code>npm start</code></pre>

## Configuration

To configure the project, create .env file and add the following variables:

DB_PASSWORD
MONGO_DB_PASSWORD
MONGO_DB_USER
MONGO_DB_COLLECTION
MONGO_DB_PORT
SENDGRID_API_KEY
SRRIPE_API_KEY

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

## Project Background

This project is based on Maximilian Schwarzmüller's tutorial on Udemy Complete Node.js. I have made modifications and I built upon that foundation to extend the project's functionality and address specific requirements. However, the core concept and initial implementation were inspired by the course and the work of the original author.

