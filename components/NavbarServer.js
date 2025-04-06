import Image from 'next/image';
import Link from 'next/link';
import data from '@/data/data.json';
import Logo from '@/public/logo/logo.png';

const NavbarServer = ({ activeSection, isMobileMenuOpen, toggleMobileMenu, isScrolled, path }) => {
    const { navtext, email } = data.data;
    const sections = ['home', 'skills', 'projects', 'about-me', 'contact'];

    return (
        <nav className="bg-transparent fixed top-0 w-full z-50 h-16 md:h-24 px-6 md:px-10">
            <div
                id="nav"
                className={`flex flex-wrap items-center justify-between mx-auto px-4 py-1 md:py-4 my-2 md:my-5 w-full bg-background rounded-2xl transition-all duration-300 ${isScrolled ? 'shadow-glow' : ''
                    }`}
            >
                <Link href="/" className="flex items-center rtl:space-x-reverse">
                    <Image src={Logo} height={25} width={25} alt="Vandit Shah - Logo" priority={true}
                        loading="eager" />
                    <span className="ml-2 self-center text-xl md:text-2xl font-semibold whitespace-nowrap text-white font-mono uppercase">
                        {navtext}
                    </span>
                </Link>

                {/* Hamburger Button for Mobile */}
                <label className="hamburger lg:hidden">
                    <input
                        type="checkbox"
                        checked={isMobileMenuOpen}
                        onChange={toggleMobileMenu}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="navbar-default"
                    />
                    <svg viewBox="0 0 32 32">
                        <path
                            className="line line-top-bottom"
                            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                        />
                        <path className="line" d="M7 16 27 16" />
                    </svg>
                </label>

                {/* Navbar Links */}
                <div
                    className={`w-full lg:flex lg:w-auto ${isMobileMenuOpen ? 'block' : 'hidden'
                        } lg:block`}
                    id="navbar-default"
                >
                    <ul className="flex flex-col p-1 md:p-4 lg:p-0 md:mt-4 bg-dark lg:bg-transparent lg:flex-row lg:space-x-8 xl:space-x-12 lg:mt-0 lg:border-0">
                        {sections.map((section) => (
                            <li key={section}>
                                <Link
                                    href={`#${section}`}
                                    className={`block py-2 md:px-3 font-mono text-lg ${path == '/projects' ? 'text-[var(--grey)] hover:text-white' : activeSection === section
                                        ? 'text-white'
                                        : 'text-[var(--grey)] hover:text-white'
                                        } lg:bg-transparent lg:p-0`}
                                >
                                    <span className="text-[var(--accent)]">#</span>
                                    {section}
                                </Link>
                            </li>
                        ))}
                        <li className="my-3 md:my-0">
                            <a
                                href={'mailto:' + email}
                                className="text-dark bg-white hover:bg-gray-200 font-medium rounded-lg text-md px-5 py-2 text-center font-mono"
                            >
                                HIRE ME
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavbarServer;