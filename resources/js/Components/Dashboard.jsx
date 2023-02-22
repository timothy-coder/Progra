import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalkingArrowRight, faUserGear, faUserLarge } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '@/Components/Dropdown';
export default function Dashboard({}) {
    return (
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
    );
}
