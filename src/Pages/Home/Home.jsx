import { useEffect, useState } from "react";
import ProductCard from "../../Components/Products/ProductCard";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const apiUrl =
    "https://raw.githubusercontent.com/sabbir10s/jersey/main/public/Data.json";

  // Make a GET request using Axios
  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        const jerseys = response.data;
        setProducts(jerseys);
        // console.log("Jersey data:", jerseys);
      })
      .catch((error) => {
        // Handle errors during the request
        console.error("Error fetching jersey data:", error);
      });
  }, []);

  if (products.length === 0) {
    return "Loading...";
  }
  console.log(products);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
