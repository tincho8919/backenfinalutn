import mongoose from "mongoose";
const Schema = mongoose.Schema




const ProductSchema = new Schema(
  {
    nombre: { type: String },
    precio: { type: Number },
    stock: { type: Number },
    descripcion: { type: String }
  },
  { collection: 'Product' }
)

export default mongoose.model('ProductModel', ProductSchema)