import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import axios from "axios";

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
        `${import.meta.env.VITE_API_URL}/recommand/${user?.email}`
      );
      setQueries(data);
    };
    console.log(queries)

  return (
   <div></div>
  );
};

export default MyRecommand;
