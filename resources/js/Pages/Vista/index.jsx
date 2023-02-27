import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';


export default function Vista(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Vista" />

        <div class="todo">
          <div class="login-box">
            <h2>Cambio de informacion</h2>
            <form>
                <div className="inline-block">
                  <label>Correo</label>
                  <input type="email" name="" required=""></input>
                  <label>Nombre</label>
                  <input type="text" name="" required=""></input>
                </div>
            </form>
          </div>
        </div>
        </AuthenticatedLayout>
    );
}
