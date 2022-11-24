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
    <div className="border text-center">
      <h2>Categories</h2>
      <p>All category: {categories.length}</p>
      {categories?.map((category) => (
        <ul>
          <Link to={`/category/$id`}>{category.name}</Link>
        </ul>
      ))}
    </div>
  );
};

export default Categories;
