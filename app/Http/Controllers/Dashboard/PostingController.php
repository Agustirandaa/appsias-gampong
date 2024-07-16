<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Postings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class PostingController extends Controller
{
    public function index()
    {

        request('search') ? (
            $postings = Postings::search(request('search'))->with('category')->latest()->paginate(8)
        ) : (
            $postings = Postings::with('category')->latest()->paginate(8)
        );

        return Inertia::render('Dashboard/Posting/index', [
            'postings' => $postings,
        ]);
    }

    public function create()
    {
        $category = Category::all();
        return Inertia::render('Dashboard/Posting/CreatePosting', [
            'category' => $category
        ]);
    }

    public function store(Request $request)
    {
        $rules = [
            'title' => 'required|max:35',
            'excerpt' => 'required|max:255',
            'category_id' => 'required',
            'content' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ];
        $validate = $request->validate($rules);

        $image = date('Ymd_His') . '-' . $request->file('image')->getClientOriginalName();
        $request->file('image')->move(public_path('/post-images/'), $image);
        $validate['image'] = 'post-images/' . $image;

        $validate['user_id'] = Auth::user()->id;
        Postings::create($validate);
        return redirect(route('posting.index'))->with('success', 'Postings has been Added!');
    }

    public function show($id)
    {
        $postings = Postings::find($id);
        return Inertia::render('Dashboard/Posting/ShowPosting', [
            'postings' => $postings
        ]);
    }


    public function edit($id)
    {
        $postings = Postings::with('category')->find($id);
        $category = Category::all();
        return Inertia::render('Dashboard/Posting/EditPosting', [
            'postings' => $postings,
            'category' => $category
        ]);
    }


    public function update(Request $request, $id)
    {
        $rules = [
            'title' => 'required|max:35',
            'excerpt' => 'required|max:255',
            'category_id' => 'required',
            'content' => 'required',
        ];

        if ($request->hasFile('image')) $rules['image'] = 'required|image|mimes:jpeg,png,jpg|max:2048';

        $validate = $request->validate($rules);

        if ($request->hasFile('image')) {

            if ($request->old_image) File::delete(public_path($request->old_image));

            $image = date('Ymd_His') . '-' . $request->file('image')->getClientOriginalName();
            $request->file('image')->move(public_path('/post-images/'), $image);
            $validate['image'] = 'post-images/' . $image;
        }

        $validate['user_id'] = Auth::user()->id;
        Postings::where('id', $id)->update($validate);
        return redirect(route('posting.index'))->with('success', 'Postings has been Updated!');
    }


    public function destroy($id)
    {
        $postings = Postings::find($id);
        if ($postings->image) File::delete(public_path($postings->image));
        $postings->delete();
        return redirect(route('posting.index'))->with('success', 'Data has been Deleted!');
    }
}
