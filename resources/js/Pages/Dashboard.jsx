import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Dashboard" />
            <div className="w-60 mx-0 max-h-fit py-0 flex ">
            
            </div>
        </AuthenticatedLayout>
    );
}
