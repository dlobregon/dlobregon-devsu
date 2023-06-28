import { useState } from "react"
import ProductItem from "./ProductItem"
import '../../styles/ProductTable.css'


const ProductList = ({ products, actionHandler }) => {

    const headers = [
        'Logo',
        'Nombre del producto',
        'Descripción',
        'Fecha de liberación',
        'Fecha de Revisión',
        '',
    ]
    const [menuIndexVisible, setMenuIndexVisible] = useState(null)

    const setIndexForMenu = (index) => {
        setMenuIndexVisible(index);
    }



    return (
        <table  className="product-table">
            <thead>
                <tr>
                    {headers.map(header => <th key={header}>{header}</th>)}
                </tr>
            </thead>
            <tbody>
                {products.map(
                    (product, index) => <ProductItem key={product.id} product={product} setIndexForMenu={setIndexForMenu} index={index} menuIndexVisible={menuIndexVisible} actionHandler={actionHandler} />
                )}
            </tbody>
        </table>
    )
}

export default ProductList