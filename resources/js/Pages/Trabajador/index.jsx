import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Clock from '../../Components/Clock';
import Clockg from '../../Components/Clockg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock,faCopyright, faDownload, faPersonCircleCheck, faUserGroup, faWrench } from '@fortawesome/free-solid-svg-icons'

export default function Trabajadores(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Trabajadores" />

        <main className="w-full bg-white overflow-y-auto">
			

			<ul className="px-6 grid gap-6 mt-9 grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
				<li className="flex item-center gap-6 p-11 rounded-[20px] bg-[rgb(35,164,85)] text-white  ">
				<FontAwesomeIcon icon={faUserGroup} className="w-30 h-20 text-4xl flex justify-center item-center rounded-[10px] bg-[rgb(35,164,85)]"/>
					<span className='text'>
						<h3 className="text-2xl font-semibold">9999</h3>
						<p>N° total de personal</p>
					</span>
				</li>
				<li className="flex item-center gap-6 p-11 rounded-[20px] bg-[rgb(139,144,147)] text-white ">
				<FontAwesomeIcon icon={faPersonCircleCheck} className="w-30 h-20 text-4xl flex justify-center item-center rounded-[10px] bg-[rgb(139,144,147)]"/>
					<span className="text">
						<h3 className="text-2xl font-semibold">1231</h3>
						<p>N° total de personal presente</p>
					</span>
				</li>
				<li className="flex item-center gap-6 p-6 rounded-[20px] bg-[rgb(12,73,187)] text-white ">
					<Clockg/>
					<span className="text-2xl">
						
						<p>Hora Actual</p>
						<p className="font-clock"><Clock/></p>
					</span>
				</li>
			</ul>
			

			<div className="px-6 flex wrap gap-6 w-full mt-6">
				<div className="w-[100%]">
					<div className="flex items-center gap-4 mb-6">
						<h3 className="text-2xl font-semibold mr-auto">Entrada recientes</h3>
						<a href="#" className="pr-6 ">
                    
					<span className="h-9 flex justify-center items-center
					 font-medium gap-2.5 bg-black text-white px-4 py-0 rounded-lg hover:text-[rgb(151,115,61)] "><FontAwesomeIcon icon={faDownload} />Descargar</span>
				</a>
					</div>
					<table className="w-full border-collapse h-100 break-all text-center">
						<thead className="text-[13px]  pb-3 border-b-[black] border-b border-solid text-center">
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
                                <td className="px-0 py-1">pepito123<a href=""></a></td>
								<td className="px-0 py-4">08:00</td>
                                <td className="px-0 py-4">06:00</td>
								<td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-green-700 ">08:00</span></td>
								<td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-green-700 ">06:15</span></td>
							</tr>
							<tr className="bg-white hover:bg-gray-200">
                            <td className="px-0 py-1">d_cargo@uncp.edu.pe</td>
                                <td className="px-0 py-1">pepito123<a href=""></a></td>
								<td className="px-0 py-4">08:00</td>
                                <td className="px-0 py-4">06:00</td>
								<td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-red-700 ">08:15</span></td>
								<td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-red-700 ">05:00</span></td>
							</tr>
							<tr className="bg-white hover:bg-gray-200">
                            <td className="px-0 py-1">d_cargo@uncp.edu.pe</td>
                                <td className="px-0 py-1">pepito123<a href=""></a></td>
								<td className="px-0 py-4">08:00</td>
                                <td className="px-0 py-4">06:00</td>
								<td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-red-700 ">09:00</span></td>
								<td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-red-700 ">04:00</span></td>
							</tr>
							<tr className="bg-white hover:bg-gray-200">
                            <td className="px-0 py-1">d_cargo@uncp.edu.pe</td>
                                <td className="px-0 py-1">pepito123<a href=""></a></td>
								<td className="px-0 py-4">08:00</td>
                                <td className="px-0 py-4">06:00</td>
								<td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-red-700 ">08:01</span></td>
								<td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-yellow-500 ">Justificado</span></td>
							</tr>
							<tr className="bg-white hover:bg-gray-200">
                            <td className="px-0 py-1">d_cargo@uncp.edu.pe</td>
                                <td className="px-0 py-1">pepito123<a href=""></a></td>
								<td className="px-0 py-4">08:00</td>
                                <td className="px-0 py-4">06:00</td>
								<td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-green-700 "	>07:55</span></td>
								<td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-red-700 ">05:59</span></td>
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
