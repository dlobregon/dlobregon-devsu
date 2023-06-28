/**
 * Code designed to handle API requests/methods
 */
const API_URL = 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products'

const headerSetup = {
    headers: {
        authorId: '1234567989'
    }
}

export const getProducts = async () => {
    try {
        const response = await fetch(API_URL, { ...headerSetup })
        if (response.status === 200) {
            const productList = await response.json()
            return productList
        } else {
            throw new Error('Failed to get products')
        }
    }
    catch (err) {
        throw err
    }
}


export const validateProduct = async (productId)=>{
    const editURL = `${API_URL}?id=${productId}`
    try {
        const response = await fetch(editURL, { ...headerSetup })
        if (response.status === 200) {
            const productInfo = await response.json()
            return productInfo
        } else {
            throw new Error(`Failed to get product ${productId}`)
        }
    }
    catch (err) {
        throw err
    }
}

export const saveProduct = async(product) => {
    
}
