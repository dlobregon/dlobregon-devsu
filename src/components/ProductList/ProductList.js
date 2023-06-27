import ProductItem from "./ProductItem"

const ProductList = ({ products }) => {

    const headers = [
        'Logo',
        'Nombre del producto',
        'Descripción',
        'Fecha de liberación',
        'Fecha de Revisión',
        '',
    ]

    return (
       <table className="product-table">
            <thead>
                <tr>
                   {headers.map(header => <th key={header}>{header}</th>)}
                </tr>
            </thead>
            <tbody>
                {products.map(
                        product => <ProductItem key={product.id} product={product}/>
                )}
            </tbody>
       </table>
    )
}

export default ProductList