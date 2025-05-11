import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import axios from "axios";
import { format } from "date-fns";
import { toast } from 'react-hot-toast';
import { Helmet } from "react-helmet";

const MyRecommand = () => {
  const { user } = useContext(AuthContext);
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    fetchAllQueries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  // Fetch all recommendations
  const fetchAllQueries = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/recommand-request/${user?.email}`,
      { withCredentials: true }
    );
    setQueries(data);
  };

  const handleDelete = async (id) => {
    try {
      // Call the delete API
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/delete-recommand/${id}`,
        { withCredentials: true }
      );
  
      if (response.data.success) {
        // Remove the deleted row from the UI
        setQueries(queries.filter((query) => query._id !== id));
        toast.success('Recommendation deleted successfully'); // Optional
      } else {
        toast.error('Failed to delete recommendation'); // Optional
      }
    } catch (error) {
      console.error('Error deleting recommendation:', error);
      toast.error('Something went wrong'); // Optional
    }
  };

  return (
    <section className="container px-4 mx-auto my-12">
       <Helmet>
        <title>QueryMate | My Recommand</title>
      </Helmet>
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800">
          My Recommendations
        </h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">
          {queries.length} Recommendation
        </span>
      </div>

      {queries.length === 0 ? (
        // Show message if no recommendations are available
        <div className="mt-6 text-center">
          <p className="text-lg text-gray-600">No Recommendations Available</p>
          <p className="text-sm text-gray-500">
            Recommendations made by others for your queries will appear here.
          </p>
        </div>
      ) : (
     
        <div className="flex flex-col mt-6">
          {/* Desktop Table */}
          <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 hidden md:table">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left text-gray-500"
                        >
                          Recommendation Reason
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left text-gray-500"
                        >
                          Recommendation Name
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left text-gray-500"
                        >
                          Created At
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left text-gray-500"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {queries.map((query) => (
                        <tr key={query._id}>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {query.recommandTitle}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {query.recommandReason.substring(0,40)}...
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {query.recommandName}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {format(new Date(query.recommandDate), "P")}
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <button
                               onClick={() => handleDelete(query._id)}
                              title="Delete Recommendation"
                              className="text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden mt-5">
            {queries.map((query) => (
              <div
                key={query._id}
                className="p-4 mb-4 bg-white border rounded-lg shadow-sm"
              >
                <div className="text-sm text-gray-500">
                  <span className="font-bold text-gray-700">Title: </span>
                  {query.recommandTitle}
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  <span className="font-bold text-gray-700">
                    Recommendation Reason:{" "}
                  </span>
                  {query.recommandReason}
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  <span className="font-bold text-gray-700">
                    Recommendation Name:{" "}
                  </span>
                  {query.recommandName}
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  <span className="font-bold text-gray-700">Created At: </span>
                  {format(new Date(query.recommandDate), "P")}
                </div>
                <div className="mt-4">
                  <button
                     onClick={() => handleDelete(query._id)}
                    title="Delete Recommendation"
                    className="text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default MyRecommand;
