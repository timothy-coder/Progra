import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter,faYoutube} from '@fortawesome/free-brands-svg-icons'
import { faBoxArchive, faGears, faLandmark, faPeopleLine, faPersonWalking, faPersonWalkingArrowRight, faUserGear, faUserLarge } from '@fortawesome/free-solid-svg-icons';

export default function Authenticated({ auth, header, children }) {
    
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    
    return (
        <div className="min-w-screen bg-white">
            <nav className="bg-[rgb(62,62,62)]  border-b border-[rgb(62,62,62)] ">
                <div className=" px-4 sm:px-6 lg:px-0 h-[100vh] bg-[rgb(62,62,62)]  fixed w-[10rem]">
                    <div className="justify-between space-y-4 ">
                        <div className="shrink-0 flex items-center p-3.5 ">
                            <Link href={route('reporte.index')}>
                                {/* href='/' cambiar*/}
                                <ApplicationLogo className="block h-[5rem] w-auto fill-current" />
                            </Link>
                        </div>
                       
                        <div className="flex flex-col space-x-3">
                            <div className="max-sm:hidden space-y-8 sm:-my-px sm:mx-1 ">
                                <NavLink href={route('reporte.index')} active={route().current('reporte.index')}>
                                <FontAwesomeIcon icon={faBoxArchive} /><a className="px-2">Reportes</a>
                                </NavLink>
                                <NavLink href={route('trabajador.index')} active={route().current('trabajador.index')}>
                                <FontAwesomeIcon icon={faPersonWalking} /><a className="px-2">Trabajadores</a>
                                </NavLink>
                                <NavLink href={route('user.index')} active={route().current('user.index')}>
                                <FontAwesomeIcon icon={faPeopleLine} /><a className="px-2">Usuarios</a>
                                </NavLink>
                                <NavLink href={route('dependencia.index')} active={route().current('dependencia.index')}>
                                <FontAwesomeIcon icon={faLandmark} /><a className="px-2">Dependencia</a>
                                </NavLink>
                                <NavLink href={route('config.index')} active={route().current('config.index')}>
                                <FontAwesomeIcon icon={faGears} /><a className="px-2">Configuración</a>
                                </NavLink>
                                <div className="text-white pl-3">Redes Sociales</div>
                                <div class="social-buttons">
                                <a
                                    href="#"
                                    class="social-button-social-button--facebook"
                                    aria-label="Facebook">
                                <FontAwesomeIcon icon={faFacebook} />    
                                </a>
                                <a
                                    href="#"
                                    class="social-button-social-button--twitter"
                                    aria-label="Facebook">
                                <FontAwesomeIcon icon={faTwitter}/>    
                                </a>
                                <a
                                    href="#"
                                    class="social-button-social-button--youtube"
                                    aria-label="Facebook">
                                <FontAwesomeIcon icon={faYoutube}/>    
                                </a>
                                </div>
                                </div>
                            </div>
                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                   
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'} >
                    <div className="pt-2 pb-3 space-y-1 ">
                        <ResponsiveNavLink href={route('reporte.index')} active={route().current('reporte.index')}>
                        <FontAwesomeIcon icon={faBoxArchive} /><a className="px-2">Reportes</a>
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('trabajador.index')} active={route().current('trabajador.index')}>
                        <FontAwesomeIcon icon={faPersonWalking} /><a className="px-2">Trabajadores</a>
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('user.index')} active={route().current('user.index')}>
                        <FontAwesomeIcon icon={faPeopleLine} /><a className="px-2">Usuarios</a>
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('dependencia.index')} active={route().current('dependencia.index')}>
                        <FontAwesomeIcon icon={faLandmark} /><a className="px-2">Dependencia</a>
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('config.index')} active={route().current('config.index')}>
                        <FontAwesomeIcon icon={faGears} /><a className="px-2">Configuración</a>
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">
                            <FontAwesomeIcon icon={faUserLarge} className="pr-2"/>{auth.user.name}
                            </div>
                            <div className="font-medium text-sm text-gray-500">{auth.user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}><FontAwesomeIcon icon={faUserGear} className="pr-2"/>Profile</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                            <FontAwesomeIcon icon={faPersonWalkingArrowRight} className="pr-2"/>Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main className="pl-[10rem] ">
            <div className="flex items-center justify-between gap-4 flex-wrap bg-[rgb(13,85,57)]">
				<div className="px-6">
					<h1 className="text-4xl font-semibold mb-5 text-white pt-3">UNCP</h1>
					<ul className="flex items-center gap-4 pb-3">
						<li>
							<a className="text-white pointer-events-none" href={route('reporte.index')}>General</a>
						</li>
						<li className="text-lime-700">/</li>
						<li>
							<a className="text-lime-600 pointer-events-none hover:text-[rgb(151,115,61)]" href="#">i</a>
						</li>
					</ul>
                    
				</div>
                <div className="hidden sm:flex sm:items-center ">
                            <div className="mx-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-4 font-black border-4 rounded-md text-gray-500 bg-white hover:text-gray-700 hover:border-yellow-500 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                <FontAwesomeIcon icon={faUserLarge} className="pr-2"/>
                                                {auth.user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                    <Dropdown.Link href={route('profile.edit')}><FontAwesomeIcon icon={faUserGear} className="pr-2"/>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                        <FontAwesomeIcon icon={faPersonWalkingArrowRight} className="pr-2"/>Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                                
                        </div>
                        
			</div>
            
                {children}
                </main>
        </div>
    );
}
