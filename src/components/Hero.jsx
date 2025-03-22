
const Hero = () => {
    return (
        <section className="bg-[#f9f8fe] sm:p-20 py-10 px-4">
            <div className="w-full max-w-[1200px] flex md:items-start items-center sm:flex-row sm:gap-0 gap-4 flex-col mx-auto">
                <div className="relative">
                    <div className="absolute sm:-right-10 -right-3 sm:-top-6 -top-5">
                        <img 
                            src="/hero-decor.svg" 
                            alt="hero decoration" 
                            className="w-[150px]"
                        />
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"><span className="text-[#7141F8]">AI-Powered Customer Support</span> for Business that needs 24/7 Automation</h2>
                    <p className="text-[#475467] font-normal text-sm md:text-lg mt-4">
                        AI-Powered customer support to answer your customer questions, handle requests, and help customers, so you can focus on growing your business
                    </p>
                </div>
                <div className="">
                    <img 
                        src="/hero-img.png" 
                        alt="hero image" 
                        className="w-full  h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;