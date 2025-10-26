import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SingleProduct = () => {
    const params = useParams()

    useEffect(() => {
        const SingleProduct = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
                console.log(response);

            } catch (error) {
                console.log(error);

            }
        }
        SingleProduct()

    }, [])

    return (
        <div>
            SingleProduct
        </div>
    )
}

export default SingleProduct
