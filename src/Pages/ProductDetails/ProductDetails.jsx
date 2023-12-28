import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddToCard from "../../Components/AddToCard";

const ProductDetails = () => {
  const { productId } = useParams();
  const [products, setProducts] = useState([]);
  const [jerseyName, setJerseyName] = useState("Emon");
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
  const { name, images, material, price, details } = singleProduct;
  const storedCartInfoString = localStorage.getItem("jersey");
  const storedCartInfo = JSON.parse(storedCartInfoString);
  console.log(storedCartInfo);
  return (
    <div className=" container mx-auto py-4">
      <div className="grid md:grid-cols-2 gap-20">
        <div className="relative">
          <div className="absolute top-48 left-6 border border-primary w-56 text-center">
            <h3 className=" uppercase text-[40px] text-white text-center w-full ">
              {jerseyName}
            </h3>
          </div>
          <div className="absolute top-36 right-10 border border-primary w-52">
            <h3 className=" uppercase text-[80px] text-white text-center ">
              {jerseyNumber}
            </h3>
          </div>
          <img
            className="w-full object-fill"
            src={storedCartInfo ? storedCartInfo.image : images.two}
            alt=""
          />
        </div>
        <div>
          <div className=" space-y-2">
            <h2 className="text-3xl font-semibold">{name}</h2>
            <button className="bg-gray-200 px-2 py rounded-full">
              <span className="font-semibold">Material:</span> {material}
            </button>
            <div>
              {details.features.map((feature, idx) => (
                <ul className="list-disc ml-4 text-sm text-gray-600" key={idx}>
                  <li>{feature}</li>
                </ul>
              ))}
            </div>
            <p className="text-gray-600 text-sm mt-4">{details.description}</p>
          </div>
          <p className="text-2xl text-primary font-semibold pt-4">{price}Tk</p>
          <form className=" flex flex-col md:flex-row gap-4 py-3" action="">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                required={true}
                value={jerseyName}
                onChange={(e) => setJerseyName(e.target.value)}
                className="max-w-[200px] px-4 py-2 rounded w-full border border-primary/50 focus:border-primary outline-none "
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="number">Jersey Number</label>
              <input
                id="number"
                required={true}
                value={jerseyNumber}
                onChange={(e) => setJerseyNumber(e.target.value)}
                className="max-w-[200px] px-4 py-2 rounded w-full border border-primary/50 focus:border-primary outline-none "
                type="jerseyNumber"
                placeholder="jerseyNumber"
              />
            </div>
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
