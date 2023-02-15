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
        </AuthenticatedLayout>
    );
}
