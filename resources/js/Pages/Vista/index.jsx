import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head,Link } from '@inertiajs/react';

export default function Vista(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Vista" />


        <div class="todo">
          <div class="login-box px-10 py-2">

          <div>
            <h2 className="text-2xl">Cambio de informacion</h2>
            <form>
                <div className="flex flex-col w-100 ">
                  <label>Correo</label>
                  <input type="email" name="" required="" placeholder=""></input>
                  <label>Nombre</label>
                  <input type="text" name="" required=""></input>
                  <label>Dependencia</label>
                  <input type="number" name="" required=""></input>
                  <label>Hora de entrada</label>
                  <input type="time" name="" required=""></input>
                  <label>Hora de salida</label>
                  <input type="time" name="" required=""></input>
                  <label>Año de inicio</label>
                  <input type="number" name="" required=""></input>
                  
                </div>
                <div className="flex flex-col w-100 py-6 place-items-center"><Link href={route('config.index')}><td className=" font-cursor-pointer text-2.5 text-white 
								font-bold px-4 py-1.5 rounded-[20px] bg-black hover:bg-black hover:text-[rgb(151,115,61)]">CONFIRMAR CAMBIO
                </td></Link></div>


            </form>
          </div>
        </div>
        </div>
        </AuthenticatedLayout>
    );
}
