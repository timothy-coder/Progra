import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';


export default function Vista(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Vista" />

            <div className="absolute top-[50%] left-[50%] w-[400px] p-[40px] translate-x-[-50%,-50%] box-border shadow-[0_15px_25_px_white] rounded-[10px]">
                <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>
                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
                <form>
                <div className="classuserbox">
                    <input type="text" className="text" />
                    <label>Correo</label>
                </div>
                <div className="classuserbox">
                    <input type="text" className="text" />
                            <label>Nombre</label>
                        </div>
                        <div className="classuserbox">
                            <input type="text" className="text" />
                            <label>Codigo</label>
                        </div>
                        <div className="classuserbox">
                            <input type="text" className="text" />
                            <label>Dependencia</label>
                        </div>
                        <div className="classuserbox">
                            <input type="text" className="text" />
                            <label>Hora de entrada</label>
                        </div>
                        <div className="classuserbox">
                            <input type="text" className="text" />
                            <label>Hora de salida</label>
                        </div>
                        <div className="classuserbox">
                            <input type="text" className="text" />
                            <label>Año de inicio</label>
                        </div>
                        </form>
            
                
            </div>
        </AuthenticatedLayout>
    );
}
