import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Categories = ({ product }) => {
  // const { product_id } = product;
  const { user, id } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://assignment-12-server-yeasin44.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="border-2 border-slate-900 w-96  rounded-xl   mx-auto">
      {/* <h2 className="text-lg font-bold mt-4 text-white text-center">
        All Categories
      </h2> */}
      {/* <div className="border w-32 mx-auto"></div> */}
      {/* <p>All category: {categories.length}</p> */}
      <div className="grid grid-cols-3 mx-auto text-center">
        {" "}
        {categories?.map((category) => (
          <ul>
            <Link to="/products" className="font-bold  ">
              <button>{category.name}</button>
            </Link>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Categories;
