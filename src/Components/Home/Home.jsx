import React, { useEffect,useState } from 'react'
import './Home.css'
import { getAll } from '../Api/Api'
import { Link } from 'react-router-dom'

function Home() {
    const [product, setproduct] = useState([])

    useEffect(() => {
        const fecthData = async()=>{
            const data = await getAll();
            setproduct(data)
        }
     
        fecthData()
    },
   
    [])
    
  return (
    <div className='product-grid'>
       {
        product.map((products)=>(

            <div className="product" key={products.id}>
        <img src={products.image} alt="" />
        <h1>{products.title}</h1>
        <p>
            <span className='price'>${products.price}</span>
        </p>
      
        <Link to={`/products/${products.id}`}>
        <button>Product Details</button>
        </Link>
        
        
    </div>
        ))
       } 
    
    </div>
  )
}

export default Home