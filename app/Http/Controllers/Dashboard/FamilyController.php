<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Family;
use App\Models\Resident;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FamilyController extends Controller
{
    public function index()
    {

        request('search') ? (
            $keluargas = Family::search(request('search'))->with('resident')->latest()->paginate(10)
        ) : (
            $keluargas = Family::with('resident')->latest()->paginate(10)
        );

        return Inertia::render('Dashboard/Keluarga/index', [
            'keluargas' => $keluargas
        ]);
    }

    public function create()
    {
        return Inertia::render('Dashboard/Keluarga/CreateKeluarga');
    }

    public function store(Request $request)
    {
        $rules = [
            'no_kk' => 'required|integer|unique:families,no_kk',
            'name' => 'required|max:35',
            'dusun' => 'required|max:100',
        ];
        $validate = $request->validate($rules);
        Family::create($validate);
        return redirect(route('keluarga.index'))->with('success', 'Data has been Added!');
    }

    public function show($id)
    {
        $keluarga = Family::find($id);
        $residents = Resident::where('family_id', $keluarga->id)->get();
        return Inertia::render('Dashboard/Keluarga/ShowKeluarga', [
            'keluarga' => $keluarga,
            'residents' => $residents
        ]);
    }

    public function destroy($id)
    {
        $aparat = Family::find($id);
        $aparat->delete();
        return redirect(route('keluarga.index'))->with('success', 'Data has been Deleted!');
    }
}
