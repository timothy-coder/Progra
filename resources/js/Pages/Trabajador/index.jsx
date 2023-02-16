import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Trabajadores(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Trabajadores" />

            <div className="bg-green">
                <img src="https://th.bing.com/th/id/OIP.o6JG4sQ8M5Nti2S71ohqTgAAAA?pid=ImgDet&rs=1" alt="" className='w-12 m-4' />
                <h1 className='text-sm font-bold px-5 py-2'>TRABAJADORES</h1>
                <table className='shadow-lg max-w-3 mx-9 my-3'>
                    <tr className=''>
                        <td>Nombre</td>
                        <td>Correo</td>
                        <td>Dependencia</td>
                        <td>Hora de entrada</td>
                        <td>Hora de salida</td>
                        <td>Reporte</td>
                    </tr>
                    <tr>
                        <td>Nombre</td>
                        <td>Correo</td>
                        <td>Dependencia</td>
                        <td>Hora de entrada</td>
                        <td>Hora de salida</td>
                        <td>Reporte</td>
                    </tr>
                    <tr>
                        <td>Nombre</td>
                        <td>Correo</td>
                        <td>Dependencia</td>
                        <td>Hora de entrada</td>
                        <td>Hora de salida</td>
                        <td>Reporte</td>
                    </tr>
                </table>
                <table className='shadow-lg m-6 '>
                    <tr>
                        <td>Nombre</td>
                        <td>Correo</td>
                        <td>Dependencia</td>
                        <td>Hora de entrada</td>
                        <td>Hora de salida</td>
                        <td>Reporte</td>

                    </tr>
                </table>
            </div>
            <div class="table-data">
				<div class="order">
					<div class="head">
						<h3>Entrada recientes</h3>
					</div>
					<table>
						<thead>
							<tr>
								<th>Usuario</th>
								<th>Hora de entrada</th>
                                <th>Hora de salida</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<p>Nicolas</p>
								</td>
								<td>08:00</td>
                                <td>06:00</td>
								<td><span class="status completed">Registrado</span></td>
							</tr>
							<tr>
								<td>
									<p>Nicolas</p>
								</td>
								<td>08:00</td>
                                <td>06:00</td>
								<td><span class="status pending">No Registrado</span></td>
							</tr>
							<tr>
								<td>
									<p>Nicolas</p>
								</td>
								<td>08:00</td>
                                <td>06:00</td>
								<td><span class="status process">Registrando</span></td>
							</tr>
							<tr>
								<td>
									<p>Nicolas</p>
								</td>
								<td>08:00</td>
                                <td>06:00</td>
								<td><span class="status pending">No Registrado</span></td>
							</tr>
							<tr>
								<td>
									<p>Nicolas</p>
								</td>
								<td>08:00</td>
                                <td>06:00</td>
								<td><span class="status completed">Registrado</span></td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="todo">
					<div class="head">
						<h3>Todas las entradas</h3>
						<i class='bx bx-plus' >+</i>
						<i class='bx bx-filter' >filtro</i>
					</div>
					<ul class="todo-list">
						<li class="completed">
							<p>logistica</p>
						</li>
						<li class="completed">
							<p>oti</p>
						</li>
						<li class="not-completed">
							<p>rectorado</p>
						</li>
						<li class="completed">
							<p>oti</p>
						</li>
						<li class="not-completed">
							<p>oti</p>
						</li>
					</ul>
				</div>
			</div>
        </AuthenticatedLayout>
    );
}
