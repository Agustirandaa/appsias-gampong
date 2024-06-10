<?php

namespace App\Http\Controllers\Dashboard;

use Inertia\Inertia;
use App\Models\Aparat;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;

class AparatController extends Controller
{
    public function index()
    {
        $aparats = Aparat::paginate(10);
        return Inertia::render('Dashboard/Aparat/index', [
            'aparats' => $aparats
        ]);
    }

    public function create()
    {
        return Inertia::render('Dashboard/Aparat/CreateAparat');
    }

    public function store(Request $request)
    {
        $rules = [
            'name' => 'required|max:35',
            'position' => 'required|max:30',
            'description' => 'required|max:300',
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ];

        $validate = $request->validate($rules);

        $image = date('Ymd_His') . '-' . $request->file('image')->getClientOriginalName();
        $request->file('image')->move(public_path('/aparat-images/'), $image);
        $validate['image'] = 'aparat-images/' . $image;

        Aparat::create($validate);
        return redirect(route('aparatdesa.index'))->with('success', 'Data has been Added!');
    }

    public function destroy($id)
    {
        $aparat = Aparat::find($id);
        if ($aparat->image) {
            File::delete(public_path($aparat->image));
        }
        $aparat->delete();
        return redirect(route('aparatdesa.index'))->with('success', 'Data has been Deleted!');
    }
}
