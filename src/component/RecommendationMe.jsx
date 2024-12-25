import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import axios from "axios";

const RecommendationMe = () => {
  const { user } = useContext(AuthContext);

  const [queries, setQueries] = useState([]);

  useEffect(() => {
    fetchAllQueries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  // Fetch all recommendations
  const fetchAllQueries = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/recommand/${user?.email}`,
      { withCredentials: true }
    );
    setQueries(data);
  };

  return (
    <section className="container px-4 mx-auto my-12">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800">
          Recommendations For Me
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
            Recommendations made by others for you will appear here.
          </p>
        </div>
      ) : (
        // Show table if recommendations exist
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        Recommendation Reason
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        Recommendation Name
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        Created At
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        Recommendation Email
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
                          {query.recommandReason}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {query.recommandName}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {query.recommandDate}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          {query.recommandEmail}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RecommendationMe;
