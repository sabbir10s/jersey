import { useNavigate } from "react-router-dom";
import { Data } from "../../../public/Data";
import ProductCard from "../../Components/Products/ProductCard";

const Home = () => {
  const navigate = useNavigate();
  const handleDetails = () => {
    navigate("/");
  };
  return (
    <div className="container mx-auto">
      <h2 className="text-xl lg:text-3xl text-primary font-semibold text-center py-4">
        All Of our Jerseys
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
        {Data.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
