import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import Main from './Ecommerce/Main.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>,
)



  // const [cart, setCart] = useState(() =>{
  //   const addcarditem =localStorage.getItem("cart")
  //   return addcarditem ? JSON.parse(addcarditem):[]

  // })

  // useEffect(() => {
  //   localStorage.setItem('cart',JSON.stringify(cart))
  // }, [cart]);
