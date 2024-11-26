const Footer = () => {
  return (
    <footer className="w-full bg-white rounded-lg shadow dark:bg-gray-900 mt-8">
      <div className="container w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Ahmed
            </span>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#about" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:underline me-4 md:me-6">
                skills{" "}
              </a>
            </li>
            <li>
              <a href="#works" className="hover:underline me-4 md:me-6">
                works
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Ahmed
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
