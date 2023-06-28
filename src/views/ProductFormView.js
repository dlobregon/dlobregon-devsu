import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import ProductForm from "../components/ProductForm/ProductForm"
import { validateProduct, saveProduct, editProduct } from "../services/Api"


const ProductFormView = () => {

    const productTemplate = {
        id: "", 
        name:"", 
        description:"", 
        logo:"",
        date_release: new Date().toISOString().substr(0, 10), 
        date_revision: "",
    }

    const { productId } = useParams()
    const [currentProduct, setCurrentProduct] = useState(productTemplate)
    const validateProductId = async (productId) => {
        try {
            const info = await validateProduct(productId)
            const foundvalue  =  info.find(element =>element.id === productId)
            setCurrentProduct({...foundvalue, date_release: new Date(foundvalue.date_release).toISOString().substr(0, 10),
            date_revision:new Date(foundvalue.date_revision).toISOString().substr(0, 10) })
        }
        catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (productId) {
            validateProductId(productId)
        }
    }, [productId])


    const saveNewProduct = async(product) => {
        try {
            const info = await saveProduct(product)
            console.log(info)
        }
        catch(err) {
            console.log(err)
        }
    }


    const editCurrentProduct = async (product)=>{
        try {
            const info = await editProduct(product)
            console.log(info)
        }
        catch(err) {
            console.log(err)
        }
    }



    return (<ProductForm currentProduct={currentProduct} isNew={productId? false: true} saveProduct={saveNewProduct} editProduct={editCurrentProduct}/>)
}

export default ProductFormView