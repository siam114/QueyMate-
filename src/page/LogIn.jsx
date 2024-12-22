import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const LogIn = () => {
    return (
        <div className="card bg-base-100 py-10 w-full mx-auto my-10 max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-2xl font-semibold text-center">Login your account</h2>
     <form className="card-body">
       <div className="form-control">
         <label className="label">
           <span className="label-text">Email</span>
         </label>
         <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
       </div>
       <div className="form-control relative">
         <label className="label">
           <span className="label-text">Password</span>
         </label>
         <input type='text' name="password" placeholder="password" className="input input-bordered" required />
         
         <label className="label">
           <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
         </label>
       </div>
       <div className="form-control mt-6">
         <button className="btn dark:text-[#273248] dark:bg-slate-300 bg-[#09b850] text-white hover:text-black">Login</button>
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
         <button
           className="btn border border-black"
         >
           <span className="text-2xl">
             <FcGoogle />{" "}
           </span>{" "}
           Login with Google
         </button>
       </div>
   </div>
    );
};

export default LogIn;