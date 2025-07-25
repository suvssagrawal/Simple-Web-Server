# Simple Node.js HTTP Server

This is a basic HTTP server built using Node.js that serves static HTML and CSS files without using any external frameworks like Express.

## Features

- Serves `home.html` for `/` or `/home`
- Serves `about.html` for `/about`
- Serves `contact.html` for `/contact`
- Serves `style.css` for styling
- Serves `404.html` for all other undefined routes
- Uses built-in `http`, `fs`, and `path` modules

## Project Structure

your-project-folder/
│
├── server.js         # Main Node.js server file
├── home.html         # Home page
├── about.html        # About page
├── contact.html      # Contact page
├── 404.html          # Custom 404 error page
└── style.css         # CSS styles used by the HTML pages

## Getting Started

### 1. Prerequisites

- Install [Node.js](https://nodejs.org/) on your system.

### 2. Run the Server

```bash
node server.js
