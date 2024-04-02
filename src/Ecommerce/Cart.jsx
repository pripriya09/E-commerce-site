import React, {useState, useContext,useEffect } from 'react';
import { DataContext } from './Main';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

function Cart() {
  const { cart, setCart } = useContext(DataContext);
  const [quantity,setQuantity] = useState({})

  useEffect(() => {
    const handleVaue =cart.reduce((acc,ind,indlength)=>{
     acc[indlength] =1
     return acc;
    },{});
    setQuantity(handleVaue)
  }, [cart])


  useEffect(() => {
    if (localStorage.getItem("storedCart")) {
      let cartFromLS = JSON.parse(localStorage.getItem("storedCart"));
      cartFromLS = [...cart];
      localStorage.setItem("storedCart", JSON.stringify(cartFromLS));
    } else if (cart.length){
      localStorage.setItem("storedCart", JSON.stringify(cartFromLS));
    } 
  }, [cart]);

 function incrementqty(index){
  const incrementquantity = {...quantity}
  incrementquantity[index]=(incrementquantity[index]|| 0)+ 1
  setQuantity(incrementquantity)
 }
  
 function decrementqty (index){
  const decrementquantity ={...quantity}
  decrementquantity[index] = (decrementquantity[index]|| 2) -1 || 1 
  setQuantity(decrementquantity)
 }

 function removeFromCart(e, item) {
  e.preventDefault();
  setCart(
    cart.filter((cartItem) => {
      return cartItem.id !== item.id;
    })
   
  );
  // localStorage.setItem("storedCart", JSON.stringify())
}

 

  return (
    <>
      <div className="display-cart">
        {cart.map((item, index) => {
          return (
            <div key={index} className="cart-item">
              <div className="left">
                <img src={item.image} alt="" />
              </div>
              <div className="right">
                <h4>{item.title}</h4>
                <p className="price">
                  <CurrencyRupeeIcon /> <span>{item.price*quantity[index]}</span>
                </p>
                <a
                  href=""
                  className="cart"
                  onClick={(e) => removeFromCart(e, item)}
                >
                    Remove From  <RemoveShoppingCartIcon />
                </a>
                <div className='counter'>
   <button onClick={()=>incrementqty(index)}>+</button>
      <p>{quantity[index]}</p>
      <button onClick={()=>decrementqty(index)}>-</button>
     </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}


export default Cart;
