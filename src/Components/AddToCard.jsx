/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

const AddToCard = ({ product }) => {
  const { sizes, colors } = product;
  const [color, setColor] = useState(colors[0]);
  const [size, setSize] = useState(sizes[0]);

  const handleAddToCart = () => {
    const cartInfo = { size, color, product };
    console.log(cartInfo);
  };

  return (
    <div className=" space-y-4">
      <div>
        <p className="text-sm pb-2">
          Size<span className="text-red-600">*</span>
        </p>
        <div className="flex gap-4">
          {sizes.map((currentSize) => (
            <button
              onClick={() => setSize(currentSize)}
              className={`w-9 h-9 flex items-center justify-center border rounded-full hover:bg-gray-500 hover:text-white duration-300 text-sm ${
                size === currentSize ? " bg-gray-500 text-white" : ""
              }`}
              key={currentSize}
            >
              {currentSize}
            </button>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        {colors.map((currentColor, index) => {
          return (
            <button
              key={index}
              onClick={() => setColor(currentColor)}
              style={{ backgroundColor: currentColor }}
              className={`h-8 w-8 cursor-pointer  text-primary-500 flex items-center justify-center ${
                color === currentColor
                  ? "border-2 border-primary"
                  : "border-2 border-gray-400"
              }`}
            >
              {color == currentColor ? <FaCheck /> : null}
            </button>
          );
        })}
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-primary text-white hover:bg-primary-700 hover:shadow-md hover:shadow-primary/50 duration-300 px-10 py-2 rounded"
      >
        Add to card
      </button>
    </div>
  );
};

export default AddToCard;
