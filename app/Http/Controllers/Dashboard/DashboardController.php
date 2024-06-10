<?php

namespace App\Http\Controllers\Dashboard;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {
        $user = Auth::user()->fullname;
        return Inertia::render('Dashboard/Dashboard', [
            'user' => $user
        ]);
    }
}
