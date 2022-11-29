import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import Loading from "../../../components/Loading/Loading";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
import useSeller from "../../../hooks/useSeller";
import AllBuyers from "../AllBuyers/AllBuyers";
import AllUsers from "../AllUsers/AllUsers";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/bookings?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="">
      {!isSeller && !isAdmin && (
        <>
          {" "}
          <h2 className="text-center text-lg mt-6 mb-2 font-bold">My Orders</h2>
          <div className="overflow-x-auto ">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Product</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody className="">
                {bookings.length &&
                  bookings?.map((booking, i) => (
                    <tr key={booking._id}>
                      <th>{i + 1}</th>
                      <td>{user?.displayName}</td>
                      <td>{booking.productName}</td>
                      <td>{booking.phone}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </>
      )}
      {isSeller && <AllBuyers></AllBuyers>}
      {isAdmin && <AllUsers></AllUsers>}
    </div>
  );
};

export default MyOrders;
