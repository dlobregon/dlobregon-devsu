/**
 * Code designed to handle API requests/methods
 */
const API_URL = 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products'

const headerSetup = {
    headers: {
        'authorId': '45', 
        'Content-Type': 'application/json'
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
    try {
        const response = await fetch(API_URL, {
            headers: {...headerSetup.headers}, 
            method: 'POST', 
            body: JSON.stringify(product) 
        })
        if (response.status === 200) {
            const result = await response.json()
            return result
        } else {
            throw new Error('Failed to save Product')
        }
    }
    catch (err) {
        throw err
    }
}


export const editProduct = async (product)=>{
    const editURL = `${API_URL}?id=${product.id}`
    try {
        const response = await fetch(editURL, {
            headers: {...headerSetup.headers}, 
            method: 'PUT', 
            body: JSON.stringify(product) 
        })
        if (response.status === 200) {
            const productInfo = await response.json()
            return productInfo
        } else {
            throw new Error(`Failed to get product ${product.id}`)
        }
    }
    catch (err) {
        throw err
    }
}


export const deleteProduct = async (product) => {
    const editURL = `${API_URL}?id=${product}`
    try {
        const response = await fetch(editURL, {
            headers: {...headerSetup.headers}, 
            method: 'DELETE',
        })
        if (response.status === 200) {
            const productInfo = await response.json()
            return productInfo
        } else {
            throw new Error(`Failed to delete product ${product}`)
        }
    }
    catch (err) {
        throw err
    }
}
