import React , {useEffect} from "react";
import AddProduct from "./AddProduct";
import {Flex,Grid} from "@chakra-ui/react"
import Product from "./Product";
import axios from "axios";
import { useState } from "react";
import styles from "./products.module.css"

const Products = () => {
  const [product,showProduct]=useState([]);
  console.log(product)

  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;

  useEffect(() => {
    const showProducts = async () => {
      let res= await axios.get("http://localhost:8080/products?_page=1");
      // console.log(res.data)
      showProduct(res.data);
    }
    showProducts();
  },[])

  return (
    <Flex>
       {/* AddProduct */}
       <div className={styles.divstyle}>
      <AddProduct />
      
      <Grid>{/* List of Products */}
      {product.map((list)=> {
        return <Product title={list.title} image={list.imageSrc} category={list.category} price={list.price}
        gender={list.gender}/>
      })}
      </Grid>
      </div>
      
      {/* Pagination */}
    </Flex>
  );
};

export default Products;
