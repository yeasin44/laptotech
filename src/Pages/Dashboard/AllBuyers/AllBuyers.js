import React from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const AllBuyers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/buyers`);
      const data = await res.json();
      return data;
    },
  });
  const handleSeller = (id) => {
    fetch(`http://localhost:5000/users/seller/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Make seller successfull");
          refetch();
        }
      });
  };
  return (
    <div>
      <h2 className="text-xl font-bold text-center my-6">All Buyers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              {/* <th>Admin</th>
              <th>Position</th> */}
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                {/* <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleSeller(user._id)}
                      className="btn btn-xs btn-primary rounded-xl"
                    >
                      Make Admin
                    </button>
                  )}
                </td> */}
                {/* <td>
                  {user?.role === "seller" && (
                    <div className="btn btn-xs bg-amber-500">
                      {user?.role}{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="green"
                        class="w-4 h-4 ml-1"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                  {user?.role !== "seller" && (
                    <div className="btn btn-xs">{user?.role}</div>
                  )}
                </td> */}
                <td>
                  <button className="btn btn-xs bg-red-500 rounded-xl">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;
