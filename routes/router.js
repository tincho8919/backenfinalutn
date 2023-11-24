import express from 'express'
import { createProduct, deleteProduct, getAllProduct, getProduct, updateProduct } from '../controllers/ProductController.js'

const routes = express.Router()

routes.get('/', getAllProduct)
routes.get('/:id', getProduct)
routes.post('/', createProduct)
routes.put('/:id', updateProduct)
routes.delete('/:id', deleteProduct)



export default routes