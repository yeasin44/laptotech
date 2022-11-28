import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";
import Categories from "../Categories";

const SpecificCategory = () => {
  const { user, id } = useContext(AuthContext);

  const { data: products = [] } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await fetch(
        `https://assignment-12-server-yeasin44.vercel.app/products/product_id/${id}`
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      {products?.map((product) => (
        <Categories key={product._id} product={product}></Categories>
      ))}
    </div>
  );
};

export default SpecificCategory;
