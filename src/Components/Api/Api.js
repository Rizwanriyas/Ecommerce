import axios from "axios";

const BaseUrl="http://fakestoreapi.com"

export const getAll = async ()=>{
    const response = await axios.get(`${BaseUrl}/products`)

    return response.data
}

export const getAllid = async (id)=>{
    const response = await axios.get(`${BaseUrl}/products/${id}`)

    return response.data
}

export const getAllimg = async (id)=>{
    const response = await axios.get(`${BaseUrl}/products/${id}/image`)

    return response.data
}