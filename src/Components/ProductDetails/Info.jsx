import React, { useState,useEffect } from 'react'
import './Info.css'
import { getAllid } from '../Api/Api'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Info() {
    const [information, setinformation] = useState({})
    const {id}=useParams()

    useEffect(() => {
      const fecthId = async()=>{
        const data = await getAllid(id)
        setinformation(data);
       
      }
      fecthId()
    }, [id])
    const handleBuynow = ()=>{
        alert("Out of stock")
    }
    
  return (
    <div className='container-details-product'>
        <img src={information.image} alt="" className='product-img'/>
    <div className="product-info">
        <h2 className='product-title'>
            {information.title}
        </h2>
        <p className="product-discription">
            {information.description}
        </p>
        <p className='product-price'>
            ${information.price}
        </p>
        <button className='buy-now-btn' onClick={handleBuynow}>Buynow</button>
        <Link to={'/'}  style={{textDecoration:"none",color:"#fff"}}>
        <button className='go-back-btn'>go back</button>
        </Link>
    </div>
    </div>
  )
}

export default Info