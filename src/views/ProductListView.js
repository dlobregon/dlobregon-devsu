import { getProducts } from '../services/Api.js'
import { useEffect, useState } from 'react'

const ProductListView = () => {

    const [productList, setProductList] = useState([])

    const getProductList = async () => {
        try {
            const productListData = await getProducts()
            console.log(productListData)
            setProductList(productListData)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getProductList()

    }, [])

    return (
        <h1>Hola</h1>
    )

}

export default ProductListView