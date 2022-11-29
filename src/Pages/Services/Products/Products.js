import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import BookingModal from "../../BookingModal/BookingModal";
import { useQuery } from "@tanstack/react-query";
import ProductsCard from "./ProductsCard/ProductsCard";

const Products = () => {
  const { user } = useContext(AuthContext);
  // const [allProducts, setAllProducts] = useState([]);
  const [bookProduct, setBookProduct] = useState(null);

  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/products`);
      const data = await res.json();
      return data;
    },
  });

  // useEffect(() => {
  //   fetch("http://localhost:5000/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);
  return (
    <div className="">
      <div className="mt-6 mb-12">
        <h2 className="text-center text-2xl font-bold">All Products</h2>
        <div className="border border-black w-40 mx-auto"></div>
      </div>
      <div className="grid  grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-6 gap-4">
        {products?.map((product) => (
          <ProductsCard
            key={product._id}
            product={product}
            setBookProduct={setBookProduct}
          ></ProductsCard>
        ))}
      </div>
      {bookProduct && (
        <BookingModal
          bookProduct={bookProduct}
          setBookProduct={setBookProduct}
        ></BookingModal>
      )}
    </div>
  );
};

export default Products;
