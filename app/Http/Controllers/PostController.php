<?php

namespace App\Http\Controllers;

use App\Models\Postings;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {

        if (request('search')) {
            $post = Postings::search(request('search'))->with('category')->latest()->paginate(9);
        } else {
            $post = Postings::with('category')->latest()->paginate(9);
        }

        return Inertia::render('Posts', [
            'posts' => $post
        ]);
    }


    public function show($id)
    {
        $post = Postings::with('category')->find($id);
        return Inertia::render('SinglePost', [
            'post' => $post
        ]);
    }
}
