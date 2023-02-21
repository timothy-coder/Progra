import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faDownload, faPeopleArrows, faUserGroup, faWrench } from '@fortawesome/free-solid-svg-icons'
export default function Dependencia(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Dependencia" />

            <main className="w-full bg-white overflow-y-auto">
			<div className="flex items-center justify-between gap-4 flex-wrap bg-[rgb(13,85,57)]">
				<div className="px-6">
					<h1 className="text-4xl font-semibold mb-5 text-white pt-3">UNCP</h1>
					<ul className="flex items-center gap-4 pb-3">
						<li>
							<a className="text-white pointer-events-none" href="#">DashBoard</a>
						</li>
						<li className="text-lime-700">/</li>
						<li>
							<a className="text-lime-800 pointer-events-none hover:text-[rgb(151,115,61)]" href="#">Usuarios</a>
						</li>
					</ul>
				</div>
				
			</div>

			<div className="px-6 flex flex-wrap gap-6 w-full mt-6">
				<div className="grow basis-[500px]">
					<div className="flex items-center gap-4 mb-6">
						<h3 className="text-2xl font-semibold mr-auto">Lista de Usuarios</h3>
						<a href="#" className="pr-6 ">
                    
					<span className="h-9 flex justify-center items-center
					 font-medium gap-2.5 bg-black text-white px-4 py-0 rounded-lg hover:text-[rgb(151,115,61)] "><FontAwesomeIcon icon={faDownload} />Descargar reporte</span>
				</a>
					</div>
					<table className="w-full border-collapse">
						<thead className="text-[13px] text-left pb-3 border-b-[black] border-b border-solid">
							<tr>
								<th>Correo</th>
                                <th>Usuario</th>
								<th>Hora de entrada</th>
                                <th>Hora de salida</th>
                                <th>Año de Inicio</th>
							</tr>
						</thead>
						<tbody>
							<tr className="bg-white hover:bg-gray-200">
                                <td className="px-0 py-1">d_cargo@uncp.edu.pe</td>
                                <td className="px-0 py-1">Nicolas brandon pariona de la peña<a href=""></a></td>
								<td className="px-0 py-4">08:00</td>
                                <td className="px-0 py-4">06:00</td>
                                <td className="px-0 py-4">2020</td>
							</tr>
							<tr className="bg-white hover:bg-gray-200">
                                <td className="px-0 py-1">d_cargo@uncp.edu.pe</td>
                                <td className="px-0 py-1">Nicolas brandon pariona de la peña<a href=""></a></td>
								<td className="px-0 py-4">08:00</td>
                                <td className="px-0 py-4">06:00</td>
                                <td className="px-0 py-4">2020</td>
							</tr>
							<tr className="bg-white hover:bg-gray-200">
                                <td className="px-0 py-1">d_cargo@uncp.edu.pe</td>
                                <td className="px-0 py-1">Nicolas brandon pariona de la peña<a href=""></a></td>
								<td className="px-0 py-4">08:00</td>
                                <td className="px-0 py-4">06:00</td>
                                <td className="px-0 py-4">2020</td>
							</tr>
							<tr className="bg-white hover:bg-gray-200">
                                <td className="px-0 py-1">d_cargo@uncp.edu.pe</td>
                                <td className="px-0 py-1">Nicolas brandon pariona de la peña<a href=""></a></td>
								<td className="px-0 py-4">08:00</td>
                                <td className="px-0 py-4">06:00</td>
                                <td className="px-0 py-4">2020</td>
							</tr>
							<tr className="bg-white hover:bg-gray-200">
                                <td className="px-0 py-1">d_cargo@uncp.edu.pe</td>
                                <td className="px-0 py-1">Nicolas brandon pariona de la peña<a href=""></a></td>
								<td className="px-0 py-4">08:00</td>
                                <td className="px-0 py-4">06:00</td>
                                <td className="px-0 py-4">2020</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="grow basis-[300px]">
					<div className="flex justify-between">
						<h3>Todas las entradas</h3>
						<p>
                        <i className="items-end" >+</i>
						<i className="items-end" >filtro</i>
                        </p>
					</div>
					<ul className="w-full">
						<li className="w-full flex justify-between items-center mb-4 
						px-5 py-3.5 rounded-[10px] bg-gray-200 border-l-[10px] border-l-[blue] border-solid">
							<p>Año de Inicio</p>
						</li>
						<li className="w-full flex justify-between items-center mb-4 
						px-5 py-3.5 rounded-[10px] bg-gray-200 border-l-[10px] border-l-[blue] border-solid">
							<p>Nombre</p>
						</li>
						<li className="w-full flex justify-between items-center mb-4 
						px-5 py-3.5 rounded-[10px] bg-gray-200 border-l-[10px] border-l-[orange] border-solid">
							<p>Correo</p>
						</li>
						<li class="w-full flex justify-between items-center mb-4 
						px-5 py-3.5 rounded-[10px] bg-gray-200 border-l-[10px] border-l-[blue] border-solid">
							<p>oti</p>
						</li>
						<li className="w-full flex justify-between items-center mb-4 
						px-5 py-3.5 rounded-[10px] bg-gray-200 border-l-[10px] border-l-[orange] border-solid">
							<p>oti</p>
						</li>
					</ul>
				</div>
			</div>
		</main>
        </AuthenticatedLayout>
    );
}
