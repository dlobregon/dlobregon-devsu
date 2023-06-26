/**
 * Code designed to handle API requests/methods
 */
const API_URL = 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/'
const headerSetup = {
    headers: {
        authorId: '1234567989'
    }
}


export const getProducts = async () => {
    const apiUrlResource = `${API_URL}bp/products`
    try {
        const response = await fetch(apiUrlResource, { ...headerSetup })
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

