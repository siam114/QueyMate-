import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

AOS.init();

const About = () => {
    return (
      <div>
         <Helmet>
        <title>QueryMate | About Us</title>
      </Helmet>
        <section className="py-12">
          <div className="container mx-auto px-6 text-gray-800">
            <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
  
            <p className="text-lg text-center max-w-3xl mx-auto mb-6">
              At <span className="font-bold text-[#09b850]">QueryMate</span>,
              we are dedicated to offering a diverse range of premium-quality products 
              to cater to the needs of our customers. Whether you are looking for 
              innovative gadgets, essential tools, or everyday accessories, our store 
              ensures you have the right products to enhance your experience.
            </p>
  
            <div 
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            data-aos-once="true"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
  
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
                <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
                <p>
                  Discover a wide selection of top-quality products crafted to meet 
                  high standards and ensure customer satisfaction.
                </p>
              </div>
  
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
                <h3 className="text-xl font-bold mb-2">Expertly Curated</h3>
                <p>
                  Benefit from our carefully curated product selection tailored to 
                  match your preferences and requirements.
                </p>
              </div>
  
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
                <h3 className="text-xl font-bold mb-2">Wide Variety</h3>
                <p>
                  Explore a broad range of products spanning multiple categories, 
                  ensuring you always find exactly what you&apos;re looking for at QueryMate.
                </p>
              </div>
  
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default About;
