const ContextMenu = ({top, left, handleHide, actionHandler, productId}) =>{
    const delHandler = ()=>{
        actionHandler(productId, 1)
    }

    const editHandler = ()=> {
        actionHandler(productId, 2)
    }
    return(
        <div className="menu-container"
        style={{
            position: 'fixed',
            top: top,
            left: left,
            backgroundColor: 'white',
            padding: '8px',
            zIndex: 1,
        }}
        onClick={handleHide}
        >
            <div className="menu-item-eliminar" onClick={delHandler} >Eliminar</div>
            <div className="menu-item-editar" onClick={editHandler}>Editar</div>
        </div>
    )
}

export default ContextMenu