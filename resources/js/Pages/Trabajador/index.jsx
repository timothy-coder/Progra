import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Trabajadores(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Trabajadores" />

            <div className="w-60 mx-0 max-h-fit py-0 flex">
                <div className="w-60 my-0 max-h-fit py-1 lg:px-8 space-y-1 bg-black">
                    <h1 className='bg-white'>
                        Usuarios
                    </h1>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
