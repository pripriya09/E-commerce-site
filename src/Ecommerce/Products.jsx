import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from './Product';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(result => setProducts(result.data))
    }, [])

    return (
        <>
            <div className="products">
                {
                    products.map((product, index) => {
                        return <Product product={product} key={index} />
                    })
                }
            </div>
        </>
    )
}

export default Products
