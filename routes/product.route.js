import express from 'express';
import {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct } from '../controllers/product.controller.js';


  const productRoute = express.Router();  

  productRoute.post('/', createProduct);
  productRoute.get('/',getAllProduct);
  productRoute.get('/',getSingleProduct);
  productRoute.put('/',updateProduct);
  productRoute.delete('/',deleteProduct);

  export default productRoute