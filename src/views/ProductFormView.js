import { useState, useEffect } from "react"
import { useParams, useNavigate } from 'react-router-dom';
import ProductForm from "../components/ProductForm/ProductForm"
import { validateProduct, saveProduct, editProduct } from "../services/Api"
import { oneYearAfter, formatDate } from "../utils/Date";


const ProductFormView = () => {
    
    const navigation = useNavigate()
    const productTemplate = {
        id: "",
        name: "",
        description: "",
        logo: "",
        date_release: formatDate(new Date()),
        date_revision: oneYearAfter(formatDate(new Date())),
    }

    const { productId } = useParams()
    const [currentProduct, setCurrentProduct] = useState(productTemplate)
    const validateProductId = async (productId) => {
        try {
            const info = await validateProduct(productId)
            const foundvalue = info.find(element => element.id === productId)
            setCurrentProduct({
                ...foundvalue, date_release: formatDate(foundvalue.date_release),
                date_revision: formatDate(foundvalue.date_revision)
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (productId) {
            validateProductId(productId)
        }
    }, [productId])


    const saveNewProduct = async (product) => {
        try {
            await saveProduct(product)
            navigation('/')
        }
        catch (err) {
            console.log(err)
        }
    }


    const editCurrentProduct = async (product) => {
        try {
            await editProduct(product)
            navigation('/')
        }
        catch (err) {
            console.log(err)
        }
    }



    return (<ProductForm currentProduct={currentProduct} isNew={productId ? false : true} saveProduct={saveNewProduct} editProduct={editCurrentProduct} />)
}

export default ProductFormView