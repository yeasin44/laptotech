import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";
import BookingModal from "../../../BookingModal/BookingModal";
import CategoryWiseProduct from "../../Categories/CategoryWiseProduct/CategoryWiseProduct";

const ProductCardDetails = () => {
  const { user } = useContext(AuthContext);
  // const [allProducts, setAllProducts] = useState([]);
  const [bookProduct, setBookProduct] = useState(null);
  const products = useLoaderData();

  console.log(products);

  return (
    <div>
      <div className="grid  grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-6 gap-4">
        {products?.map((product) => (
          <CategoryWiseProduct
            key={product._id}
            product={product}
            setBookProduct={setBookProduct}
          ></CategoryWiseProduct>
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

export default ProductCardDetails;
