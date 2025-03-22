
const productLinks = [
  { label: "Application Performance Monitoring" },
  { label: "Server Monitoring" },
  { label: "Cloud Monitoring" },
  { label: "Database Monitoring" },
  { label: "Network Monitoring" },
  { label: "Log Monitoring" },
  { label: "Webhook Testing" },
  { label: "Push Notification" },
  { label: "Uptime Monitoring" },
  { label: "Website Testing" },
  { label: "Integrations" },
];

const supportLinks = [
  { label: "Help Center" },
  { label: "FAQ" },
  { label: "How Telex works" },
  { label: "Pricing Experience" },
  { label: "About Us" },
  { label: "Contact Us" },
];

const legalLinks = [
  { label: "Privacy Policy" },
  { label: "Terms of Service" },
];

const Footer = () => {
  return (
    <footer className="bg-[#7141f8] px-6 py-10 flex flex-col gap-14 text-[#fafafa] sm:px-6 sm:py-12">
      <div className="w-full flex flex-col xl:max-w-[1280px] lg:mx-auto gap-y-[60px]">
        <div className="w-full flex flex-wrap-reverse justify-between gap-y-10 sm:gap-y-20 lg:gap-y-20 lg:flex-nowrap">
          <div className="basis-1/4">
            <a className="hidden sm:hidden md:block">
              <img
                src="/logo-white.svg" alt="telex-logo"
             />
            </a>
          </div>

          <div className="w-full flex flex-col gap-y-10 md:flex-row mx-auto justify-between basis-full md:gap-12">
            {[{ title: "Products", links: productLinks }, { title: "Support", links: supportLinks }, { title: "Legal", links: legalLinks }].map((section, index) => (
              <div key={index} className="flex flex-col gap-6 w-full">
                <h1 className="text-xl font-semibold">{section.title}</h1>
                <div className="flex flex-col gap-4">
                  {section.links.map((item, idx) => (
                    <a key={idx} className="hover:underline transition-all">
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row lg:justify-between items-center gap-y-5">
          {/* <div className="flex gap-6">
            {[instagramIcon, tiktokIcon, facebookIcon].map((icon, index) => (
              <a key={index} className="hover:underline transition-all">
                <Image src={icon} alt="social icon" />
              </a>
            ))}
          </div> */}

          <div className="flex flex-col md:flex-row md:gap-x-5 justify-center items-center gap-y-5">
            <aside className="flex items-center gap-[6px]">
              {legalLinks.map((item, index) => (
                <a key={index} className="text-sm font-medium hover:underline transition-all">
                  <p className="text-[14px]">{item.label}</p>
                </a>
              ))}
            </aside>
            <span>© 2024 Telex. All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
