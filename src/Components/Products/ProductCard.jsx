/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, name, images } = product;
  const navigate = useNavigate();
  const handleProductDetails = () => {
    navigate(`/${id}`);
  };
  return (
    <Link onClick={handleProductDetails}>
      <div className="max-w-[300px] h-[300px]">
        <img className="w-full h-full object-cover" src={images.one} alt="" />
      </div>
      <h5>{name}</h5>
    </Link>
  );
};

export default ProductCard;
