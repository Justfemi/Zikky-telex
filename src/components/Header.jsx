

const Header = () => {
    return (
        <header className="p-4 w-full max-w-[1200px] flex justify-between items-center mx-auto">
            <div className="flex items-center">
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

            <a href="https://telex.im" className="bg-[#7141f8] text-white py-3 px-6 rounded-[12px] text-base hover:bg-[#7261a1]" target="_blank">
                Explore Telex
            </a>
        </header>
    );
}

export default Header;