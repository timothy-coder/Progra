import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';


export default function Profileuser(props) {
    return (
        <AuthenticatedLayout
            auth={auth}
        >
            <Head title="Profileuser" />

            <div className="login-box">
                
                   
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
