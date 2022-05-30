import React,{useEffect} from "react";
import { Text,Image,Box,Stack,Heading,Tag,TagLabel } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

const Product = ({title,image,category,price,gender}) => {
  // const [product,showProduct]=useState([]);
  // const [pro, setPro] = useState()
  // console.log(pro)
  // TODO: Remove below const and instead import them from chakra

// useEffect(() => {
//   const showProducts = async () => {
//     let res= await axios.get("http://localhost:8080/products?_page=1");
//     // console.log(res.data)
//     showProduct(res.data);
//   }
//   showProducts();
// },[])


  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" src={image}/>
      <Text data-cy="product-category">{category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{title}</Heading>
      <Box data-cy="product-price">{price}</Box>
    </Stack>
  );
};

export default Product;
