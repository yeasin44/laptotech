import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const BookingModal = ({ bookProduct, setBookProduct }) => {
  const { user } = useContext(AuthContext);
  const { title } = bookProduct;

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;

    const booking = {
      productName: title,
      name,
      email,
      phone,
      location,
    };
    // console.log(booking);
    fetch("https://assignment-12-server-yeasin44.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          setBookProduct(null);
          toast.success("Item Booked");
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          {/* <h3 className="text-lg font-bold">{name}</h3> */}
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-4 mt-6"
          >
            {/* <p>{title}</p> */}
            <input
              disabled
              name="title"
              type="text"
              placeholder="product name"
              className="input w-full input-bordered"
              defaultValue={title}
            />
            <input
              disabled
              name="name"
              type="name"
              placeholder="name"
              className="input w-full input-bordered"
              defaultValue={user?.displayName}
            />
            <input
              disabled
              name="email"
              type="email"
              placeholder="email"
              className="input w-full input-bordered"
              defaultValue={user?.email}
            />

            <input
              name="phone"
              type="text"
              placeholder="phone"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Location"
              className="input w-full input-bordered"
            />
            <input
              type="submit"
              className="w-full btn btn-primary input-bordered"
              value="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
