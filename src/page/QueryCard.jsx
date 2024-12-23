import PropTypes from 'prop-types';

const QueryCard = ({query}) => {
    const{
        productName,
        brand,
        productPhoto,
        title,
        boycott,
        date,
        count
      } = query
    return (
        <div className="flex justify-center items-center">
        <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden w-80 transform transition-transform duration-300 hover:scale-105">
          {/* Product Image */}
          <img
            src={productPhoto}
            alt={title}
            className="w-full h-48 object-cover"
          />
  
          {/* Product Details */}
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800">
              {productName}
            </h2>
            <p className="text-gray-500 mt-1">Brand: {brand}</p>
            <p className="text-gray-700 mt-2 text-sm">
              {boycott}
            </p>
  
            {/* Recommendation Count */}
            <p className="mt-3 text-gray-600">
              Recommendations:{" "}
              <span className="font-semibold text-blue-600">{count}</span>
            </p>
            <p>Date: {date}</p>
          </div>
  
          {/* Recommend Button */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300">
            <button className="transform scale-0 group-hover:scale-100 transition duration-300 bg-[#09b850] text-white py-2 px-4 rounded-md hover:bg-[#09b850] shadow-lg">
              Recommend
            </button>
          </div>
        </div>
      </div>
    );
};

QueryCard.propTypes ={
    query: PropTypes.object.isRequired, 
}

export default QueryCard;