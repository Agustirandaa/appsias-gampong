<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Resident;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ResidentController extends Controller
{
    public function store(Request $request)
    {
        $rules = [
            'family_id' => 'required',
            'nik' => 'required|integer|unique:residents,nik',
            'name' => 'required|max:35',
            'birthdate' => 'required',
            'gender' => 'required',
            'status' => 'required',
            'notelp' => 'required|max:13',
            'place_of_birth' => 'required|max:100',
        ];

        $validate = $request->validate($rules);
        Resident::create($validate);
        return redirect(route('keluarga.show', $request->family_id))->with('success', 'Data has been Added!');
    }


    public function edit($id)
    {
        $penduduk = Resident::find($id);
        return response()->json($penduduk);
    }

    public function update(Request $request, $id)
    {
        $rules = [
            'family_id' => 'required',
            'nik' => 'required|integer',
            'name' => 'required|max:35',
            'birthdate' => 'required',
            'gender' => 'required',
            'status' => 'required',
            'notelp' => 'required|max:13',
            'place_of_birth' => 'required|max:100',
        ];

        $validate = $request->validate($rules);
        $penduduk = Resident::find($id);
        $penduduk->update($validate);
        return redirect(route('keluarga.show', $request->family_id))->with('success', 'Data has been Updated!');
    }

    public function destroy($id)
    {
        $penduduk = Resident::find($id);
        $penduduk->delete();
        return redirect(route('keluarga.show', $penduduk->family_id))->with('success', 'Data has been Deleted!');
    }
}
