<?php

namespace App\Http\Controllers\Dashboard;

use Inertia\Inertia;
use App\Models\Aparat;
use App\Models\Family;
use App\Models\Postings;
use App\Models\Resident;
use App\Http\Controllers\Controller;
use Carbon\Carbon;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard/Dashboard', [
            'totalPosting' => Postings::count(),
            'totalKeluarga' => Family::count(),
            'totalPenduduk' => Resident::count(),
            'totalAparat' => Aparat::count(),
        ]);
    }



    public function getMonthlyCounts()
    {
        $currentYear = Carbon::now()->year;

        // Inisialisasi array untuk menyimpan jumlah per bulan
        $postingsCounts = array_fill(0, 12, 0);
        $familiesCounts = array_fill(0, 12, 0);
        $residentsCounts = array_fill(0, 12, 0);

        // Hitung jumlah postingan per bulan
        $posts = Postings::whereYear('created_at', $currentYear)->get();
        foreach ($posts as $post) {
            $month = $post->created_at->month - 1; // Carbon bulan dimulai dari 1, array dimulai dari 0
            $postingsCounts[$month]++;
        }

        // Hitung jumlah keluarga per bulan
        $families = Family::whereYear('created_at', $currentYear)->get();
        foreach ($families as $family) {
            $month = $family->created_at->month - 1;
            $familiesCounts[$month]++;
        }

        // Hitung jumlah penduduk per bulan
        $residents = Resident::whereYear('created_at', $currentYear)->get();
        foreach ($residents as $resident) {
            $month = $resident->created_at->month - 1;
            $residentsCounts[$month]++;
        }

        return response()->json([
            'postings' => $postingsCounts,
            'families' => $familiesCounts,
            'residents' => $residentsCounts,
        ]);
    }
}
