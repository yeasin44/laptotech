import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Toast } from "react-daisyui";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import useToken from "../../hooks/useToken";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginError, setLoginError] = useState();
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { login, socialLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleSocialLogin = () => {
    socialLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        toast.success("Login successfull");
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };
  if (token) {
    navigate(from, { replace: true });
  }
  const handleLogin = (data) => {
    // console.log(data);
    setLoginError("");
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        // setLoginUserEmail(data.email);
        setLoginUserEmail(data.email);
        toast.success("Login successfull");
      })
      .catch((error) => {
        console.error(error.message);
        setLoginError(error.message.slice(22, -2));
      });
  };
  return (
    <div className="h-[800px]   flex justify-center items-center">
      <div className="w-96 p-8 border-2 border-slate-900 rounded-2xl">
        <h2 className="text-xl text-center font-bold py-6">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="btn btn-outline w-full flex justify-center items-center">
            <FaGoogle className="text-lg mr-2" />
            <input
              onClick={handleSocialLogin}
              type="submit"
              value="CONTINUE WITH GOOGLE"
            />
          </div>
          <div className="divider">OR</div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email address is required" })}
              className="input input-bordered w-full "
            />
            {errors.email && (
              <p className="mt-2 text-red-600" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
              className="input input-bordered w-full "
            />
            <label className="label">
              <span className="label-text">Forget password?</span>
            </label>
            {errors.password && (
              <p className="text-red-600 py-1">{errors.password?.message}</p>
            )}
          </div>
          <label className="label">
            <span className="label-text">Options</span>
          </label>
          <select className="select select-bordered w-full max-w-xs mb-4">
            <option disabled selected>
              User
            </option>
            <option>Seller</option>
          </select>

          <input
            className="btn btn-accent w-full"
            value="Login"
            type="submit"
          />
          {loginError && <p className="text-red-600 mb-1">{loginError}</p>}
          <p className="mt-2">
            New to laptotech?{" "}
            <Link className="text-primary" to="/signup">
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
