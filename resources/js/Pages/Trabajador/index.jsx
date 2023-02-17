import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Clock from '../../Components/Clock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faDownload, faPeopleArrows, faUserGroup, faWrench } from '@fortawesome/free-solid-svg-icons'
export default function Trabajadores(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Trabajadores" />

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
							<a className="text-lime-800 pointer-events-none hover:text-[rgb(151,115,61)]" href="#">Trabajadores</a>
						</li>
					</ul>
				</div>
				<a href="#" className="pr-6 ">
                    
					<span className="h-9 flex justify-center items-center
					 font-medium gap-2.5 bg-black text-white px-4 py-0 rounded-lg hover:text-[rgb(151,115,61)] "><FontAwesomeIcon icon={faDownload} />Descargar reporte</span>
				</a>
			</div>

			<ul className="px-6 grid gap-6 mt-9 grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
				<li className="flex item-center gap-6 p-6 rounded-[20px] bg-[rgb(35,164,85)] text-white hover:text-gray-200 ">
				<FontAwesomeIcon icon={faUserGroup} className="w-20 h-20 text-4xl flex justify-center item-center rounded-[10px] bg-[rgb(35,164,85)]"/>
					<span className='text'>
						<h3 className="text-2xl font-semibold">9999</h3>
						<p>N° total de personal</p>
					</span>
				</li>
				<li className="flex item-center gap-6 p-6 rounded-[20px] bg-[rgb(139,144,147)] text-white hover:text-gray-200">
				<FontAwesomeIcon icon={faPeopleArrows} className="w-20 h-20 text-4xl flex justify-center item-center rounded-[10px] bg-[rgb(139,144,147)]"/>
					<span className="text">
						<h3 className="text-2xl font-semibold">1231</h3>
						<p>N° total de personal presente</p>
					</span>
				</li>
				<li className="flex item-center gap-6 p-6 rounded-[20px] bg-[rgb(12,73,187)] text-white ">
				
					<span >
						<p className="font-clock"><Clock/></p>
						<p>Hora Actual</p>
					</span>
				</li>
			</ul>
			

			<div className="px-6 flex wrap gap-6 w-full mt-6">
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
								<th>Status de entrada</th>
                                <th>Status de salida</th>
							</tr>
						</thead>
						<tbody>
							<tr className="bg-white hover:bg-gray-200">
                                <td className="px-0 py-1">d_cargo@uncp.edu.pe</td>
                                <td className="px-0 py-1">Nicolas brandon pariona de la peña<a href=""></a></td>
								<td className="px-0 py-4">08:00</td>
                                <td className="px-0 py-4">06:00</td>
								<td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-green-700 ">Registrado</span></td>
                                <td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-green-700 ">Registrado</span></td>
							</tr>
							<tr className="bg-white hover:bg-gray-200">
                            <td className="px-0 py-1">d_cargo@uncp.edu.pe</td>
                                <td className="px-0 py-1">Nicolas brandon pariona de la peña<a href=""></a></td>
								<td className="px-0 py-4">08:00</td>
                                <td className="px-0 py-4">06:00</td>
								<td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-red-700 ">No Registrado</span></td>
                                <td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-red-700 ">No Registrado</span></td>
							</tr>
							<tr className="bg-white hover:bg-gray-200">
                            <td className="px-0 py-1">d_cargo@uncp.edu.pe</td>
                                <td className="px-0 py-1">Nicolas brandon pariona de la peña<a href=""></a></td>
								<td className="px-0 py-4">08:00</td>
                                <td className="px-0 py-4">06:00</td>
								<td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-yellow-500 ">Registrando</span></td>
                                <td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-yellow-500 ">Registrando</span></td>
							</tr>
							<tr className="bg-white hover:bg-gray-200">
                            <td className="px-0 py-1">d_cargo@uncp.edu.pe</td>
                                <td className="px-0 py-1">Nicolas brandon pariona de la peña<a href=""></a></td>
								<td className="px-0 py-4">08:00</td>
                                <td className="px-0 py-4">06:00</td>
								<td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-red-700 ">No Registrado</span></td>
                                <td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-red-700 ">No Registrado</span></td>
							</tr>
							<tr className="bg-white hover:bg-gray-200">
                            <td className="px-0 py-1">d_cargo@uncp.edu.pe</td>
                                <td className="px-0 py-1">Nicolas brandon pariona de la peña<a href=""></a></td>
								<td className="px-0 py-4">08:00</td>
                                <td className="px-0 py-4">06:00</td>
								<td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-green-700 "	>Registrado</span></td>
                                <td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-green-700 "	>Registrado</span></td>
							</tr>
						</tbody>
					</table>
				</div>
				
			</div>
		</main>
		
        </AuthenticatedLayout>
    );
}
