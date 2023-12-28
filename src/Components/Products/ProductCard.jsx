/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, name, images, price } = product;
  const navigate = useNavigate();
  const handleProductDetails = () => {
    navigate(`/${_id}`);
  };
  return (
    <div className="rounded-lg duration-300 transition ease-in  relative border border-transparent hover:shadow-lg hover:shadow-primary/40 hover:border-primary-400 group text-start">
      <div>
        <div>
          <div className="w-full h-[250px] rounded-t">
            <img
              src={images.one}
              className=" w-full h-full object-fill rounded-t"
              alt=""
            />
          </div>
          <div className="space-y-1 p-2">
            <Link
              to={`/${_id}`}
              className="text-secondary font-semibold text-[12px] md:text-[18px]"
            >
              {name}
            </Link>
            <div className="flex justify-between items-center pb-4">
              <p className="flex items-center gap-2">
                <span className="text-primary text-lg font-semibold">
                  ${price}
                </span>
                <span className="text-gray-500 text-base">
                  <del>${200}</del>
                </span>
              </p>
            </div>
            <button
              onClick={handleProductDetails}
              className=" rounded-[5px] py-[4px] md:py-[9px] w-full text-white bg-primary duration-300 invisible group-hover:visible"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
