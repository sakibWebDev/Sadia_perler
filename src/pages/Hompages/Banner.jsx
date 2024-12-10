import Image from "next/image";
import bannerimg from "@/../public/assets/images/banner.png"

const Banner = () => {
    return (
        <div className="hero bg-[#FFF8F5] min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">BEAUTY SALON <br/> FOR EVERY WOMEN</h1>
            <p className="py-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat 
            </p>
            <button type="button" className="text-white  bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2">Get an Appointment</button>
    
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <Image src={bannerimg} alt="Banner page image load" width={850} height={750} />
          </div>
        </div>
      </div>
    );
};

export default Banner;