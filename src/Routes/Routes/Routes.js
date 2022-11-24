import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Services/Products/Products";
import SignUp from "../../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layouts/Main/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/products/:id",
        element: <Products></Products>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [{}],
  },
]);

export default router;
