import { useState } from 'react';
import { FaShoppingBasket } from "react-icons/fa";
import '../Styles/NavBar.css'


export default function CartWidget() {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
  };

  return (
    <>
    
      <div className="Carrito" onClick={handleClick}><FaShoppingBasket style={{color: 'black' , fontSize: '25px',position:'relative' , top: '9px', right:'7px' }}/>{contador} </div>
    </>
  );
}
