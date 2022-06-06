import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product/Product";


const Products = () => {

  const [products, setproducts] = useState([])

  useEffect(() => {
    const fetchproducts = async()=>{
      fetch("http://localhost:8080/products")
      .then((r)=> r.json())
      .then((d)=> setproducts(d))
    }
    fetchproducts();
  }, [])
  

  return <div>Products:{" "}
  <div>
    {products.map((p)=>(
      <Link to={`/products/${p.id}`}>{p.name}<div>
        <Product/>
        {p.description}</div></Link>
    
    ))}
  </div>

 
  </div>;
};

export default Products;
