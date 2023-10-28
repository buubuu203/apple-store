import axiosClient from "./axiosClient";


export const getAllProductByCategoryId =(id)=>{
    return   axiosClient.get(`/api/categories/${id}/products`)


}

export const getProductById =(id)=>{
    return   axiosClient.get(`/api/products/${id}`)


}
