import { useState } from "react";

const Main = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        companyName: "",
        phoneNumber: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setError(""); 
    };
  
    const isFormValid =
      formData.fullName && formData.email && formData.companyName && formData.phoneNumber;
  
    const handleSubmit = (e) => {
      if (!isFormValid) {
        e.preventDefault();
        setError("All fields are required.");
      }
    };

    return (
        <section className="w-full max-w-[1200px] p-4 mx-auto">
            <div className="sm:mt-24 mt-10 text-center max-w-3xl mx-auto px-4">
                <h2 className="text-ml md:text-2xl lg:text-3xl font-bold mb-3">See how Bob Handles Your Customer Support?</h2>
                <p className="text-[#475467] font-normal text-sm md:text-lg my-8">
                    Bob isn’t just a support bot—he’s an intelligent agent that adapts to your company’s needs. By handling 
                    routine inquiries and automating support tasks, Bob frees your team to focus on high-value interactions, 
                    improving customer satisfaction and efficiency.
                </p>
                <p className="text-[#475467] font-normal text-sm md:text-lg">Watch the video to see.</p>

                <div className="sm:w-[600px] w-full h-[405px] bg-[#f8f9fe] rounded-[12px] mx-auto mt-10flex items-center justify-center">
                    <video 
                        className="w-full h-full rounded-[12px]" 
                        controls 
                        autoPlay 
                        loop
                    >
                        <source src="/zikky-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            <div className="sm:mt-24 mt-10">
                <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#fa8f45] mt-2"></div>
                    <div className="flex-1">
                        <h2 className="text-ml md:text-2xl lg:text-3xl font-bold mb-3">Why Use support Agent?</h2>
                        <p className="text-[#475467] font-normal text-sm md:text-lg">
                            Choosing to manage your customers with an AI-powered agent goes as follows:
                        </p>
                    </div>
                </div>
                <div className="mt-8">
                    <a href="https://telex.im/auth/sign-up" className="bg-[#7141f8] text-white py-3 px-6 rounded-[12px] text-base hover:bg-[#7261a1]" target="_blank">
                        Start Free Trial
                    </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5 ">
                    <div className="bg-white text-center py-10 px-3 min-w-[300px] h-fit rounded-[12px] shadow-[22px_37px_52px_0px_rgba(160,160,160,0.12)]">
                        <h3 className="text-[#101828] font-bold text-lg mb-4">Get Instant Answers anytime, No more waiting</h3>
                        <p className="text-[#475467] font-normal text-sm">Our AI-powered customer support gives fast and accurate responses to questions, so customers get the help they need right away</p>
                    </div>

                    <div className="bg-white text-center py-10 px-3 min-w-[300px] h-fit rounded-[12px] shadow-[22px_37px_52px_0px_rgba(160,160,160,0.12)] lg:mt-20 mt-0">
                        <h3 className="text-[#101828] font-bold text-lg mb-4">Make Customers support Easier</h3>
                        <p className="text-[#475467] font-normal text-sm">The agent handles common questions, organizes chats, and even updates information automatically-saving you time and efforts</p>
                    </div>

                    <div className="bg-white text-center py-10 px-3 min-w-[300px] h-fit rounded-[12px] shadow-[22px_37px_52px_0px_rgba(160,160,160,0.12)]">
                        <h3 className="text-[#101828] font-bold text-lg mb-4">Talk to Customers Your Way.</h3>
                        <p className="text-[#475467] font-normal text-sm">Chat in private group channels, or even through voice calls. The agent fits into your workflow, making support simple and flexible</p>
                    </div>
                </div>
            </div>

            {/* <div className="sm:mt-24 mt-10 flex items-center gap-6 sm:flex-row flex-col">
                <div className="sm:w-[600px] w-full sm:h-[600px] h-auto">
                    <img  
                        src="/benefit.png"
                        alt="telex-logo"
                        className="w-full h-full object-cover rounded-[12px]"
                    />

                </div>

                <div>
                    <div className="flex items-start gap-2 mb-2">
                        <div className="w-2 h-2 bg-[#fa8f45] mt-2"></div>
                        <div className="flex-1">
                            <h2 className="text-ml md:text-2xl lg:text-3xl font-bold mb-3">How Your Team Benefits</h2>
                            <p className="text-[#475467] font-normal text-sm md:text-lg">
                                With Bob, Your AI-Powered Support Agent, You Get:
                            </p>
                        </div>
                    </div>

                    <p className="mb-3 text-[#475467] font-normal text-base">
                    ✅   <strong>24/7 Instant Responses:</strong> Get notified instantly when your brand is mentioned or a post gains traction.
                    </p>

                    <p className="mb-3 text-[#475467] font-normal text-base">
                    ✅   <strong>Personalized Interactions: </strong>Know whether people love or hate what’s being said about you.
                    </p>

                    <p className="mb-3 text-[#475467] font-normal text-base">
                    ✅  <strong>Automated Workflows:</strong>  Reduce manual workload by automating common support tasks.
                    </p>

                    <p className="mb-3 text-[#475467] font-normal text-base">
                    ✅   <strong>Integrations:</strong> Connect Bob with your favorite support tools like Zendesk, Slack, and Telex.
                    </p>

                    <p className="mb-3 text-[#475467] font-normal text-base">
                    ✅  <strong>Analytics & Insights:</strong>  Gain valuable data on customer inquiries and support performance.
                    </p>

                    <p className="mb-3 text-[#475467] font-normal text-base">
                    ✅   <strong>Smart Issue Escalation:</strong> Detect complex issues and route them to the right human agent.
                    </p>
                </div>
            </div> */}

            <div className="sm:mt-24 mt-10">
                 <div className="flex items-start gap-2 mb-2">
                    <div className="w-2 h-2 bg-[#fa8f45] mt-2"></div>
                    <div className="flex-1">
                        <h2 className="text-ml md:text-2xl lg:text-3xl font-bold mb-3">How It Works</h2>
                        <p className="text-[#475467] font-normal text-sm md:text-lg">
                            So many ways Lex can help in all your meetings it simple; follow this process
                        </p>
                    </div>
                </div>

                <div className="">
                    <img
                        src="/works.png"
                        alt="telex-logo"
                        className="w-full h-auto"
                    />
                </div>
            </div>

            <div className="sm:mt-24 mt-10 max-w-3xl mx-auto text-center">
                <h3 className="font-bold text-[#475467] text-xl sm:text-2xl">Ready to transform your operation?{" "} <span className="font-normal"> Start your free Telex trial today</span> </h3>
                <div className="mt-5">
                    <a href="https://telex.im/auth/sign-up" className="bg-[#7141f8] text-white py-3 px-6 rounded-[12px] text-base hover:bg-[#7261a1]" target="_blank">
                        Start Free Trial
                    </a>
                </div>
            </div>

            <div className="sm:my-24 my-10 max-w-5xl mx-auto text-center">
                <div className="flex items-center mx-auto w-fit">
                    <img 
                        src="/Logo.png"
                        alt="telex-logo"
                        className="w-6"
                    />
                    <img 
                        src="/Telex.png"
                        alt="telex-logo"
                        className="w-16"
                    />
                </div>

                <h2 className="font-semibold text-3xl sm:4xl text-[#1E1E1E] mt-7">Get AI Support-Sign Up Now</h2>
                <p className="text-[#475467] font-normal text-sm md:text-lg mt-4">
                    Sign up for Telex - your journey starts here.
                </p>

                <div className="sm:w-[50%] w-full mx-auto mt-8">
                    <div className="flex flex-col gap-2 text-left mb-4">
                        <label className="text-base font-medium text-[#1E1E1E]">Full Name</label>
                        <input 
                            type="text" 
                            name="fullName"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="border rounded-[8px] border-[#C1C6CE] p-3 focus:border-[#7141f8]"
                        />
                    </div>

                    <div className="flex flex-col gap-2 text-left mb-4">
                        <label className="text-base font-medium text-[#1E1E1E]">Email Address</label>
                        <input 
                            type="email"
                            placeholder="Enter your email address"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border rounded-[8px] border-[#C1C6CE] p-3 focus:border-[#7141f8]"
                        />
                    </div>

                    <div className="flex flex-col gap-2 text-left mb-4">
                        <label className="text-base font-medium text-[#1E1E1E]">Company Name</label>
                        <input 
                            type="text" 
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder="Enter your company name"
                            className="border rounded-[8px] border-[#C1C6CE] p-3 focus:border-[#7141f8]"
                        />
                    </div>

                    <div className="flex flex-col gap-2 text-left">
                        <label className="text-base font-medium text-[#1E1E1E]">Phone Numbr </label>
                        <input 
                            type="text" 
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Enter phone number"
                            className="border rounded-[8px] border-[#C1C6CE] p-3 focus:border-[#7141f8]"
                        />
                    </div>

                    {error && <p className="text-red-500 mt-4">{error}</p>}
                    
                    <a 
                        href="https://telex.im/auth/sign-up"
                        className={`py-3 px-6 rounded-[12px] text-base block w-full mt-8 text-center 
                            ${isFormValid ? "bg-[#7141f8] text-white hover:bg-[#7261a1]" : "bg-gray-400 text-gray-200 cursor-not-allowed"}`}
                        onClick={handleSubmit}
                    >
                        Start Free Trial
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Main;