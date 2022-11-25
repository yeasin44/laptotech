import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Categories = () => {
  const { user, id } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="border-2 border-slate-900 w-60 h-40 rounded-xl  bg-slate-800">
      <h2 className="text-lg font-bold mt-4 text-white text-center">
        All Categories
      </h2>
      <div className="border w-32 mx-auto"></div>
      {/* <p>All category: {categories.length}</p> */}
      {categories?.map((category) => (
        <ul>
          <Link className="font-bold text-white ml-16" to={`/category/$id`}>
            {category.name}
          </Link>
        </ul>
      ))}
    </div>
  );
};

export default Categories;
