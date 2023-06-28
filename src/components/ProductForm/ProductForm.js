import {useState, useEffect} from 'react'
import bancoLogo from '../../assets/MainPichincha.svg'


const ProductForm = ({ currentProduct, isNew }) => {


    const[product, setProduct] = useState(currentProduct)

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if(name==='date_release') {
           const current_date = new Date(value)
           const updatedDate = new Date(current_date.getFullYear() + 1, current_date.getMonth(), current_date.getDate());
           const newReleaseDate = updatedDate.toISOString().substr(0, 10)

        setProduct((prevFormData) => ({
            ...prevFormData,
            [name]: value,
            ['date_revision']:newReleaseDate,
          }));
        } else {

        setProduct((prevFormData) => ({
            ...prevFormData,
            [name]: value,
          }));
        }
      };

    useEffect(()=>{
        if(currentProduct) {
            setProduct(currentProduct)
        }
    }, [currentProduct])
    
    const handleSave  = () => {
        if(isNew) {
            console.log('guardando')
        } else {
            console.log('editando')
        }
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
                            <input value={product.id} onChange={handleInputChange} type="text" name="id" />
                        </div>
                        <div className="input-wrapper">
                            <label >Nombre</label>
                            <input value={product.name} onChange={handleInputChange} type="text" name="name" />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className="input-wrapper">
                            <label >Descripcion</label>
                            <input value={product.description} onChange={handleInputChange} type="text" name="description" />
                        </div>
                        <div className="input-wrapper">
                            <label >Logo</label>
                            <input value={product.logo} onChange={handleInputChange} type="text" name="logo" />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className="input-wrapper">
                            <label >Fecha liberacion</label> 
                            <input value={product.date_release} onChange={handleInputChange} type="date" name="date_release" />
                        </div>
                        <div className="input-wrapper">
                            <label >Fecha revision</label>
                            <input type="date" value={product.date_revision} onChange={handleInputChange} name="date_revision" disabled={true} />
                        </div>
                    </div>

                    <div className='form-row-buttons'>
                        <div id="form-button-container-left">
                            <button id="restart-button">Reiniciar</button>
                        </div>
                        <div id='form-button-container-right'>
                            <button id="send-button" onClick={handleSave}>Enviar</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductForm