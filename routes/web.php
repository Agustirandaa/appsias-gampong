<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Dashboard\AparatController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\Dashboard\PostingController;
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

    Route::resource('/posting', PostingController::class);
    Route::resource('/aparatdesa', AparatController::class)->only(['index', 'store', 'create', 'destroy']);
});


Route::prefix('berita')->middleware([])->group(function () {
    Route::get('/', [PostController::class, 'index'])->name('berita');
});
