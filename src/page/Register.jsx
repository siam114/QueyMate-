import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import registerLottieData from "../assets/lottie/Animation - 1734851473080.json";

const Register = () => {

    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value
        const password = form.password.value;
        console.log(name,email,photo,password)
    }
  return (
    <div className="flex items-center justify-center flex-col lg:flex-row">
      <div className="text-center lg:text-left w-[500px] sm:ml-44">
        <Lottie animationData={registerLottieData}></Lottie>
      </div>

      <div className="card bg-base-100 py-10 w-full mx-auto my-10 max-w-md shrink-0 shadow-2xl">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn dark:text-[#273248] dark:bg-slate-300 bg-[#09b850] text-white hover:text-black">
              Register
            </button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Already Have an Account ?{" "}
          <Link to="/auth/login" className="text-red-500">
            Login
          </Link>
        </p>

        <div className="divider">OR</div>
        <div className="form-control w-10/12 mx-auto">
          <button className="btn border border-black">
            <span className="text-2xl">
              <FcGoogle />{" "}
            </span>{" "}
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
