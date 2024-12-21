import { FaFacebook, FaTwitter, FaWhatsapp, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center dark:text-[#273248] dark:bg-slate-300 bg-[#273248] text-white rounded p-10">
      <div>
        <h2 className="text-3xl font-bold">QueryMate</h2>
        <p className="md:w-[500px]">
          QueryMate's Product Recommendation System helps you discover the best 
          products tailored to your needs. Our AI-driven recommendations ensure 
          you always make the right choice.
        </p>
      </div>
      <nav className="grid md:grid-flow-col gap-4">
        <Link to='/' className="link link-hover">Home</Link>
        <Link to='/about' className="link link-hover">About us</Link>
        <Link to='/auth/register' className="link link-hover">Contact</Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col text-2xl gap-4">
          <a href="https://www.facebook.com" target="_blank" className="text-blue-500" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.whatsapp.com" target="_blank" className="text-green-500" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://twitter.com" target="_blank" className="text-blue-400" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.youtube.com" target="_blank" className="text-red-500" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href="https://linkedin.com" target="_blank" className="text-blue-700" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            <FcGoogle />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All rights reserved by QueryMate
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
