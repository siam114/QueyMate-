import axios from "axios";
import { format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from './../context/AuthProvider';
import { toast } from "react-toastify";

const DetailsPage = () => {
    const [query,setQuery] = useState({});
    const {id} = useParams();
    const {user} = useContext(AuthContext);

    useEffect(()=>{
        fetchQuery()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])
    const fetchQuery = async() =>{
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/query/${id}`)
        setQuery(data)

    }

    const{
        productName,
        brand,
        productPhoto,
        title,
        boycott,
        date,
        email,
        name,
        _id
      } = query || {}

      // handle from submit
      const handleSubmit =async e =>{
        e.preventDefault();
        const form = e.target;
        const recommandTitle = form.recommand_title.value;
        const recommandName = form.recommand_name.value;
        const recommandPhoto = form.recommand_photo.value;
        const recommandReason = form.recommand_reason.value;
        const recommandDate = new Date();
        const recommandEmail = user?.email;
        const recommandUserName = user?.displayName;
        const queryId  = _id

        // validation user and recommandemail
        if(recommandEmail === email) 
          return toast.error('Action Not Permitted!')

        const recommandData = {recommandDate,recommandName,recommandPhoto,recommandReason,recommandTitle,recommandEmail,recommandUserName,email,name,productName,title,queryId}

        try{
          // make a post request
         await axios.post(`${import.meta.env.VITE_API_URL}/add-recommand`,recommandData)
         form.reset()
         toast.success('Recommand Added SuccessFully')
        //  navigate('/my-queries')
      }catch(err){
       toast.error(err?.response?.data)
      }
     
      }
    return (
        <div className="container mx-auto p-8">
        {/* Main Heading */}
        <h1 className="text-3xl font-bold mb-8">{title}</h1>
  
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src={productPhoto}
                alt="Product"
                className="w-32 h-32 object-cover rounded-lg"
              />
              <div>
                <h2 className="text-xl font-semibold">
                  {productName}
                </h2>
                <p className="text-gray-600 mt-2">
                  Brand: {brand}
                </p>
                <p className="text-gray-600 mt-2">
                  {boycott}
                </p>
                <div className="text-gray-700 mt-4">
                  <p>
                    <span className="font-semibold">Created by:</span> {name}
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span>{" "}
                    {email}
                  </p>
                  {date && (<p>
                    <span className="font-semibold">Posted on:</span> {format(new Date(date),'P')}
                  </p>)}
                </div>
              </div>
            </div>
          </div>
  
          {/* Right Form */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Add a Recommendation</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Recommendation Title
                </label>
                <input
                  type="text"
                  name="recommand_title"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Enter recommendation title"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Recommended Product Name
                </label>
                <input
                  type="text"
                  name="recommand_name"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Enter product name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Product Image URL
                </label>
                <input
                  type="text"
                  name="recommand_photo"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Enter product image URL"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Recommendation Reason
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-md"
                  name="recommand_reason"
                  placeholder="Enter reason for recommendation"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#09b850] text-white px-4 py-2 rounded-md hover:bg-[#09b84fd5]"
              >
                Add Recommendation
              </button>
            </form>
          </div>
        </div>
  
        {/* Recommendations */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">All Recommendations (1)</h2>
          <div className="bg-blue-50 p-4 rounded-lg shadow-md flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/50"
              alt="Product"
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <h3 className="font-semibold">Earum aut iure at ei</h3>
              <p className="text-gray-600">In tempor duis et ni</p>
              <p className="text-sm text-gray-500">
                Recommended by: Harun (taleb@gmail.com)
              </p>
            </div>
            <span className="ml-auto text-sm text-gray-500">(12/22/2024)</span>
          </div>
        </div>
      </div>
    );
};

export default DetailsPage;