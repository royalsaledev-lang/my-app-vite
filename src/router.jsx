import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Product from "./pages/Product";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/products',
        element: <Product/>
    }
])




