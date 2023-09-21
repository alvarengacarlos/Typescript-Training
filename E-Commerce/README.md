# E-Commerce
![](./e-commerce.jpg)
[Photo by Nataliya Vaitkevich](https://www.pexels.com/photo/a-smartphone-and-credit-cards-in-a-miniature-shopping-cart-6214475/)

## Description
Classic MVC architecture built with ExpressJS framework and Prisma ORM to simulate a very simple e-commerce.

## Routes
| Method | Route | Body |
| :--- | :--- | :--- |
| POST | /categories | {name: string} |
| POST | /products | {name: string, price: number, description: string, categoryId: string} |

