import React from 'react';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="w-full sticky top-0 z-50 flex flex-wrap items-center justify-center px-2 py-3 bg-white text-black shadow gap-16 h-16 text-lg font-medium">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative items-center flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className=" font-bold leading-loose inline-block mr-4 whitespace-nowrap uppercase "
              href="/"
            >
              :PUMA
            </a>
            <button
              className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              =
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto sm:p-0 p-4">
              <li className="nav-item">
                <a
                  className="sm:px-3 py-2 flex items-center text-base uppercase font-bold leading-snug  hover:opacity-75"
                  href="#men"
                >
                  <span className="ml-2">Men</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="sm:px-3 py-2 flex items-center text-base uppercase font-bold leading-snug  hover:opacity-75"
                  href="#women"
                >
                  <span className="ml-2">Women</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="sm:px-3 py-2 flex items-center text-base uppercase font-bold leading-snug  hover:opacity-75"
                  href="#about"
                >
                  <span className="ml-2">About</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="sm:px-3 py-2 flex items-center text-base uppercase font-bold leading-snug  hover:opacity-75"
                  href="#signup"
                >
                  <span className="ml-2">Sign Up</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
