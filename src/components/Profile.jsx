import ImageProfile from "../Images/Home/Profile/Image1.avif"

function Profile() {
  return (
   <div>
    <div className="flex sm:flex-row flex-col gap-8 justify-between sm:px-36 px-10 sm:py-20 pt-20 sm:pt-36">
        {/* Left div */}
        <div className="mt-10 sm:w-[45%]">
            <h1 className="text-4xl font-bold mb-4">Best Place For Shopping In Your Area</h1>
            <p className="text-2xl font-semibold mb-2">We got you everything that you need. visit us any whare and any time</p>
            <button className="bg-green-950 text-white px-20 py-2 text-2xl mt-2 rounded-[8px]">Explore More</button>
        </div>
        {/* Right div */}
        <div>
            <img className="w-[450px] rounded-lg" src={ImageProfile} alt="" />
        </div>
    </div>
   </div>
  )
}
export default  Profile;