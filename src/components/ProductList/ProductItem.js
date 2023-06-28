import React, { useState } from 'react';
import ContextMenu from './ContextMenu';

const ProductItem = ({product, setIndexForMenu, index, menuIndexVisible, actionHandler}) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
    
    const handleClick = (event) => {
        setIndexForMenu(index)
        event.preventDefault();
        setMenuVisible(true);
        const divRect = event.target.getBoundingClientRect();
        const xPos = divRect.left + divRect.width;
        const yPos = divRect.top;
        setMenuPosition({ top: yPos, left: xPos });
    };
  
    const handleHideContextMenu = () => {
        setMenuVisible(false);
    };
  
    const resetMenuIndex  = () => {
        setIndexForMenu(null)
    }

    return(
        <tr>
            <td onClick={resetMenuIndex}>
                <img src={product.logo} alt={product.name}/>
            </td>
            <td onClick={resetMenuIndex}>{product.name}</td>
            <td onClick={resetMenuIndex}>{product.description}</td>
            <td onClick={resetMenuIndex}>{new Date(product.date_release).toISOString().substr(0, 10) }</td>
            <td onClick={resetMenuIndex}>{new Date(product.date_revision).toISOString().substr(0, 10) }</td>
            <td>
                <div className="three-dot" onClick={handleClick}></div>
                { menuIndexVisible === index &&  menuVisible && (
                    <ContextMenu top={menuPosition.top} left={menuPosition.left} handleHide={handleHideContextMenu} actionHandler={actionHandler} productId={product.id}/>
                )}
            </td>
        </tr>
    )
}

export default ProductItem