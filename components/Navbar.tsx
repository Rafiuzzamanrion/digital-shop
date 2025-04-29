'use client'
import {useState, useEffect} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';


interface NavLink {
	name: string;
	path: string;
}

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
	const [lastScrollY, setLastScrollY] = useState(0);
	const pathname = usePathname();
	const [show, setShow] = useState(false);
	const toggleMenu = () => {
		setShow(!show);
	};
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY > lastScrollY) {
				setScrollDirection('down');
			} else {
				setScrollDirection('up');
			}
			setIsScrolled(currentScrollY > 12);
			setLastScrollY(currentScrollY);
		};

		window.addEventListener('scroll', handleScroll, {passive: true});

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [lastScrollY]);


	const navClasses = `
    fixed top-0 w-full z-50 transition-all duration-300 ease-in-out
    ${isScrolled
		? 'bg-white/75 shadow backdrop-blur-sm border-b border-gray-200'
		: 'bg-white'
	}
    ${isScrolled && scrollDirection === 'down'
		? 'py-2'
		: 'py-6'
	}
  `;


	const navLinks: NavLink[] = [
		{name: 'Home', path: '/'},
		{name: 'Privacy Policy', path: '/privacy-policy'},
		{name: 'Terms of Service', path: '/termsOfService'},
		{name: 'Contact Us', path: '/contactUs'},
	];


	return (
		<header className={navClasses}>
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between">

					<Link href="/" className="text-2xl font-bold text-blue-600">
						Digital Services
					</Link>


					<nav className="hidden md:block">
						<ul className="flex items-center gap-10">
							{navLinks.map((link) => (
								<li key={link.path}>
									<Link
										href={link.path}
										className={`
                      font-bold text-lg transition-all hover:text-blue-600
                      ${pathname === link.path ? 'text-blue-600' : 'text-gray-700'}
                    `}
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</nav>


					<div className="flex items-center">
						<Link
							href="/get-started"
							className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-all"
						>
							Get Started
						</Link>

						{/* Mobile menu button */}
						<div>
							{show ? <button onClick={toggleMenu} className="md:hidden text-gray-700">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="text-gray-500"
									>
										<line x1="18" y1="6" x2="6" y2="18"></line>
										<line x1="6" y1="6" x2="18" y2="18"></line>
									</svg>
								</button>
								:
								<button onClick={toggleMenu} className="md:hidden text-gray-700">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
									     className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
									</svg>
								</button>
							}
						</div>
					</div>
				</div>


				<div className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${(isScrolled && scrollDirection === 'down') ? 'max-h-0 opacity-0' : 'max-h-28 h-20 opacity-100 mt-4 mb-4'}
        `}>
					<div className="flex items-center justify-between text-sm text-gray-500">
						<div className="flex items-center gap-4 mt-5">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                     className="w-4 h-4 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                +1 (555) 123-4567
              </span>
							<span className="hidden sm:flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                     className="w-4 h-4 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                contact@yourbrand.com
              </span>
							<h1 className={'text-lg font-semibold text-gray-600 mx-10'}>
								<span className={'text-indigo-800'}>Service Areas:</span> Rice Lake, Barron, Cumberland, Chetek, Cameron, Almena, Dallas
							</h1>
						</div>
						<div className="hidden sm:flex items-center gap-5">
							<a href="#" className="hover:text-blue-600 transition-colors">
								<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path fillRule="evenodd"
									      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
									      clipRule="evenodd"/>
								</svg>
							</a>
							<a href="#" className="hover:text-blue-600 transition-colors">
								<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path fillRule="evenodd"
									      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
									      clipRule="evenodd"/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className={`${show ? '' : 'hidden'} md:hidden`}>
				<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
					{navLinks.map((link) => (
						<Link
							key={link.path}
							href={link.path}
							className={`
                block px-3 py-2 rounded-md text-base font-medium
                ${pathname === link.path
								? 'bg-blue-50 text-blue-600'
								: 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
							}
              `}
						>
							{link.name}
						</Link>
					))}
				</div>
			</div>
		</header>
	);
};

export default Navbar;