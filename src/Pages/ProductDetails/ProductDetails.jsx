import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddToCard from "../../Components/AddToCard";

const ProductDetails = () => {
  const { productId } = useParams();
  const [products, setProducts] = useState([]);
  const [jerseyName, setJerseyName] = useState("emon");
  const [jerseyNumber, setJerseyNumber] = useState("30");
  const apiUrl =
    "https://raw.githubusercontent.com/sabbir10s/jersey/main/public/Data.json";

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        const jerseys = response.data;
        setProducts(jerseys);
      })
      .catch((error) => {
        console.error("Error fetching jersey data:", error);
      });
  }, []);

  if (products.length === 0) {
    return "Loading...";
  }
  const singleProduct = products.find(
    (product) => product._id === parseInt(productId)
  );
  // console.log(products, "All product");
  const { name, images, material, price, details } = singleProduct;
  console.log(singleProduct, "single product");
  return (
    <div className=" container mx-auto py-4">
      <div className="grid md:grid-cols-2 gap-20">
        <div className="relative">
          <div className="absolute top-44 left-10 border border-primary w-52">
            <h3 className=" uppercase text-[64px] text-white text-center ">
              {jerseyName}
            </h3>
          </div>
          <div className="absolute top-36 right-10 border border-primary w-52">
            <h3 className=" uppercase text-[100px] text-white text-center ">
              {jerseyNumber}
            </h3>
          </div>
          <img className="w-full object-fill" src={images.two} alt="" />
        </div>
        <div>
          <div className=" space-y-1">
            <h2 className="text-3xl font-semibold">{name}</h2>
            <p>Material: {material}</p>
            <p>{details}</p>
          </div>
          <p className="text-2xl text-primary font-semibold py-2">{price}</p>
          <form className="max-w-[200px]" action="">
            <label htmlFor="name">Name</label>
            <input
              required={true}
              value={jerseyName}
              onChange={(e) => setJerseyName(e.target.value)}
              className="px-4 py-2 rounded w-full focus:border-primary outline-none border"
              type="text"
              placeholder="Name"
            />
            <label htmlFor="number">Jersey Number</label>
            <input
              required={true}
              value={jerseyNumber}
              onChange={(e) => setJerseyNumber(e.target.value)}
              className="px-4 py-2 rounded w-full focus:border-primary outline-none border"
              type="jerseyNumber"
              placeholder="jerseyNumber"
            />
          </form>
          <div>
            <AddToCard
              product={singleProduct}
              jerseyName={jerseyName}
              jerseyNumber={jerseyNumber}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
