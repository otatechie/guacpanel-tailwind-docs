<?php

use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

Route::get('/terms', [PageController::class, 'terms'])->name('terms');
Route::get('/', [PageController::class, 'home'])->name('home');

require __DIR__.'/documentation.php';
