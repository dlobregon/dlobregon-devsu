import { useState, useEffect } from 'react'
import bancoLogo from '../../assets/MainPichincha.svg'
import { oneYearAfter, isBefore } from '../../utils/Date'


const ProductForm = ({ currentProduct, isNew, saveProduct, editProduct }) => {

    const initialErrors = {
        id: isNew,
        name: isNew,
        description: isNew,
        logo: isNew,
        'date_release': false,
    }

    const [product, setProduct] = useState(currentProduct)
    const [errors, setErrors] = useState(initialErrors)

    const [formError, setFormError] = useState(isNew)

    const errorMessages = {
        id: 'El tamaño del ID debe ser mínimo 3 y máximo 10 caracteres',
        name: 'El tamaño del nombre debe ser mínimo 3 y máximo 10 caracteres',
        description: 'El tamaño de la descripción debe ser mínimo 10 y máximo 200 caracteres',
        logo: 'Se requiere una cadena válida',
        'date_release': 'La fecha no puede ser menor a la fecha de hoy',
    }


    const checkRules = (field, content) => {
        let newErrors = { ...errors }
        switch (field) {
            case 'id':
                newErrors.id = content.length < 3 || content.length > 10
                break
            case 'name':
                newErrors.name = content.length < 3 || content.length > 10
                break
            case 'description':
                newErrors.description = content.length < 10 || content.length > 200
                break
            case 'logo':
                let regex = new RegExp(/^(http|https):\/\/[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})\/.+(\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF))$/i
                )
                newErrors.logo = regex.test(content) == false
                setErrors(newErrors)
                break
            case 'date_release':
                newErrors['date_release'] = isBefore(content)
                setErrors(newErrors)
                isBefore(content)
                break
        }
        const isValid = (newErrors.id || newErrors.name || newErrors.description || newErrors.logo || newErrors['date_release'])
        setFormError(isValid)
        setErrors(newErrors)
    }



    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'date_release') {
            const newReleaseDate = oneYearAfter(value)

            setProduct((prevFormData) => ({
                ...prevFormData,
                [name]: value,
                ['date_revision']: newReleaseDate,
            }));

            checkRules(name, value)
        } else {

            setProduct((prevFormData) => ({
                ...prevFormData,
                [name]: value,
            }));

            checkRules(name, value)
        }
    };

    useEffect(() => {
        if (currentProduct) {
            setProduct(currentProduct)
        }
    }, [currentProduct])

    const handleSave = () => {
        const productToSave = {...product,id:product.id.trim(), description:product.description.trim()}
        if (isNew) {
            saveProduct(productToSave)
        } else {
            editProduct(productToSave)
        }
    }

    const resetValues = () => {
        setProduct(currentProduct)
        setErrors(initialErrors)
        setFormError(isNew)
    }



    return (
        <div>
            <div className="header-form">
                <img src={bancoLogo} alt="banco" />
            </div>
            <div className='form-container'>
                <div className='form-content'>
                    <div className='form-header'>
                        <span>
                            Formulario de Registro
                        </span>
                    </div>
                    <div className='form-row'>
                        <div className="input-wrapper">
                            <label>ID</label>
                            <input value={product.id} disabled={!isNew} onChange={handleInputChange} type="text" name="id" style={{ border: errors['id'] ? '2px solid red' : '1px solid black' }} />
                            <span style={{ display: errors['id'] ? 'block' : 'none' }}>{errorMessages['id']}</span>
                        </div>
                        <div className="input-wrapper">
                            <label >Nombre</label>
                            <input value={product.name} onChange={handleInputChange} type="text" name="name" style={{ border: errors['name'] ? '2px solid red' : '1px solid black' }} />
                            <span style={{ display: errors['name'] ? 'block' : 'none' }} >{errorMessages['name']}</span>
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className="input-wrapper">
                            <label >Descripcion</label>
                            <input value={product.description} onChange={handleInputChange} type="text" name="description" style={{ border: errors['description'] ? '2px solid red' : '1px solid black' }} />
                            <span style={{ display: errors['description'] ? 'block' : 'none' }}>{errorMessages['description']}</span>
                        </div>
                        <div className="input-wrapper">
                            <label >Logo</label>
                            <input value={product.logo} onChange={handleInputChange} type="text" name="logo" style={{ border: errors['logo'] ? '2px solid red' : '1px solid black' }} />
                            <span style={{ display: errors['logo'] ? 'block' : 'none' }}>{errorMessages['logo']}</span>
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className="input-wrapper">
                            <label >Fecha liberacion</label>
                            <input value={product.date_release} onChange={handleInputChange} type="date" name="date_release" data-dateformat="YYYY-MM-DD" style={{ border: errors['date_release'] ? '2px solid red' : '1px solid black' }} />
                            <span style={{ display: errors['date_release'] ? 'block' : 'none' }}>{errorMessages['date_release']}</span>
                        </div>
                        <div className="input-wrapper">
                            <label >Fecha revision</label>
                            <input type="date" value={product.date_revision} onChange={handleInputChange} name="date_revision" disabled={true} />
                        </div>
                    </div>

                    <div className='form-row-buttons'>
                        <div id="form-button-container-left">
                            <button id="restart-button" onClick={resetValues} >Reiniciar</button>
                        </div>
                        <div id='form-button-container-right'>
                            <button id="send-button" onClick={handleSave} disabled={formError} >Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductForm