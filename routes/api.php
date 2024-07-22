<?php


use App\Http\Controllers\Dashboard\DashboardController;
use Illuminate\Support\Facades\Route;

Route::get('/splineareachart/getdatamonthlychart', [DashboardController::class, 'getMonthlyCounts']);
