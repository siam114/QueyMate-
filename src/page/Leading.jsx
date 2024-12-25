import { Link } from "react-router-dom";

const Leading = () => {
    return (
        <div className="bg-[#F4F3F0] pl-16">
            <h6 className="font-bold text-[#09b850] pt-10">WE ARE QueryMate</h6>
            <h4 className="py-3 text-3xl font-bold">Leading products & online store in Bangladesh</h4>
            <p className="pt-3 text-xl font-bold">SINCE 2020!</p>
            <p className="py-3 text-gray-600 w-10/12">Over the last 81 years, our focus has always been-and will continue to be-delivering a quality experience with our equipment. We understand that our products are an investment and we source them to keep pace with your own longterm fitness goals.</p>
            <p className="py-3 text-xl font-bold">OUR STRENGTH, OUR PARTNERS</p>
            <p className="py-3 text-gray-600">A diverse range of high-quality fitness products, carefully sourced from top brands worldwide, to cater to the unique preferences and goals of our valued customers. From cutting-edge equipment to essential fitness accessories, we aim to provide everything you need to elevate your fitness journey.</p>
            <div  className="text-[#09b850] underline font-bold pb-20">
            <Link to='/about'>MORE ABOUT US</Link>
            </div>
        </div>
    );
};

export default Leading;