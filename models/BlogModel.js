import mongoose from "mongoose";
const Schema = mongoose.Schema




const blogSchema = new Schema(
  {
    
    nombre: { type: String },
    titulo: { type: String },
    cargo: { type: String },
    salario: { type: Number }
  },
  { collection: 'blogs' }
)

export default mongoose.model('BlogModel', blogSchema)