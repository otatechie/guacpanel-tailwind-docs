<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DocumentationController;

/*
|--------------------------------------------------------------------------
| Documentation Routes
|--------------------------------------------------------------------------
*/

Route::prefix('documentation')->name('documentation.')->group(function () {
    Route::controller(DocumentationController::class)->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/installation', 'installation')->name('installation');
        Route::get('/configuration', 'configuration')->name('configuration');
        Route::get('/features', 'features')->name('features');
        Route::get('/components', 'components')->name('components');
        Route::get('/faq', 'faq')->name('faq');
        Route::get('/credits', 'credits')->name('credits');
    });
});
