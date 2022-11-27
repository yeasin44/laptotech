import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const { createUser, updateUser, socialLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInError, setSignInError] = useState("");

  // const { createUser, updateUser } = useContext(AuthContext);
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);

  if (token) {
    navigate("/");
  }

  const handleSignUp = (data) => {
    console.log(data);
    setSignInError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User created successfully");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        console.error(error);
        setSignInError(error.message.slice(22, -2));
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("https://assignment-12-server-rose.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("save data", data);
        // getUserToken(email);
        setCreatedUserEmail(email);
      });
  };
  // const getUserToken = (email) => {
  //   fetch(`https://assignment-12-server-rose.vercel.app/jwt?email=${email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.accessToken) {
  //         localStorage.setItem("accessToken", data.accessToken);
  //         navigate("/");
  //       }
  //     });
  // };

  const handleSocialLogin = () => {
    socialLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        toast.success("Login successfull");
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-6 border-2 rounded-2xl border-slate-900 ">
        <h2 className="font-bold text-center text-xl py-6">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name")}
              type="text"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email address is required" })}
              type="email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[0-9])/,
                  message: "Password must be strong",
                },
              })}
              type="password"
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-red-600 mt-2">{errors.password?.message}</p>
            )}
          </div>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-primary mt-2">
              Login
            </Link>
          </p>
          <input
            className="btn btn-accent w-full mt-4"
            value="Sign Up"
            type="submit"
          />
          {signInError && <p className="text-red-600">{signInError}</p>}
          <div className="divider">OR</div>

          <input
            onClick={handleSocialLogin}
            type="submit"
            value="CONTINUE WITH GOOGLE"
            className="w-full btn btn-outline"
          />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
