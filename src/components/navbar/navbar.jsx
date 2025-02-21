import { useEffect, useRef, useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    // <!-- Header -->
    <header>
      <div className="mx-auto w-full fixed top-0 left-0 z-10">
        {/* <!-- Navbar --> */}
        <nav className="px-6 md:px-16 bg-srBlack text-white flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <h5 className="heading-5 ml-3">
              My Portfolio
            </h5>
          </a>

          {/* Navbar Menu for large screens */}
          <div className="hidden md:flex space-x-6 heading-6">
            <ul className="flex space-x-6">
              <li>
                <a href="#hero" className="hover:text-fuchsia-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#resume" className="hover:text-fuchsia-300">
                  Resume
                </a>
              </li>
              <li>
                <a href="#project" className="hover:text-fuchsia-300">
                  Project
                </a>
              </li>
              <li>
                <a href="#sertification" className="hover:text-fuchsia-300">
                  Sertification
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button className="text-white focus:outline-none" id="hamburger-menu" onClick={() => {
              setIsMenuOpen(prevState => !prevState);
            }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </nav>
        {/* <!-- End Navbar --> */}

        {/* Mobile Menu (hidden by default) */}
        <div ref={mobileMenuRef} className={`md:hidden ${isMenuOpen ? '' : 'hidden'} bg-srBlack text-white w-full p-6 absolute top-0 left-0 z-10 transition-all duration-300 transform ${isMenuOpen ? '' : 'translate-x-full'}`} id="mobile-menu">
          <ul className="space-y-4">
            <li>
              <a href="#hero" className="hover:text-fuchsia-300 block">
                Home
              </a>
            </li>
            <li>
              <a href="#resume" className="hover:text-fuchsia-300 block">
                Resume
              </a>
            </li>
            <li>
              <a href="#project" className="hover:text-fuchsia-300 block">
                Project
              </a>
            </li>
            <li>
              <a href="#sertification" className="hover:text-fuchsia-300 block">
                Sertification
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    // <!-- End Header -->
  );
}

export default Navbar;
