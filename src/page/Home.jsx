import { useEffect, useState } from "react";
import BannerSlider from "../component/BannerSlider";
import axios from "axios";
import QueryCard from "./QueryCard";
import Leading from "./Leading";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    fetchAllQueries();
  }, []);
  const fetchAllQueries = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/queries-home`
    );
    setQueries(data);
  };
  return (
    <div>
      <BannerSlider />
      <div className="grid  max-w-6xl grid-cols-1 gap-5 my-10 sm:my-16 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
        {queries.map((query) => (
          <QueryCard key={query._id} query={query} />
        ))}
      </div>
      <Fade direction="right" duration={2000}>
        <Leading />
        </Fade>
    </div>
  );
};

export default Home;
