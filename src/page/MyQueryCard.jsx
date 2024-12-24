import axios from "axios";
import { format } from "date-fns";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const MyQueryCard = ({ query,fetchAllQueries }) => {
    const handleDelete = async id =>{
        try{
            const {data} = await axios.delete(`${import.meta.env.VITE_API_URL}/query/${id}`)
            console.log(data);
            toast.success('Data Deleted Successfully!!!')
            fetchAllQueries()
        }catch(err){
            console.log(err)
            toast.error(err.message)
        }
    }

  return (
    <div className="card bg-base-100 shadow-xl">
      {/* Image */}
      <figure>
        <img
          className="p-4 w-full h-56"
          src={query.productPhoto}
          alt={query.productName}
        />
      </figure>

      {/* Card Body */}
      <div className="card-body">
        <h2 className="card-title">
          {query.productName}
          <div className="badge bg-[#09b84f1e]">
            {format(new Date(query.date), "P")}
          </div>
        </h2>
        <p>{query.brand}</p>

        {/* Buttons */}
        <div className="card-actions justify-end mt-4 flex space-x-2">
         <Link to={`/query/${query._id}`}>
         <button
            className="px-4 py-2 rounded-md border border-black text-black hover:bg-black hover:text-white transition duration-300"
          >
            View
          </button>
         </Link>
          <Link to={`/update/${query._id}`}>
          <button
            className="px-4 py-2 rounded-md border border-[#09b850] text-[#09b850] hover:bg-[#09b850] hover:text-white transition duration-300"
          >
            Update
          </button>
          </Link>
          <button onClick={()=> handleDelete(query._id)}
            className="px-4 py-2 rounded-md border border-gray-400 text-gray-600 hover:bg-gray-400 hover:text-white transition duration-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

MyQueryCard.propTypes = {
  query: PropTypes.object.isRequired,
  fetchAllQueries: PropTypes.func.isRequired,
};

export default MyQueryCard;
