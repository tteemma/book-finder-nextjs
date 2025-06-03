# Book Finder 📚

## Overview

Book Finder is a modern web application built with **Next.js** and **TypeScript** that allows users to search for books using the **Google Books API**, view detailed book information, add books to favorites, and toggle between light and dark themes. The app leverages **localStorage** to persist favorite books, eliminating the need for a backend. With dynamic routing, server-side rendering, and a responsive design, this project showcases modern frontend development practices.

## Why Choose Book Finder?

- **Next.js Practice:** Utilizes dynamic routes (`/books/[id]`), server-side rendering (`getServerSideProps`), and client-side fetching for API integration.
- **API Integration:** Leverages the Google Books API to fetch rich book data (title, author, cover, description, etc.).
- **Visual Appeal:** Features book cards with covers and theme support, making it portfolio-worthy.
- **No Backend Required:** Fetches data directly from the Google Books API and stores favorites in `localStorage`.
- **SEO & Performance:** Next.js ensures SEO optimization and fast page loads.
- **Universal Appeal:** Book search functionality caters to a wide audience while demonstrating API and frontend skills.

## Features

- **Book Search:** Search books by title, author, or keywords via a search bar.
- **Book List:** Displays search results as cards with cover, title, author, and a brief description.
- **Book Details Page:** Dynamic page for each book with detailed info (cover, author, genre, description, publisher, ISBN).
- **Favorites:** Add/remove books to favorites, stored in `localStorage`.
- **Filters & Sorting:** Filter by genre (e.g., fiction, non-fiction) and sort by rating or publication date.
- **Theme Support:** Toggle between light and dark themes using CSS variables.
- **Responsive Design:** Fully responsive for mobile and desktop devices.

## Tech Stack

- **Next.js + TypeScript:** For building the app with dynamic routes and strict typing.
- **Axios:** For making requests to the Google Books API.
- **CSS Modules:** For component-level styling and theme support.
- **React Context:** Manages global state for favorites and theme.
- **LocalStorage:** Persists the list of favorite books.
- **Vercel:** For easy deployment (Next.js-friendly).

## Google Books API Endpoints

- **Search Books:** `https://www.googleapis.com/books/v1/volumes?q={query}`
- **Book Details:** `https://www.googleapis.com/books/v1/volumes/{volumeId}`
- **Example Request:** `https://www.googleapis.com/books/v1/volumes?q=harry+potter`

## Project Structure

```
book-finder/
├── public/                        # Static files
│   ├── favicon.ico               # App favicon
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx           # Main app layout
│   │   ├── page.tsx             # Homepage (search, filters, book list)
│   │   ├── books/[id]/page.tsx  # Dynamic book details page
│   │   ├── favorites/page.tsx   # Favorites page
│   │   └── not-found.tsx        # 404 error page
│   ├── components/               # Reusable UI components
│   │   ├── bookCard/            # Book card component
│   │   │   ├── BookCard.tsx
│   │   │   └── BookCard.module.scss
│   │   ├── filterSelector/      # Filter selection component
│   │   │   ├── FilterSelector.tsx
│   │   │   └── FilterSelector.module.scss
│   │   ├── ReactQueryProvider.tsx  # React Query provider for data fetching
│   │   └── searchBooks/         # Search bar component
│   │       ├── SearchBooks.tsx
│   │       └── SearchBooks.module.scss
│   ├── hooks/                    # Custom hooks
│   │   ├── useDebounce.ts       # Debouncing for search input
│   │   └── useFetchBooks.ts     # Fetching books from API
│   ├── lib/                      # API and utility functions
│   │   └── api.ts               # Axios configuration for Google Books API
│   ├── styles/                   # Global styles
│   │   ├── global.css           # Global app styles
│   │   └── page.module.css      # Page-specific styles
│   ├── types/                    # TypeScript types
│   │   └── types.ts             # Types for book data and filters
├── .gitignore                    # Git ignore file
├── eslint.config.mjs             # ESLint configuration
├── next-env.d.ts                 # Next.js TypeScript declarations
├── package-lock.json             # Dependency lock file
├── package.json                  # Project dependencies and scripts
├── README.md                     # Project documentation
└── tsconfig.json                 # TypeScript configuration
```

## Setup Instructions

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/book-finder.git
   cd book-finder
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser to see the app.

### Deployment

Deploy the app to **Vercel** for free:

1. Push your code to a GitHub repository.
2. Import the repository into Vercel.
3. Vercel will automatically detect the Next.js project and deploy it.

## Contributing

Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request with your changes.
