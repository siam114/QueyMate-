import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthProvider";

const UpdateQueries = () => {
  const [query,setQuery] = useState({});
  const {id} = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

    useEffect(()=>{
        fetchQuery()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])
    const fetchQuery = async() =>{
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/query/${id}`)
        setQuery(data)
    }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.product_name.value;
    const brand = form.product_brand.value;
    const productPhoto = form.product_image.value;
    const title = form.query_title.value;
    const boycott = form.boycotting_reason.value;
    const date = new Date();
    const formData = {
      productName,
      brand,
      productPhoto,
      title,
      boycott,
      date,
      email: user?.email,
      name: user?.displayName,
      photo: user?.photoURL,
      count: query.count,
    };
    
 try{
     // make a post request
    await axios.put(`${import.meta.env.VITE_API_URL}/update-query/${id}`,formData)
    form.reset()
    toast.success('Data updated SuccessFully')
    navigate('/my-queries')
 }catch(err){
  toast.error(err.message)
 }


  };
    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
        <section className="p-4 md:p-8 mx-auto bg-white rounded-lg shadow-lg w-full max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-800 capitalize text-center mb-6">
            Update Your Query
          </h2>
  
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Product Name */}
              <div>
                <label className="text-gray-700 font-medium">Product Name</label>
                <input
                  id="product_name"
                  name="product_name"
                  defaultValue={query?.productName}
                  type="text"
                  placeholder="Enter the product name"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#09b850] focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:outline-none"
                  required
                />
              </div>
  
              {/* Product Brand */}
              <div>
                <label className="text-gray-700 font-medium">Product Brand</label>
                <input
                  id="product_brand"
                  name="product_brand"
                  defaultValue={query?.brand}
                  type="text"
                  placeholder="Enter the product brand"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#09b850] focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:outline-none"
                  required
                />
              </div>
  
              {/* Product Image URL */}
              <div>
                <label className="text-gray-700 font-medium">
                  Product Image URL
                </label>
                <input
                  id="product_image"
                  name="product_image"
                  defaultValue={query?.productPhoto}
                  type="url"
                  placeholder="Enter the product image URL"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#09b850] focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:outline-none"
                  required
                />
              </div>
  
              {/* Query Title */}
              <div>
                <label className="text-gray-700 font-medium">Query Title</label>
                <input
                  id="query_title"
                  name="query_title"
                  type="text"
                  defaultValue={query?.title}
                  placeholder="Enter your query title"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#09b850] focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:outline-none"
                  required
                />
              </div>
            </div>
  
            {/* Boycotting Reason */}
            <div className="mt-4">
              <label className="text-gray-700 font-medium">
                Boycotting Reason Details
              </label>
              <textarea
                id="boycotting_reason"
                name="boycotting_reason"
                defaultValue={query?.boycott}
                rows="4"
                placeholder="Explain why you want to boycott this product"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#09b850] focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:outline-none"
                required
              ></textarea>
            </div>
  
            {/* Add Query Button */}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="px-8 py-3 text-white bg-[#09b850] rounded-md shadow-md hover:bg-[#09b850] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 transition-colors"
              >
                Update Query
              </button>
            </div>
          </form>
        </section>
      </div>
    );
};

export default UpdateQueries;