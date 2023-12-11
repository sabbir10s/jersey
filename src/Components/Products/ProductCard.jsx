const ProductCard = ({ product }) => {
  const { _id, name, images } = product;
  const navigate = useNavigate();
  const handleProductDetails = () => {
    navigate(`/product/${_id}`);
  };
  return (
    <div>
      <div className="max-w-[300px] h-[300px]">
        <img className="w-full h-full object-cover" src={images.one} alt="" />
      </div>
      <h5>{name}</h5>
    </div>
  );
};

export default ProductCard;
