import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const [products, setProducts] = useState([]);
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
  const { name, images } = singleProduct;
  console.log(singleProduct, "single product");
  return (
    <div className=" container mx-auto py-4">
      <div className="grid md:grid-cols-2 gap-20">
        <div className="">
          <img className="w-full object-fill" src={images.two} alt="" />
        </div>
        <div>
          <h2>{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
