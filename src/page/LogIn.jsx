import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginLottieData from "../assets/lottie/login.json";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { toast, ToastContainer } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LogIn = () => {
  const {signInUser, setUser,user} = useContext(AuthContext);
  const navigate = useNavigate()
  const [error,setError] = useState({})
  const location = useLocation()
  const [showPassword, setShowPassword] = useState(false);
  const provider = new GoogleAuthProvider();

  const handleSignIn = e =>{
    e.preventDefault();
    const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        signInUser(email,password)
        .then(result => {
          console.log(result)
          const user = result.user;
          setUser(user);
          toast.success("Login successful!");
          navigate(location?.state ? location.state : '/')
        })
        .catch(err=>{
          console.log(err)
          setError({...error,login:err.message})
          toast.error("Login failed! Please check your credentials.");
        })
  }

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Google sign-in successful!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error)
        toast.error("Google sign-in failed! Please try again.");
      });
  };
  useEffect(() => {
    if (!!user && typeof window != "undefined") {
      window.location.replace("/");
    }
  }, [user]);
  return (
    <div className="flex items-center justify-center flex-col lg:flex-row">
      <div className="text-center lg:text-left w-[500px] sm:ml-44 px-5">
        <Lottie animationData={loginLottieData}></Lottie>
      </div>

      <div className="card bg-base-100 py-10 w-full mx-auto my-10 max-w-md shrink-0 shadow-2xl">
      <ToastContainer position="top-right" />
        <h2 className="text-2xl font-semibold text-center">
          Login your account
        </h2>
        <form onSubmit={handleSignIn} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
             <button
              onClick={() => setShowPassword(!showPassword)}
              type="button"
              className="btn btn-xs absolute right-4 top-12"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {
              error.login && (
                <label className="label text-sm text-red-600">
                  {error.login}
                </label>
              )
            }
          </div>
          <div className="form-control mt-6">
            <button className="btn dark:text-[#273248] dark:bg-slate-300 bg-[#09b850] text-white hover:text-black">
              Login
            </button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Do not Have an Account?{" "}
          <Link to="/auth/register" className="text-red-500">
            Register
          </Link>
        </p>

        <div className="divider">OR</div>
        <div className="form-control w-10/12 mx-auto">
          <button onClick={handleGoogleSignIn} className="btn border border-black">
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

export default LogIn;
