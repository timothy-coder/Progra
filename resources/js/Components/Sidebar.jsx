import { Link } from "@inertiajs/react";
export default function Sidebar({ href }) {
    return (

        <div>
            <ul className="w-60 flex sm:rounded-lg">
                <li className="my-1 bg-black-100 sm:rounded-lg">
                    <Link className="hover:border-white-300" href={href} >Inicio</Link>
                </li>
                <li className="my-1 bg-black-100 sm:rounded-lg">
                    <Link className="hover:border-white-300" >Reportes</Link>
                </li>
                <li className="my-1 bg-black-100 sm:rounded-lg">
                    <Link className="hover:border-white-300" >Usuarios</Link>
                </li>
            </ul>
        </div>
        /*<button
            type={type}
            onClick={onClick}
            className={
                `inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${
                    processing && 'opacity-25'
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>*/
    );
}
