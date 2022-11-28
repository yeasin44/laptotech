import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";

import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Login from "../../Pages/Login/Login";
import ProductCardDetails from "../../Pages/Services/Products/ProductCardDetails/ProductCardDetails";
import Products from "../../Pages/Services/Products/Products";
import Blog from "../../Pages/Blog/Blog";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "../AdminRoutes/AdminRoutes";
import Category from "../../Pages/Services/Categories/Category/Category";
import AddProducts from "../../Pages/Dashboard/AddProducts/AddProducts";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import MyProducts from "../../Pages/Dashboard/Sellers/MyProducts/MyProducts";
import ReportedItems from "../../Pages/Dashboard/ReportedItems/ReportedItems";

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
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },

      {
        path: "/products/category/:id",
        element: <ProductCardDetails></ProductCardDetails>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-12-server-yeasin44.vercel.app/products/category/${params.id}`
          ),
      },
      {
        path: "/products/:id",
        element: <ProductCardDetails></ProductCardDetails>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-12-server-yeasin44.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/products",
        element: <Category></Category>,
        loader: () =>
          fetch(`https://assignment-12-server-yeasin44.vercel.app/products`),
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allBuyers",
        element: (
          <AdminRoute>
            <AllBuyers></AllBuyers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allSellers",
        element: (
          <AdminRoute>
            <AllSellers></AllSellers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addProducts",
        element: (
          <AdminRoute>
            <AddProducts></AddProducts>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/myProducts",
        element: (
          <AdminRoute>
            <MyProducts></MyProducts>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/reportedItems",
        element: (
          <AdminRoute>
            <ReportedItems></ReportedItems>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
