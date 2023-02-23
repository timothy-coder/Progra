<?php

use App\Http\Controllers\{DependenciasController,
                          ProfileController,
                          ReporteController,
                          TrabajadorController,
                          UserController,
                          ConfigController
                        };

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    Route::get('/reportes',[ReporteController::class,'index'])->name('reporte.index');
    Route::get('/trabajadores',[TrabajadorController::class,'index'])->name('trabajador.index');
    Route::get('/usuarios',[UserController::class,'index'])->name('user.index');
    Route::get('/dependencia',[DependenciasController::class,'index'])->name('dependencia.index');
    Route::get('/config',[ConfigController::class,'index'])->name('config.index');
    /*
    Route::get('/profileuser',[ConfigController::class,'edit'])->name('profile.edit');

    */
    

});

require __DIR__.'/auth.php';
