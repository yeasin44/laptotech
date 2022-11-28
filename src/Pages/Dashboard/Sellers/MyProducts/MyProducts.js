import { useQuery } from "@tanstack/react-query";

import Loading from "../../../../components/Loading/Loading";

const MyProducts = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:5000/myProducts`, {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="grid  grid-cols-1 lg:grid-cols-2 md:grid-cols-2 my-6 gap-4">
      {products?.map((product, idx) => (
        <div key={idx} className="card w-96 shadow-xl border mx-auto">
          <figure className="img-figure">
            <img src={product.image} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p className="text-sm">
              <span className="font-bold">Resale Price:</span> <span>৳</span>
              {product.price}
            </p>

            <p className="text-sm">
              <span className="font-bold">Used:</span> {product.yearOfUse}
            </p>

            <p className="text-sm">
              <span className="font-bold">Location:</span> {product.location}
            </p>
            <p className="text-sm">
              <span className="font-bold">Posted:</span> {product.postTime}
            </p>
            <p className="text-sm">
              <span className="font-bold">Description:</span>{" "}
              {product.description}
            </p>
            <div className="card-actions justify-end">
              <label htmlFor="booking-modal" className="btn btn-primary">
                Advertise
              </label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyProducts;
