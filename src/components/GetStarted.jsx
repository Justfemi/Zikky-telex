const GetStarted = () => {
    return (
        <div className="flex items-center justify-center h-[300px] md:h-[450px] bg-cover bg-no-repeat w-full" style={{backgroundImage: 'url(../../public/get-started.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            <div className="flex flex-col items-center justify-center text-center text-white p-10 space-y-4">
                <h1 className="text-[#ADAEAF] text-2xl md:text-3xl lg:text-4xl font-bold">Get Started <span className="text-white">Today!</span></h1>
                <p className="text-[9px] sm:text-sm w-full md:w-[90%]">Activate Bob in minutes and enhance customer support with instant, AI-powered assistance.</p>
                <button className="bg-[#7141F8] text-white px-3 md:px-4 py-2 md:py-3 hover:bg-[#3f18aa] rounded-md transition-all duration-500 text-[10px] md:text-base">Activate @Bob Now</button>
            </div>
        </div>
    )
}

export default GetStarted;