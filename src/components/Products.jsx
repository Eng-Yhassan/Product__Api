import ImageProfile from "../Images/Home/Profile/Image1.avif"

function Products(props) {
  return (
   <div className="">
        <div className="border-2 border-green-950 w-[300px]  mb-10 p-2">
            <img className="w-[300px] h-[200px]" src={props.productImage} alt="" />

            <div className="flex justify-between px-4 mt-4 mb-2">
            <h1 className="text-3xl font-semibold">{props.productName}</h1>
            <p className="text-3xl font-semibold">{props.productPrice}$</p>
            </div>
            <button className="bg-green-950 text-white w-full py-2">Add to cart</button>
        </div>
   </div>
  )
}
export default  Products;