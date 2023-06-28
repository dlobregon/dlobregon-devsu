import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import ProductForm from "../components/ProductForm/ProductForm"
import { validateProduct } from "../services/Api"


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
            setCurrentProduct({...info[0], date_release: new Date(info[0].date_release).toISOString().substr(0, 10),
            date_revision:new Date(info[0].date_revision).toISOString().substr(0, 10) })
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

    return (<ProductForm currentProduct={currentProduct} isNew={productId? false: true}/>)
}

export default ProductFormView