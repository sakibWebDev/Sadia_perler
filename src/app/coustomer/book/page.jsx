

const page = () => {
    return (
        <div>
           <div className=' space-y-6 m-10 '>
            <input type="text" placeholder="Your Name" className="input input-bordered w-2/4 " /><br></br>
            <input type="email" placeholder="Your Email" className="input input-bordered w-2/4 " /><br></br>
            <input type="text" placeholder="please say which services" className="input input-bordered w-2/4 " /><br></br>
            </div>
            <div className=" m-10">
                <h1  className="mb-2">Pay with Us</h1><hr></hr>
            </div>
        </div>
    );
};

export default page;