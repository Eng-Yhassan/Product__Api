import { useEffect, useState } from "react";
import Products from "../components/Products";
import Profile from "../components/Profile";
import axios from "axios";
import Footer from "../components/Footer";


function Home() {
    const [Data, setData] = useState([])

    const handleProducts = () => {
        axios.get("https://fakestoreapi.com/products").then((response) => {
            setData(response.data)
        })
    }
    useEffect(() => {
        handleProducts()
    },[])
    return (
        <div>
            <Profile />

            <div className="flex flex-wrap sm:gap-12 gap-2 justify-center mt-12 pt-20 pb-24">

                {
                    Data.slice(10,18).map((item) => {
                        return (
                            <div>
                                <Products productImage={item.image} productName={item.category} productPrice={item.price} />
                            </div>
                        )
                    })

                }
            </div>

            <Footer />
        </div>
    )
}

export default Home;