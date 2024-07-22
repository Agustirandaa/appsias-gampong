<?php

use App\Http\Controllers\Auth\AuthController;
use Illuminate\Support\Facades\Route;


Route::prefix('auth')->middleware(['guest'])->group(function () {

    Route::get('/', [AuthController::class, 'login'])->name('login');

    Route::post('/authenticate', [AuthController::class, 'authenticate']);

    Route::post('/forgot-password', [AuthController::class, 'forgotPassword'])->name('forgot-password');

    Route::get('/update-password/{token}', [AuthController::class, 'updatePassword'])->name('update-password');

    Route::post('/reset-password', [AuthController::class, 'resetPassword']);
});
