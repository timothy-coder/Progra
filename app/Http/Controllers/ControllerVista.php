<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ControllerVista extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function render()
    {
        return view('controllers.');
    }

}
