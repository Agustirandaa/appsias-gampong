<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class PostingController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard/Posting/index');
    }

    public function create()
    {
        return Inertia::render('Dashboard/Posting/CreatePosting');
    }
}
