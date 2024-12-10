

const Contractmessage = () => {
    return (
        <div className=" text-center m-12 space-y-6">
            <h1 className=" text-4xl font-bold text-[#ED4379]">Let us handle your <br/>
            project, professionally.</h1>
            <div className="grid grid-cols-1 space-x-2 lg:grid-cols-2 justify-center items-center ">
            <input type="text" placeholder="First Name" className="input input-bordered w-full m-3" />
            <input type="text" placeholder="Last Name" className="input input-bordered w-full m-3" />
            <input type="email" placeholder="Your Email" className="input input-bordered w-full m-3" />
            <input type="number" placeholder="Your Number" className="input input-bordered w-full m-3" />
            </div> 
            <textarea
                    placeholder="Your Opinion Please"
                    className="textarea textarea-bordered w-full m-3"
                    rows="5"
                    cols="40"
                    />
              <button type="button" className="text-white  bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2">Send Message</button>
        </div>
    );
};

export default Contractmessage;