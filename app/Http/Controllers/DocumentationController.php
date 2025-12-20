<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class DocumentationController extends Controller
{
    public function index()
    {
        return Inertia::render('Documentation/IndexDocumentationPage');
    }

    public function installation()
    {
        return Inertia::render('Documentation/IndexInstallPage');
    }

    public function configuration()
    {
        return Inertia::render('Documentation/IndexConfigurationPage');
    }

    public function features()
    {
        return Inertia::render('Documentation/IndexFeaturePage');
    }

    public function components()
    {
        return Inertia::render('Documentation/IndexComponentPage');
    }

    public function faq()
    {
        return Inertia::render('Documentation/IndexFaqPage');
    }

    public function credits()
    {
        return Inertia::render('Documentation/IndexCreditsPage');
    }
}
