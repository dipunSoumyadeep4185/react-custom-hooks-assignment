# React Custom Hook Assignment – useFetch

## Project Overview

This project was created as part of my React assignment to demonstrate the use of **custom hooks**. The main goal was to build a reusable hook called `useFetch` that can fetch data from an API and manage loading and error states properly. A simple React component was then created to use this hook and display the fetched data on the screen.

The API used for this project:
https://api.escuelajs.co/api/v1/products

The application fetches product data from the API and displays it in a grid layout.

---

## Key Decisions During Development

### 1. Creating a Custom Hook

Instead of writing the fetching logic directly inside the component, I created a **custom hook called `useFetch`**. This keeps the code cleaner and allows the same hook to be reused in other components if needed.

### 2. State Management

The hook uses the following React hooks:

* `useState` – to store **data**, **loading state**, and **error messages**
* `useEffect` – to run the API request when the component loads
* `useCallback` – to memoize the fetch function so it doesn't recreate unnecessarily

This structure helps keep the logic organized and easier to maintain.

### 3. Loading State

A loading screen with the text **"Loading..."** was added so users know that the application is fetching data.
I also added a small delay so the loading state is clearly visible during testing and demonstration.

### 4. Error Handling

Basic error handling was implemented. If the API request fails (for example when the user is offline), the application displays:

Error: Failed to Fetch...

This ensures the user understands that the data could not be loaded.

### 5. Image Handling

Some API products had broken or missing image links. To handle this, I added a fallback system where:

* If the image fails to load
* A colored placeholder card with **"600 x 600"** text is shown instead

The placeholder colors are randomly generated so the UI still looks visually balanced.

### 6. Layout Design

The products are displayed using a **CSS grid layout**. Each product appears as a card containing:

* Product image
* Product title

This layout was chosen to make the UI simple and easy to read.

### 7. Performance Consideration

Images are loaded using **lazy loading** to avoid loading too many images at once and to improve performance.

---

## Project Structure

src/
components/
Products.jsx
Products.css

hooks/
useFetch.jsx

App.jsx
main.jsx

---

## Conclusion

This assignment helped me understand how **custom hooks can simplify data fetching in React** and how to manage loading states, error states, and API responses in a structured way. It also helped me practice separating logic (hooks) from UI components.

---

## Author

Student Submission – React Assignment - 05
