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
      const res = await fetch(
        `https://assignment-12-server-rose.vercel.app/products`
      );
      const data = await res.json();
      return data;
    },
  });

  // useEffect(() => {
  //   fetch("https://assignment-12-server-rose.vercel.app/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2">
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
