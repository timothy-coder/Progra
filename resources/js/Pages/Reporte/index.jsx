import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Reporte(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Reporte" />

            <section id="content">
		

	
		<main>
			<div class="head-title">
				<div class="left">
					<h1>Dashboard</h1>
					<ul class="breadcrumb">
						<li>
							<a href="#">Dashboard</a>
						</li>
						<li>/</li>
						<li>
							<a class="active" href="#">Casa</a>
						</li>
					</ul>
				</div>
				<a href="#" class="btn-download">
					<i class='bx bxs-cloud-download' ></i>
					<span class="text">Descargar reporte</span>
				</a>
			</div>

			<ul class="box-info">
				<li>
					<i class='bx bxs-calendar-check' ></i>
					<span class="text">
						<h3>9999</h3>
						<p>N° total de personal</p>
					</span>
				</li>
				<li>
					<i class='bx bxs-group' ></i>
					<span class="text">
						<h3>1231</h3>
						<p>N° total de personal presente</p>
					</span>
				</li>
				<li>
					
					<span class="text">
						<h3>08:00</h3>
						<p>Hora de entrada promedio</p>
					</span>
				</li>
			</ul>


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
		</main>
		
	</section>
        </AuthenticatedLayout>
    );
}
