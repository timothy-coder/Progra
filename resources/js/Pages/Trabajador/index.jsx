import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Trabajadores(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Trabajadores" />

            <div className="">
                <h1 className='text-sm font-bold'>TRABAJADORES</h1>
                <table className='shadow-lg'>
                    <tr>
                        <td>Nombre</td>
                        <td>Correo</td>
                        <td>Dependencia</td>
                        <td>Hora de entrada</td>
                        <td>Hora de salida</td>
                        <td>Reporte</td>

                    </tr>
                </table>
                <table className='shadow-lg'></table>
            </div>
        </AuthenticatedLayout>
    );
}
