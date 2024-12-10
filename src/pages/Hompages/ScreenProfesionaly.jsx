import Image from "next/image";
import imgprofession from "@/../public/assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png"

const ScreenProfesionaly = () => {
    return (
        <div className=" grid grid-cols-1 lg:grid-cols-2   items-center">
           
            <div>
                    <Image  className=" image-full p-8" src={imgprofession} alt=" image for professtion "/> 
            </div>

        
            <div className="ml-12 space-y-8">
                <h1 className="text-4xl font-bold ">Let us handle your <br/> screen <span className="text-[#F8467E]" >Professionally .</span></h1>
                <p className="lg:w-1/2">With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.</p>
            <div className="grid grid-cols-2">
                <div>
                    <h1 className="text-[#F8467E] text-5xl font-extrabold">500+</h1>
                    <p>Happy Customer</p>
                </div>
                <div>
                <h1 className="text-[#F8467E] text-5xl font-extrabold">16+</h1>
                <p>Happy Client</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ScreenProfesionaly;