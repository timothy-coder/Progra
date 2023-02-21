import { Link } from '@inertiajs/react';

export default function NavLink({ href, active, children }) {
    return (
        <Link
            href={href}
            className={
                active
                    ? 'inline-flex items-center px-4 py-1.5 border-b-2 bg-lime-600 rounded-[20px] border-lime-600 text-sm font-bold leading-5 text-black focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out'
                    : 'inline-flex items-center px-4 py-1.5 border-b-2 border-transparent text-sm font-bold leading-5 text-white hover:text-lime-600 hover:border-lime-600 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
            }
        >
            {children}
        </Link>
    );
}
