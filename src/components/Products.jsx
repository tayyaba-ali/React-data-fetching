
import { useState, useEffect } from "react"
import axios from "axios"
import "./Product.css"
import { Oval } from 'react-loader-spinner'

const Products = () => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const reponse = await axios.get("https://dummyjson.com/products")
                setProducts(reponse.data.products)

            }
            catch (error) {
                console.log(error)
                setError("Failed to fetch data ")
            }
            finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    if (error) {
        return (
            <div>
                <h1>{error}</h1>
            </div>
        )
    }
    if (loading) {
        return (
           <div  className="loader">
             <Oval
                height={80}
                width={80}
                color="#4fa94d"
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
           </div>
        )
    }

    return (
        <div className="main">
            {products.map(({ id, title, description, thumbnail }) => {
                return (
                    <div key={id} className="product">
                        <img src={thumbnail} alt="" />
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Products
