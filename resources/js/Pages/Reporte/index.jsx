import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleCheck, faTimes, faUsersBetweenLines } from '@fortawesome/free-solid-svg-icons';
import { faClock, faDownload, faPeopleArrows, faUserGroup, faWrench } from '@fortawesome/free-solid-svg-icons';

export default function Reporte(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Reporte" />

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
							<a className="text-lime-800 pointer-events-none hover:text-[rgb(151,115,61)]" href="#">Registros</a>
						</li>
					</ul>
				</div>
				<a href="#" className="pr-6">
					<span className="h-9 flex justify-center items-center
					 font-medium gap-2.5 bg-black text-white px-4 py-0 rounded-lg hover:text-[rgb(151,115,61)]">Descargar reporte</span>
				</a>
			</div>

			<ul className="px-6 grid gap-6 mt-9 grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
				<li className="flex item-center gap-6 p-6 rounded-[20px] bg-[rgb(35,164,85)] text-white hover:text-gray-200 ">
				<FontAwesomeIcon icon={faUsersBetweenLines} className="w-20 h-20 text-4xl flex justify-center item-center rounded-[10px] bg-[rgb(35,164,85)]"/>
					<span class="text">
						<h3 className="text-2xl font-semibold">9999</h3>
						<p>N° total de personal</p>
					</span>
				</li>
				<li className="flex item-center gap-6 p-6 rounded-[20px] bg-[rgb(139,144,147)] text-white hover:text-gray-200">
				<FontAwesomeIcon icon={faPersonCircleCheck} className="w-20 h-20 text-4xl flex justify-center item-center rounded-[10px] bg-[rgb(139,144,147)]"/>
					<span class="text">
						<h3 className="text-2xl font-semibold">1231</h3>
						<p>N° total de personal presente</p>
					</span>
				</li>
				<li className="flex item-center gap-6 p-6 rounded-[20px] bg-[rgb(12,73,187)] text-white hover:text-gray-200">
				<FontAwesomeIcon icon={faTimes} className="w-20 h-20 text-4xl flex justify-center item-center rounded-[10px] bg-[rgb(12,73,187)]"/>
					<span class="text-2xl font-clock">
						<h3 className="text-2xl font-semibold ">08:00</h3>
						<p>HORA ACTUAL</p>
					</span>
				</li>
			</ul>


			<div className="flex  px-6 wrap gap-6 w-full mt-6">
				<div className="grow basis-[500px]">
					<div className="flex items-center gap-4 mb-6">
						<h3 className="text-2xl font-semibold mr-auto">Entrada recientes</h3>
					</div>
					<table className="w-full border-collapse">
						<thead className="text-[13px] text-left pb-3 border-b-[black] border-b border-solid">
							<tr>
								<th>Correo</th>
								<th>Usuario</th>
								<th>Hora de entrada</th>
                                <th>Hora de salida</th>
								<th>Status de Entrada</th>
								<th>Status de Salida</th>
							</tr>
						</thead>
						<tbody>
							<tr className="bg-white hover:bg-gray-200">
								<td className="px-0 py-4">
									<p>example@uncp.edu.pe</p>
								</td>
								<td className="px-0 py-4">
									<p>Nicolas</p>
								</td>
								<td className="px-0 py-4">08:00</td>
                                <td className="px-0 py-4">06:00</td>
								<td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-green-700 ">Registrado</span></td>
								<td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-green-700 ">Registrado</span></td>
							</tr>
							<tr className="bg-white hover:bg-gray-200">
								<td className="px-0 py-4">
									<p>example@uncp.edu.pe</p>
								</td>
								<td className="px-0 py-4">
									<p>Nicolas</p>
								</td>
								<td className="px-0 py-4">08:00</td>
                                <td className="px-0 py-4">06:00</td>
								<td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-red-700 ">No Registrado</span></td>
								<td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-red-700 ">No Registrado</span></td>
							</tr>
							<tr className="bg-white hover:bg-gray-200">
								<td className="px-0 py-4">
									<p>example@uncp.edu.pe</p>
								</td>
								<td className="px-0 py-4">
									<p>Nicolas</p>
								</td>
								<td className="px-0 py-4">08:00</td>
                                <td className="px-0 py-4">06:00</td>
								<td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-yellow-500 ">Registrando</span></td>
								<td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-red-700 ">No Registrado</span></td>
							</tr>
							<tr className="bg-white hover:bg-gray-200">
								<td className="px-0 py-4">
									<p>example@uncp.edu.pe</p>
								</td>
								<td className="px-0 py-4">
									<p>Nicolas</p>
								</td>
								<td className="px-0 py-4">08:00</td>
                                <td className="px-0 py-4">06:00</td>
								<td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-red-700 ">No Registrado</span></td>
								<td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-red-700 ">No Registrado</span></td>
							</tr>
							<tr className="bg-white hover:bg-gray-200">
								<td className="px-0 py-4">
									<p>example@uncp.edu.pe</p>
								</td>
								<td className="px-0 py-4">
									<p>Nicolas</p>
								</td>
								<td className="px-0 py-4">08:00</td>
                                <td className="px-0 py-4">06:00</td>
								<td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-green-700 "	>Registrado</span></td>
								<td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-red-700 ">No Registrado</span></td>
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
							<p>logistica</p>
						</li>
						<li className="w-full flex justify-between items-center mb-4 
						px-5 py-3.5 rounded-[10px] bg-gray-200 border-l-[10px] border-l-[blue] border-solid">
							<p>oti</p>
						</li>
						<li className="w-full flex justify-between items-center mb-4 
						px-5 py-3.5 rounded-[10px] bg-gray-200 border-l-[10px] border-l-[orange] border-solid">
							<p>rectorado</p>
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
