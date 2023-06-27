const ProductItem = ({product}) => {
    return(
        <tr>
            <td>
                <img src={product.logo} alt={product.name}/>
            </td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.date_release}</td>
            <td>{product.date_revision}</td>
            <td>...</td>
        </tr>
    )
}

export default ProductItem