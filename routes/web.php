<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Dashboard\AparatController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\Dashboard\FamilyController;
use App\Http\Controllers\Dashboard\PostingController;
use App\Http\Controllers\Dashboard\ResidentController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;



Route::get('/', [HomeController::class, 'index'])->name('home');

Route::prefix('auth')->middleware(['guest'])->group(function () {
    Route::get('/login', [AuthController::class, 'login'])->name('login');

    Route::post('/authenticate', [AuthController::class, 'authenticate']);
});

Route::prefix('dashboard')->middleware(['auth'])->group(function () {
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

    Route::resource('/posting', PostingController::class)->except('update');
    //route update, karena inertiajs tidak dukung method put untuk unggah file sedangkan laravel route resourcenya untuk update methodya patch dan put 
    Route::post('/posting/update/{id}', [PostingController::class, 'update'])->name('posting.update');

    Route::resource('/keluarga', FamilyController::class)->names('keluarga');
    Route::resource('/penduduk', ResidentController::class)->names('penduduk')->except('show');

    Route::resource('/aparatdesa', AparatController::class)->only(['index', 'store', 'create', 'destroy']);
});


Route::prefix('news')->middleware([])->group(function () {
    Route::resource('/post', PostController::class)->only(['index', 'show']);
});



// Request data untuk grafik

Route::get('/splineareachart/getdatamonthlychart', [DashboardController::class, 'getMonthlyCounts']);
