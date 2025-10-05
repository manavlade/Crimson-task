# 📚 Enago Research Papers Dashboard

A **Next.js 14+** frontend web application that fetches, displays, and interacts with research paper data from the **Enago Accepted Papers API**.  
The project is built with a focus on **performance**, **clean architecture**, **reusability**, and **modern UI design**.

---

## 🚀 Tech Stack

| Category | Technology |
|-----------|-------------|
| Framework | [Next.js 14](https://nextjs.org/) |
| Language | TypeScript |
| Styling | SCSS Modules |
| API Handling | Fetch API / Axios |
| UI Enhancements | Framer Motion *(optional)* |
| State Management | React Hooks |
| Hosting | Vercel (Recommended) |

---

## 🧩 Features Overview

### 🔹 1. Data Fetching
- Fetches all paper data from:  
  👉 `https://easydash.enago.com/acceptedpapers`
- Implements proper **loading**, **error**, and **success** states.
- Uses **async/await** and error boundary handling.

### 🔹 2. Card UI
Displays each research paper as a **responsive card**, including:
- Title  
- Authors  
- Year  
- Journal Name  
- DOI  
- Impact Factor  
- PDF/Media Links (if available)

Clean, elegant, and optimized for desktop and mobile.

### 🔹 3. Search Functionality
- Dynamic **search bar** with:
  - Keyword input  
  - Dropdown to select search category (Title / Author / Journal)
- Supports **debounced searching** for performance.
- Real-time filtering of results.

### 🔹 4. Sorting
- Sort papers by:
  - Title (Ascending / Descending)
  - Year (Ascending / Descending)
  - Impact Factor (Ascending / Descending)
- Interactive sort button toggles (`⬆ Asc / ⬇ Desc`).

### 🔹 5. Pagination
- Implements client-side pagination.  
- Displays:
  - Page numbers  
  - Current page highlight  
  - Total records count  
- Supports wrapping on smaller screens.

### 🔹 6. Details View
- Each card has a **“View Details”** button.
- Opens either:
  - A modal popup, **or**
  - A dedicated detail page (Next.js route)
- Displays complete metadata in structured form.

### 🔹 7. Customization & Optimization
- **SCSS variables** for colors, typography, and theme.
- Modular components with consistent styling.
- **Lazy loading** for card images.
- **Memoization** (`useMemo`, `useCallback`) for performance.
- Responsive and accessible layout.

### 🔹 8. Bonus Features (Optional)
- Skeleton loaders for improved UX.
- Debounced search to prevent excessive re-renders.
- Download button for available PDFs.

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

npm install
 or
yarn install


npm run dev
 or
yarn dev

Then open http://localhost:3000 in your browser.

Architectural Decisions

Next.js App Router (v14) — for modern routing and layout system

Server Components — for API calling

Client Components — for search, sort, and pagination logic

SCSS Modules — scoped styles for maintainable UI

Reusable Components — each logical UI section is modular

Error Boundaries — handle API or network issues gracefully

Performance Optimizations — memoization and lazy rendering