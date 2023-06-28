import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../services/Api.js'
import bancoLogo from '../assets/MainPichincha.svg'
import ProductList from '../components/ProductList/ProductList.js'
import DropdownPagination from '../components/ProductList/DropdownPagination.js'

const ProductListView = () => {


    const [productList, setProductList] = useState([])
    const [filteredProducts,setFilteredProducts] = useState([])
    const paginationOptions = ['Todos', 5]
    const [numberOfRows,setNumberOfRows] = useState('Todos')
    const [keywordSearch, setKeywordSearch] = useState('')


    const navigate =  useNavigate()

    const handleRows = (rows) => {
        setNumberOfRows(rows)
        controlResult(null,rows)
    }

    const handleSearch = (event) => {
        const keyword  = event.target.value
        setKeywordSearch(keyword)
        controlResult(keyword,null)
    }

    const createProduct  = () => {
        navigate('/create')
    }

    const controlResult= (keyword, rows) =>{

        let validKeyword = keyword!=null? keyword: keywordSearch
        let validRows = rows!=null? rows: numberOfRows
        console.log(productList.length)
        const newFilteredProducts = validKeyword === ''? [...productList]:productList.filter((product)=> product.name.includes(validKeyword))
        console.log('1',validKeyword,validRows, newFilteredProducts.length)

        if(validRows === 'Todos') {
            setFilteredProducts(newFilteredProducts)

        } else if (Number(validRows) === 5 && newFilteredProducts.length > Number(validRows)){
            setFilteredProducts(newFilteredProducts.splice(0,Number(validRows)))

        } else {
            setFilteredProducts(newFilteredProducts)
        }
    }



    const actionHandler = (productId, option) => {
        if(option===1) {
            console.log('delete', productId)
        } else {
            console.log('edit', productId)
            navigate(`edit/${productId}`)
        }
    }

    const getProductList = async () => {
        try {
            const productListData = await getProducts()
            setProductList(productListData)
            setFilteredProducts(productListData)

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
            <div className='header'>
                <img src={bancoLogo} alt="banco" />
            </div>
            <div className='container'>
                <div className='table-options'>
                    <input type='string' placeholder='Search...' value={keywordSearch} onChange={handleSearch}></input>
                    <button onClick={createProduct}>Agregar</button>
                </div>
                <div className='table-section'>
                    
                    <div className='product-table-container'>
                        <ProductList products={filteredProducts}  actionHandler={actionHandler}/>
                        
                    </div>

                    <div className='table-pagination'>
                        <div id='separator'></div>
                        <div id='separtor-options'>
                            <span> {filteredProducts.length} Resultados</span>
                            <DropdownPagination options={paginationOptions} setResults={handleRows} />
                        </div>
                    </div>
                </div>

            </div>
         
            
        </>
    )

}

export default ProductListView