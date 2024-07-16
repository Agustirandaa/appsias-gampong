<?php

namespace App\Http\Controllers;

use App\Models\Aparat;
use App\Models\Postings;
use App\Models\Family;
use App\Models\Resident;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $aparats = Aparat::all();
        return Inertia::render('Home', [
            'aparats' => $aparats,
            'totalPosting' => Postings::count(),
            'totalKeluarga' => Family::count(),
            'totalPenduduk' => Resident::count(),
            'totalAparat' => Aparat::count(),
        ]);
    }
}
