import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Reporte(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Reporte" />


		

	
		<main className="w-full px-6 overflow-y-auto">
			<div className="flex items-center justify-between gap-4 flex-wrap">
				<div className="">
					<h1 className="text-4xl font-semibold mb-5 text-lime-700">Dashboard</h1>
					<ul className="flex items-center gap-4">
						<li>
							<a className="text-lime-700 pointer-events-none" href="#">Dashboard</a>
						</li>
						<li className="text-lime-700">/</li>
						<li>
							<a className="text-lime-500 pointer-events-none" href="#">Casa</a>
						</li>
					</ul>
				</div>
				<a href="#" class="btn-download">
					<i class='bx bxs-cloud-download' ></i>
					<span className="h-9 flex justify-center items-center
					 font-medium gap-2.5 bg-blue-400 px-4 py-0 rounded-lg ">Descargar reporte</span>
				</a>
			</div>

			<ul className="grid gap-6 mt-9 grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
				<li className="flex item-center gap-6 p-6 rounded-[20px] bg-blue-400">
					<i className="w-20 h-20 text-4xl flex justify-center item-center rounded-[10px] bg-green-400" ></i>
					<span class="text">
						<h3 className="text-2xl font-semibold">9999</h3>
						<p>N° total de personal</p>
					</span>
				</li>
				<li className="flex item-center gap-6 p-6 rounded-[20px] bg-blue-400">
					<i className="w-20 h-20 text-4xl flex justify-center item-center rounded-[10px] bg-green-400" ></i>
					<span class="text">
						<h3 className="text-2xl font-semibold">1231</h3>
						<p>N° total de personal presente</p>
					</span>
				</li>
				<li className="flex item-center gap-6 p-6 rounded-[20px] bg-blue-400">
					<i className="w-20 h-20 text-4xl flex justify-center item-center rounded-[10px] bg-green-400" ></i>
					<span class="text">
						<h3 className="text-2xl font-semibold">08:00</h3>
						<p>Hora de entrada promedio</p>
					</span>
				</li>
			</ul>


			<div className="flex wrap gap-6 w-full mt-6">
				<div className="grow basis-[500px]">
					<div className="flex items-center gap-4 mb-6">
						<h3 className="text-2xl font-semibold mr-auto">Entrada recientes</h3>
					</div>
					<table className="w-full border-collapse">
						<thead className="text-[13px] text-left pb-3 border-b-[black] border-b border-solid">
							<tr>
								<th>Usuario</th>
								<th>Hora de entrada</th>
                                <th>Hora de salida</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							<tr className="bg-white hover:bg-gray-200">
								<td className="px-0 py-4">
									<p>Nicolas</p>
								</td>
								<td className="px-0 py-4">08:00</td>
                                <td className="px-0 py-4">06:00</td>
								<td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-green-700 ">Registrado</span></td>
							</tr>
							<tr className="bg-white hover:bg-gray-200">
								<td className="px-0 py-4">
									<p>Nicolas</p>
								</td>
								<td className="px-0 py-4">08:00</td>
                                <td className="px-0 py-4">06:00</td>
								<td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-red-700 ">No Registrado</span></td>
							</tr>
							<tr className="bg-white hover:bg-gray-200">
								<td className="px-0 py-4">
									<p>Nicolas</p>
								</td>
								<td className="px-0 py-4">08:00</td>
                                <td className="px-0 py-4">06:00</td>
								<td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-yellow-500 ">Registrando</span></td>
							</tr>
							<tr className="bg-white hover:bg-gray-200">
								<td className="px-0 py-4">
									<p>Nicolas</p>
								</td>
								<td className="px-0 py-4">08:00</td>
                                <td className="px-0 py-4">06:00</td>
								<td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-red-700 ">No Registrado</span></td>
							</tr>
							<tr className="bg-white hover:bg-gray-200">
								<td className="px-0 py-4">
									<p>Nicolas</p>
								</td>
								<td className="px-0 py-4">08:00</td>
                                <td className="px-0 py-4">06:00</td>
								<td className="px-0 py-4"><span className="text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-green-700 "	>Registrado</span></td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="grow basis-[300px]">
					<div className="flex">
						<h3>Todas las entradas</h3>
						<i className="items-end" >+</i>
						<i className="items-end" >filtro</i>
					</div>
					<ul className="w-full">
						<li className="w-full flex justify-between items-center mb-4 
						px-5 py-3.5 rounded-[10px] bg-gray-200">
							<p>logistica</p>
						</li>
						<li className="border-l-[10px] border-l-[blue] border-solid">
							<p>oti</p>
						</li>
						<li className="border-l-[10px] border-l-[orange] border-solid">
							<p>rectorado</p>
						</li>
						<li class="border-l-[10px] border-l-[blue] border-solid">
							<p>oti</p>
						</li>
						<li className="border-l-[10px] border-l-[orange] border-solid">
							<p>oti</p>
						</li>
					</ul>
				</div>
			</div>
		</main>
        </AuthenticatedLayout>
    );
}
