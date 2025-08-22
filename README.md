# Everyday Finds

**Discover Your Natural Glow**

Everyday Finds is a modern, responsive e-commerce platform built with Next.js, specializing in a curated selection of organic products. The website is designed to provide a seamless and intuitive shopping experience, from browsing the catalog to managing products through an administrative dashboard.

### Key Features

- **Product Catalog**: Browse a comprehensive list of products, displayed in a clean, consistent card layout.
- **Detailed Product Pages**: View high-resolution images and detailed information for each item.
- **User Authentication**: Securely sign in using credentials, or with Google and GitHub, powered by Next-Auth.
- **Dynamic Data Fetching**: Data is fetched from a MongoDB database and rendered on the server for optimal performance and SEO.
- **Product Management**: An admin dashboard allows for adding new products to the catalog.

### Technologies Used

- **Frontend:**
  - **Next.js**: A React framework for building fast, server-rendered applications.
  - **Tailwind CSS**: A utility-first CSS framework for rapid and custom styling.
  - **Motion**: A lightweight animation library for creating smooth, interactive UI effects.
- **Backend:**
  - **MongoDB Atlas**: A cloud-based NoSQL database for flexible data storage.
  - **MongoDB Node.js Driver**: For direct and efficient interaction with the database.
  - **Next-Auth**: A secure and flexible authentication solution.

### Getting Started

To get the project up and running locally, follow these steps.

#### **Prerequisites**

You will need Node.js and npm/yarn installed.

#### **Installation**

1. Clone the repository:

   ```
   git clone https://github.com/ShaharearSabbir/everyday-finds
   cd everyday-finds
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Run the development server:

   ```
   npm run dev
   ```

### Environment Variables

To run this project, you will need to add the following environment variables to your `.env.local` file:

- `MONGODB_URI`: Your MongoDB connection string.
- `NEXTAUTH_SECRET`: A long, random string to sign and encrypt tokens.
- `NEXTAUTH_URL`: The URL of your app (e.g., `http://localhost:3000`).
- `GITHUB_ID`: Your GitHub OAuth App ID.
- `GITHUB_SECRET`: Your GitHub OAuth App Secret.
- `GOOGLE_CLIENT_ID`: Your Google OAuth Client ID.
- `GOOGLE_CLIENT_SECRET`: Your Google OAuth Client Secret.
- `NEXT_PUBLIC_IMGBB_KEY`: Your ImgBB API key for image uploads.

### Directory Structure

The project uses the Next.js App Router and is organized as follows:

```
/app
├── (auth)
│   └── login
│   └── register
├── api
├── dashboard
│   ├── add-product
│   └── ...
├── products
│   ├── [id]
│   │   └── page.jsx
│   └── page.jsx
├── components
└── ...
```

### Future Plans

- Add a shopping cart and a full checkout process.
- Implement product search and filtering functionality.
- Develop a user-friendly product review and rating system.
