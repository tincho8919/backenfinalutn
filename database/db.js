import mongoose from 'mongoose'

import dotenv from 'dotenv';
dotenv.config();


const PORT = process.env.PORT || 8080
const DB_NAME = process.env.DB_NAME
const DB_PASSWORD = process.env.DB_PASSWORD
const CONNECTION_URL = `mongodb+srv://tincho8919:${DB_PASSWORD}@cluster0.6ffhqdi.mongodb.net/${DB_NAME}`


// Configura la opción strictQuery
mongoose.set('strictQuery', false);

const db = mongoose.connect(CONNECTION_URL,  {
    useNewUrlParser: true,
})
.then(() =>{
    console.log('conexion exitosa!')
})
.catch((err) =>{
    console.error(err)
})


export default db