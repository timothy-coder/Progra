import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faDownload, faPersonCircleCheck, faUserGroup, faWrench } from '@fortawesome/free-solid-svg-icons'
import Clock from '@/Components/Clock';
import Clockg from '@/Components/Clockg';
export default function Configuración(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Configuración" />

            <main className="w-full bg-white overflow-y-auto">
			

			<ul className="px-6 grid gap-6 mt-9 grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
				<li className="flex item-center gap-6 p-6 rounded-[20px] bg-[rgb(35,164,85)] text-white hover:text-gray-200 ">
                <FontAwesomeIcon icon={faUserGroup} className="w-20 h-20 text-4xl flex justify-center item-center rounded-[10px] bg-[rgb(35,164,85)]"/>
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
					<Clockg/>
					<span className="text-2xl">
						<p>Hora Actual</p>
						<p className="font-clock"><Clock/></p>
					</span>
				</li>
			</ul>


			<div className="px-6 flex flex-wrap gap-6 w-full mt-6">
				<div className="w-[100%]">
					<div className="flex items-center gap-4 mb-6">
						<h3 className="text-2xl font-semibold mr-auto">Entrada recientes</h3>
						<a href="#" className="pr-6 ">
					<span className="h-9 flex justify-center items-center
					 font-medium gap-2.5 bg-black text-white px-4 py-0 rounded-lg hover:text-[rgb(151,115,61)] "><FontAwesomeIcon icon={faDownload} />Descargar entradas</span>
				</a>
					</div>
					<table className="w-[100%] border-collapse h-98 break-all">
						<thead className="text-[13px] text-left pb-3 border-b-[black] border-b border-solid">
							<tr>
								<th>Correo</th>
                                <th>Usuario</th>
								<th>Codigo</th>
                                <th>Configuración</th>
							</tr>
						</thead>
						<tbody>
							<tr className="bg-white hover:bg-gray-200">
                                <td className="px-0 py-1">d_cargo@uncp.edu.pe</td>
                                <td className="px-0 py-1">Nicolas brandon pariona de la peña<a href=""></a></td>
								<td className="px-0 py-1">d_cargo@uncp.edu.pe</td>
								<td className="px-0 py-1">
                                <a href="#"><FontAwesomeIcon icon={faWrench} className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-black hover:bg-black hover:text-[rgb(151,115,61)]" />
                                </a></td>
							</tr>
							<tr className="bg-white hover:bg-gray-200">
                            <td className="px-0 py-1">d_cargo@uncp.edu.pe</td>
                                <td className="px-0 py-1">Nicolas brandon pariona de la peña<a href=""></a></td>
								<td className="px-0 py-1">d_cargo@uncp.edu.pe</td>
								<td className="px-0 py-1">
                                <a href="#"><FontAwesomeIcon icon={faWrench} className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-black hover:bg-black hover:text-[rgb(151,115,61)]"/>
                                </a></td>
							</tr>
							<tr className="bg-white hover:bg-gray-200">
                            <td className="px-0 py-1">d_cargo@uncp.edu.pe</td>
                                <td className="px-0 py-1">Nicolas brandon pariona de la peña<a href=""></a></td>
								<td className="px-0 py-1">d_cargo@uncp.edu.pe</td>
								<td className="px-0 py-1">
                                <a href="#"><FontAwesomeIcon icon={faWrench} className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-black hover:bg-black hover:text-[rgb(151,115,61)]"/>
                                </a></td>
							</tr>
							<tr className="bg-white hover:bg-gray-200">
                            <td className="px-0 py-1">d_cargo@uncp.edu.pe</td>
                                <td className="px-0 py-1">Nicolas brandon pariona de la peña<a href=""></a></td>
								<td className="px-0 py-1">d_cargo@uncp.edu.pe</td>
								<td className="px-0 py-1">
                                <a href="#"><FontAwesomeIcon icon={faWrench} className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-black hover:bg-black hover:text-[rgb(151,115,61)]"/>
                                </a></td>
							</tr>
							<tr className="bg-white hover:bg-gray-200">
                            <td className="px-0 py-1">d_cargo@uncp.edu.pe</td>
                                <td className="px-0 py-1">Nicolas brandon pariona de la peña<a href=""></a></td>
								<td className="px-0 py-1">d_cargo@uncp.edu.pe</td>
								<td className="px-0 py-1">
                                <a href="#"><FontAwesomeIcon icon={faWrench} className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-black hover:bg-black hover:text-[rgb(151,115,61)]"/>
                                </a></td>
							</tr>
						</tbody>
					</table>
				</div>
				
			</div>
			<div className="flex flex-wrap place-items-center place-content-center bg-[rgb(0,48,28)] text-white space-x-1 ">

				<p>Copyright</p>
				<FontAwesomeIcon icon={faCopyright}/>
				<p>2023 - Universidad Nacional del Centro del Perú</p>
			</div>
		</main>
        </AuthenticatedLayout>
    );
}
