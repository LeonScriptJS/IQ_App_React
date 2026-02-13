import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HomePage from "./components/HomePage";
// import AboutUs from "./components/AboutUs";
// import Contact from "./components/Contact";


// const router = createBrowserRouter([
//   {path: "/", element: <HomePage />},
//   {path: "/about", element: <AboutUs />},
//   {path: "/contact", element: <Contact />},
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </StrictMode>,
)
