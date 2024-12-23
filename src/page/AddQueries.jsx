import { useContext } from "react";
import { AuthContext } from "./../context/AuthProvider";
import axios from "axios";

const AddQueries = () => {
  const { user } = useContext(AuthContext);

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
      count: 0,
    };
    
    // make a post request
    const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/add-query`,formData)
    console.log(data)

  };
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <section className="p-4 md:p-8 mx-auto bg-white rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-800 capitalize text-center mb-6">
          Add Your Query
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Product Name */}
            <div>
              <label className="text-gray-700 font-medium">Product Name</label>
              <input
                id="product_name"
                name="product_name"
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
              Add Query
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddQueries;
