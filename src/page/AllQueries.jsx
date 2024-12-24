import axios from "axios";
import { useEffect, useState } from "react";
import QueryCard from "./QueryCard";

const AllQueries = () => {
  const [queries, setQueries] = useState([]);
  const [search, setSearch] = useState('');
  const [viewMode, setViewMode] = useState(4); 
  const [activeButton, setActiveButton] = useState(4); 

  useEffect(() => {
    const fetchAllQueries = async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/queries?search=${search}`);
      setQueries(data);
    };
    fetchAllQueries();
  }, [search]);

  // Function to handle button click and set the active button
  const handleViewChange = (mode) => {
    setViewMode(mode);        
    setActiveButton(mode);   
  };

  return (
    <div>
      <div className="w-full max-w-4xl mx-auto mt-8 px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">All Queries</h2>
        </div>

        {/* Search & View */}
        <div className="flex items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full max-w-md">
            <input
              type="text"
              name="search"
              onChange={e => setSearch(e.target.value)}
              placeholder="Search by product Name"
              className="w-full py-2 pl-4 pr-10 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-3.35z"
                />
              </svg>
            </button>
          </div>

          {/* View Buttons */}
          <div className="flex items-center gap-2">
            <span className="text-md font-semibold text-gray-700">View</span>
            <button
              onClick={() => handleViewChange(4)}
              className={`px-3 py-2 border rounded-lg ${activeButton === 4 ? 'bg-[#09b84d] text-white' : 'text-gray-700 hover:bg-blue-100'}`}
            >
              4 Cards
            </button>
            <button
              onClick={() => handleViewChange(3)}
              className={`px-3 py-2 border rounded-lg ${activeButton === 3 ? 'bg-[#09b84d] text-white' : 'text-gray-700 hover:bg-blue-100'}`}
            >
              3 Cards
            </button>
          </div>
        </div>
      </div>

      {/* Grid of Queries */}
      <div className={`grid grid-cols-1 gap-5 my-10 md:grid-cols-2 lg:grid-cols-${viewMode} container mx-auto`}>
        {
          queries.map(query => <QueryCard key={query._id} query={query} />)
        }
      </div>
    </div>
  );
};

export default AllQueries;
