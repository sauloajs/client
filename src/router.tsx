import {
  createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import Login from './pages/login';
import Register from './pages/register';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);