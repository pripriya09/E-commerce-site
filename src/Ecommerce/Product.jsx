import React, { useEffect } from 'react'
import { useContext } from 'react'
import { DataContext } from './Main'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart'; 
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';



function Product({ product }) {
    const { cart, setCart } = useContext(DataContext)

    function removeFromCart(e, item) {
        e.preventDefault();
        setCart(
          cart.filter((cartItem) => {
            return cartItem.id !== item.id;
          })
        );
      }

    useEffect(() => {
    if(localStorage.getItem("storeitem")){
   let cartItem = JSON.parse(localStorage.getItem("storeitem"))
      cartItem =[...cart]
    localStorage.setItem("storeitem",JSON.stringify(cartItem))
    }else if (cart.length>0) {
        localStorage.setItem("storeitem",JSON.stringify(cart))
    } 
    }, [cart])


    function addToCart(e, product) {
        e.preventDefault()
        setCart([...cart, product])
    }
    console.log(cart)

    function isProductAdded(product) {
        const productFound = cart.find((cartItem) => {
          return cartItem.id === product.id;
        });
        if (productFound === undefined) return false;
        else return true;
      }



    return (
        <div className='product'>
            <a href="">
                <img src={product.image} alt="" />
            </a>
            <h3>
                <a href="">{product.title}</a>
            </h3>
            <p className="price">
                  <CurrencyRupeeIcon /> <span>{product.price}</span>
                </p>


           {isProductAdded(product) ? (
        <a href="" className="cart" onClick={(e) => removeFromCart(e, product)}>
          Remove From <RemoveShoppingCartIcon />
        </a>
      ) : (
        <a href="" className="cart" onClick={(e) => addToCart(e, product)}>
          Add To <ShoppingCartIcon />
        </a>
      )}

        </div>
    )
}

export default Product
