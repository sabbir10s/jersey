import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddToCard from "../../Components/AddToCard";

const ProductDetails = () => {
  const { productId } = useParams();
  const [products, setProducts] = useState([]);
  const [userName, setUserName] = useState("emon");
  const [number, setNumber] = useState("30");
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
    (product) => product.id === parseInt(productId)
  );
  // console.log(products, "All product");
  const { name, images, material, price } = singleProduct;
  console.log(singleProduct, "single product");
  return (
    <div className=" container mx-auto py-4">
      <div className="grid md:grid-cols-2 gap-20">
        <div className="relative">
          <div className="absolute top-44 left-10 border border-primary w-52">
            <h3 className=" uppercase text-[64px] text-white text-center ">
              {userName}
            </h3>
          </div>
          <div className="absolute top-36 right-10 border border-primary w-52">
            <h3 className=" uppercase text-[100px] text-white text-center ">
              {number}
            </h3>
          </div>
          <img className="w-full object-fill" src={images.two} alt="" />
        </div>
        <div>
          <h2>{name}</h2>
          <p>Material: {material}</p>
          <p>Price:{price}</p>
          <form action="">
            <input
              required={true}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="px-4 py-3  rounded-lg w-full focus:border-primary outline-none border"
              type="text"
              placeholder="Name"
            />
            <input
              required={true}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="px-4 py-3  rounded-lg w-full focus:border-primary outline-none border"
              type="number"
              placeholder="Number"
            />
          </form>
          <AddToCard product={singleProduct} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
