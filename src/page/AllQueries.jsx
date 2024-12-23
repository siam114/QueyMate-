import axios from "axios";
import { useEffect, useState } from "react";
import QueryCard from "./QueryCard";

const AllQueries = () => {
    const [queries,setQueries] = useState([]);

    useEffect(()=>{
        fetchAllQueries()
    },[])
    const fetchAllQueries = async() =>{
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/queries`)
        setQueries(data)
    }
    console.log(queries)
    return (
        <div className='grid grid-cols-1 gap-5 my-10 md:grid-cols-2 lg:grid-cols-4 container mx-auto'>
          {
            queries.map(query => <QueryCard key={query._id} query={query}/>)
          }
        </div>
    );
};

export default AllQueries;