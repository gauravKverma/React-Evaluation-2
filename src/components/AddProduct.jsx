import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  useDisclosure,
  Button,
  Input,
  Select,
  Radio,
  RadioGroup,
  ModalOverlay
} from '@chakra-ui/react'
// import styles from "./addproduct.module.css"

const AddProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef();
  const [list,setList]=useState({
    title:"",
    category:"",
    gender:"male",
    imageSrc:"https://picsum.photos/seed/picsum2/421/261",
    price:"",
  })
  // console.log(list)
  // TODO: Remove below const and instead import them from chakra
  const handleData = (e) => {
    let {name,value} = e.target;
    // console.log(e)
    setList({
      ...list,[name]:value,
    })
  }

  const pushData=async (list) => {
    // e.preventDefault();
    // console.log(list)
    const option = {
      method:"POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(list),
    }
    let res= await fetch("http://localhost:8080/products",option);
    let data=await res.json();
    // console.log(data)
  }

  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen}>Add New Product</Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalBody pb={6}>
          <label htmlFor="">Title</label>
          <Button onClick={onClose}>X</Button> <br />
          <Input data-cy="add-product-title" onChange={handleData} name="title" value={list.title} /> <br />
          <label htmlFor="">Category</label> <br />
          <Select data-cy="add-product-category" onChange={handleData} name="category" >
            <option>Category</option>
            <option data-cy="add-product-category-shirt" value="shirt">Shirt</option>
            <option data-cy="add-product-category-pant" value="pant">Pant</option>
            <option data-cy="add-product-category-jeans" value="jeans">Jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <label htmlFor="">Gender</label> <br />
            <Radio data-cy="add-product-gender-male" value="Male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <label htmlFor="">Price</label> <br />
          <Input data-cy="add-product-price" onChange={handleData} name="price" value={list.price}  /> <br />
          <Button data-cy="add-product-submit-button" onClick={()=>pushData(list)}>Create</Button>
          
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
