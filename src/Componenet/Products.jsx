import React from "react";
import Product from "./Product";

function Products() {
  var products = [
    {
      name: "Arqitel",
      description:
        "hello everyone from the world with the following products and products available for purchase and use",
      live: true,
      case: false,
    },
    {
      name: "ttr",
      description:
        "hello everyone from the world with the following products and products available for purchase and use",
      live: true,
      case: false,
    },
    {
      name: "yir 2024",
      description:
        "hello everyone from the world with the following products and products available for purchase and use",
      live: true,
      case: true,
    },
    {
      name: "yahoo!",
      description:
        "hello everyone from the world with the following products and products available for purchase and use",
      live: true,
      case: true,
    },
  ];
  return (
    <div>
      {products.map((elem,index)=> <Product val ={elem} />)}
    </div>
  );
}

export default Products;
