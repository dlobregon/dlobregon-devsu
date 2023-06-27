import { getProducts } from '../services/Api.js'
import { useEffect, useState } from 'react'
import ProductList from '../components/ProductList/ProductList.js'

const ProductListView = () => {

    const [productList, setProductList] = useState([])

    const getProductList = async () => {
        try {
            const productListData = await getProducts()
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
        <> 
            <h1>Lista de productos</h1>
            <ProductList products={productList} />
        </>
    )

}

export default ProductListView