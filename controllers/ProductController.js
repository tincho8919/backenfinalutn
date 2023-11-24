
//importamos el Modelo
import ProductModel from "../models/ProductModel.js";

//** Métodos para el CRUD **/

//Mostrar todos los product
export const getAllProduct = async (req, res) => {
    try {
        const Product = await ProductModel.find()
        res.status(200).json(Product)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un product
export const getProduct = async (req, res) => {
        try {
            const id = req.params.id
            await ProductModel.findById( {_id:id} ).then( (Product) => {
                res.status(200).json(Product)
            })        
        } catch (error) {
            res.json( {message: error.message} )
        }
}
//Crear un product
export const createProduct = async (req, res) => {
    try {
       await ProductModel.create(req.body)
       res.status(200).json({
           "message":"¡Product creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un product
export const updateProduct = async (req, res) => {
    try {
        const id = req.params.id
        await ProductModel.updateOne({_id: id}, req.body).then( res => {
            console.log(res)
        })
        res.status(200).json({
            "message":"¡Product actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Eliminar un product
export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id
        await ProductModel.deleteOne({ _id : id }).then( res => {
            console.log(res)
        })
        res.status(200).json({
            "message":"¡Product eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}



