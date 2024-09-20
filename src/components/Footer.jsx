
const Footer = () => {
  return (
      <footer className="bg-[#011627] shadow w-5/6 mt-4">
        <hr className="" />
        <div className="w-full pt-4 pb-4 md:pb-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="#"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <p className="text-white w-32 font-mono text-xl">PulseFeed</p>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 w-full border-white" />
          <span className="block text-sm text-white sm:text-center">
            © 2024{" Shubhanshu "}
            <a href="#" className="hover:underline">
              PulseFeed™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
  );
};

export default Footer;
