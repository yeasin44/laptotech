import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Categories = ({ product }) => {
  // const { product_id } = product;
  // const { product_id } = product;
  const { user, id } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  console.log(typeof categories);

  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }, []);

  return (
    <div className="border-2 border-slate-900 w-96  rounded-xl bg-slate-200  mx-auto">
      <div className="grid grid-cols-3 mx-auto text-center">
        {categories?.map((category) => (
          <Link to={`/category/${category.id}`} className="font-bold  ">
            <button className="hover:text-primary">{category.name}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
