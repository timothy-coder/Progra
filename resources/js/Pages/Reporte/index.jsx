import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Reporte(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Reporte" />

            <h1 className="text-3xl">
                Logo
            </h1>
            <h4 className='text-xl'>Generador de Reportes</h4>
        </AuthenticatedLayout>
    );
}
