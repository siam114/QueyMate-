import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import axios from "axios";
import MyQueryCard from "../page/MyQueryCard";

const MyQueries = () => {
  const { user } = useContext(AuthContext);

  const [queries, setQueries] = useState([]);

  useEffect(() => {
    fetchAllQueries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  
  const fetchAllQueries = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/queries/${user?.email}`
      );

      // Sort the data by date in descending order (newest first)
      const sortedData = data.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );

      setQueries(sortedData); // Update the state with sorted data
    } catch (err) {
      console.error("Error fetching queries:", err.message);
    }
  };

  return (
    <div>
      <div className="bg-gray-100 py-10 px-6 text-center rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Queries</h1>
        <Link to="/add-queries">
          <button className="bg-[#09b850] text-white text-md font-semibold px-6 py-3 rounded-lg hover:bg-[#09b850]transition duration-300">
            Add Queries
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-5 my-10 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
        {queries.map((query) => (
          <MyQueryCard key={query._id} query={query} fetchAllQueries={fetchAllQueries}/>
        ))}
      </div>
    </div>
  );
};

export default MyQueries;
