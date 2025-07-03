<script setup>
import TableOfContents from '@/components/Shared/Public/TableOfContents.vue'

const tocItems = [
  {
    id: 'security-authentication',
    title: 'Security & Authentication',
    isHeader: true
  },
  {
    id: 'authentication',
    title: 'Authentication',
    indent: true
  },
  {
    id: 'security-middleware',
    title: 'Security Middleware',
    indent: true
  },
  {
    id: 'authentication-logs',
    title: 'Authentication Logs',
    indent: true
  },
  {
    id: 'browser-session-management',
    title: 'Browser Session Management',
    indent: true
  },
  {
    id: 'permissions-roles',
    title: 'Permissions & Roles',
    indent: true
  },
  {
    id: 'data-management',
    title: 'Data Management',
    isHeader: true
  },
  {
    id: 'data-tables',
    title: 'Data Tables',
    indent: true
  },
  {
    id: 'file-management',
    title: 'File Uploads',
    indent: true
  },
  {
    id: 'typesense-search',
    title: 'Typesense Search',
    indent: true
  },
  {
    id: 'activity-tracking',
    title: 'Activity Tracking',
    indent: true
  },
  {
    id: 'backup-system',
    title: 'Backup System',
    indent: true
  }
]
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Main Content Container -->
    <div class="relative">
      <!-- Main Content -->
      <div class="max-w-3xl">
        <!-- Hero Section -->
        <div class="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-8 sm:p-10 mb-16 shadow-xl ring-1 ring-black/5">
          <h1 class="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Features
          </h1>
          <p class="text-emerald-50 text-xl leading-relaxed mb-10 max-w-3xl">
            Explore the powerful features that make GuacPanel the perfect starting point for your Laravel admin interface.
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="/docs/installation"
              class="group inline-flex items-center px-6 py-3 bg-white text-emerald-700 rounded-xl font-medium shadow-sm hover:bg-emerald-50 transition-all duration-200 hover:scale-105">
              <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
                <path d="M12 4v16m0-16l-4 4m4-4l4 4" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              Get Started
            </a>
            <a href="/docs/components"
              class="group inline-flex items-center px-6 py-3 bg-emerald-500 text-white rounded-xl font-medium shadow-sm hover:bg-emerald-400 transition-all duration-200 hover:scale-105">
              <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
                <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              View Components
            </a>
          </div>
        </div>

        <!-- Security & Authentication Section Header -->
        <div class="mb-8" id="security-authentication">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Security & Authentication</h2>
          <p class="text-gray-600 dark:text-gray-300">
            Comprehensive security features and authentication options to protect your application and users.
          </p>
        </div>

        <!-- Authentication Section -->
        <section class="mb-12 ml-4" id="authentication">
          <h2 class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            <span class="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg mr-3">
              <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none">
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            Authentication
          </h2>
          <div class="space-y-6">
            <!-- Introduction Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Introduction</h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                GuacPanel integrates <a href="https://pqina.nl/filepond/" target="_blank" class="text-emerald-600 hover:text-emerald-500">FilePond</a> to provide a modern, feature-rich file upload system. This integration offers a seamless user experience with drag-and-drop functionality, real-time previews, and robust validation. The system supports image and PDF previews, file type validation, size restrictions, and includes built-in security features like CSRF protection and server-side validation.
              </p>
            </div>

            <!-- Passwordless Authentication Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Passwordless Authentication</h3>
              <div class="space-y-8">
                <!-- Magic Links -->
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">Magic Links</h4>
                  <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Secure authentication through time-limited email magic links.
                  </p>
                  <pre class="bg-gray-900 text-gray-100 rounded-md p-4 overflow-x-auto text-sm"><code>Route::middleware(['guest', 'web'])->group(function () {
    Route::controller(MagicLinkController::class)->group(function () {
        Route::get('/magic-link/register', 'create')->name('magic.register.create');
        Route::post('/register/magic-link', 'register')->name('magic.register');
        Route::post('/login/magic-link', 'login')->name('magic.login.request');
        Route::get('/magic-link/{token}', 'authenticate')->name('magic.login');
    });
});</code></pre>
                </div>
              </div>
            </div>

            <!-- Additional Features Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Additional Features</h3>
              <div class="space-y-8">
                <!-- Password Reset -->
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">Password Reset</h4>
                  <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Secure password recovery with time-limited reset tokens.
                  </p>
                  <pre class="bg-gray-900 text-gray-100 rounded-md p-4 overflow-x-auto text-sm"><code>Fortify::resetUserPasswordsUsing(ResetUserPassword::class);

Route::get('/reset-password/{token}', function ($token) {
    return view('auth.reset-password', ['token' => $token]);
})->middleware(['guest'])->name('password.reset');</code></pre>
                </div>

                <!-- Email Verification -->
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">Email Verification</h4>
                  <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Ensures user email authenticity through verification process.
                  </p>
                  <pre class="bg-gray-900 text-gray-100 rounded-md p-4 overflow-x-auto text-sm"><code>Fortify::verifyEmailView(function () {
    return view('auth.verify-email');
});

Route::get('/email/verify/{id}/{hash}', [VerifyEmailController::class, '__invoke'])
    ->middleware(['signed', 'throttle:6,1'])
    ->name('verification.verify');</code></pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Security Middleware Section -->
        <section class="mb-12 ml-4" id="security-middleware">
          <h2 class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            <span class="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg mr-3">
              <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            Security Middleware
          </h2>
          <div class="space-y-6">
            <!-- Introduction Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Introduction</h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm mb-6">
                GuacPanel's security middleware layer provides robust protection for your Laravel application. 
                This middleware suite automatically handles critical security checks on every request, including:
              </p>
              <ul class="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>Account status verification</li>
                <li>Password policy enforcement</li>
                <li>Two-factor authentication requirements</li>
                <li>Session security management</li>
              </ul>
            </div>

            <!-- Account Security Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Account Security</h3>
              <div class="space-y-8">
                <!-- Account Disabling -->
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">Account Disabling</h4>
                  <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Automatically prevents disabled accounts from accessing the application by checking account status on each request.
                  </p>
                  <pre class="bg-gray-900 text-gray-100 rounded-md p-4 overflow-x-auto text-sm"><code>public function handleRequest(Request $request, Closure $next): Response
{
    if (auth()->check() && auth()->user()->is_disabled) {
        auth()->logout();
        session()->flash('error', 'Your account has been disabled.');
        return redirect()->route('login');
    }

    return $next($request);
}</code></pre>
                </div>

                <!-- Two-Factor Authentication -->
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">Two-Factor Authentication</h4>
                  <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Enforces 2FA requirements based on user settings and system policies.
                  </p>
                  <pre class="bg-gray-900 text-gray-100 rounded-md p-4 overflow-x-auto text-sm"><code>public function handleRequest(Request $request, Closure $next): Response
{
    if (auth()->check()) {
        $user = auth()->user();
        if ($user->require_2fa_verify) {
            session()->flash('warning', 'Two-Factor Authentication is required.');
            return redirect()->route('two-factor');
        }
    }

    return $next($request);
}</code></pre>
                </div>
              </div>
            </div>

            <!-- Password Security Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Password Security</h3>
              <div class="space-y-8">
                <!-- Password Expiry -->
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">Password Expiry</h4>
                  <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Enforces password rotation policies by tracking and checking password age.
                  </p>
                  <pre class="bg-gray-900 text-gray-100 rounded-md p-4 overflow-x-auto text-sm"><code>public function handleRequest(Request $request, Closure $next): Response
{
    if (auth()->check()) {
        $user = auth()->user();
        if ($settings = Settings::first()) {
            if ($settings->password_expiry && $user->isPasswordExpired()) {
                session()->flash('warning', 'Your password has expired. Please change it to continue.');
                return redirect()->route('user.password.expired');
            }
        }
    }

    return $next($request);
}</code></pre>
                </div>

                <!-- Force Password Change -->
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">Force Password Change</h4>
                  <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Enables administrators to require immediate password changes for security purposes.
                  </p>
                  <pre class="bg-gray-900 text-gray-100 rounded-md p-4 overflow-x-auto text-sm"><code>public function handleRequest(Request $request, Closure $next): Response
{
    if (auth()->check() && auth()->user()->force_password_change) {
        session()->flash('warning', 'You must change your password before continuing.');
        return redirect()->route('user.force-password-change');
    }

    return $next($request);
}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Authentication Logs Section -->
        <section class="mb-12 ml-4" id="authentication-logs">
          <h2 class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            <span class="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg mr-3">
              <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            Authentication Logs
          </h2>
          <div class="space-y-6">
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                GuacPanel automatically tracks all login activity, storing user details, timestamp, IP, device info,
                and login status. The system uses Laravel events for logging and provides a dashboard view
                where you can filter logs by user, date, success/failure, and IP address.
              </p>
            </div>
          </div>
        </section>

        <!-- Browser Session Management Section -->
        <section class="mb-12 ml-4" id="browser-session-management">
          <h2 class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            <span class="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg mr-3">
              <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none">
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            Browser Session Management
          </h2>
          <div class="space-y-6">
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                GuacPanel uses <a href="https://laravel.com/docs/session" class="text-emerald-600 hover:text-emerald-500">Laravel Sessions</a> to let users monitor and control their active sessions, showing
                device type, browser, and last activity. Users can log out from individual sessions or all devices at
                once.
              </p>
            </div>
          </div>
        </section>

        <!-- Permissions & Roles Section -->
        <section class="mb-12 ml-4" id="permissions-roles">
          <h2 class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            <span class="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg mr-3">
              <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none">
                <path d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            Permissions & Roles
          </h2>
          <div class="space-y-6">
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Introduction</h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm mb-6">
                Built on <a href="https://spatie.be/docs/laravel-permission" class="text-emerald-600 hover:text-emerald-500">Spatie's Laravel-Permission</a>, GuacPanel offers fine-grained access control through an
                easy-to-use roles and permissions system. Manage everything through a clean UI - for
                managing users' roles, and permissions.
              </p>
              <ul class="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>Create and assign roles visually</li>
                <li>Set granular permissions for each role</li>
                <li>View permission inheritance at a glance</li>
                <li>View all users and their roles and permissions</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Data Management Section Header -->
        <div class="mb-8 mt-16" id="data-management">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Data Management</h2>
          <p class="text-gray-600 dark:text-gray-300">
            Powerful tools for managing your application's data, files, and system backups.
          </p>
        </div>

        <!-- Data Tables Section -->
        <section class="mb-12 ml-4" id="data-tables">
          <h2 class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            <span class="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg mr-3">
              <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none">
                <path d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            Data Tables
          </h2>
          <div class="space-y-6">
            <!-- Introduction Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Introduction</h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm mb-6">
                GuacPanel provides a powerful data table interface built on <a href="https://tanstack.com/table" class="text-emerald-600 hover:text-emerald-500">TanStack Table</a>. Our data tables offer 
                a complete solution for data management, featuring:
              </p>
              <ul class="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>Row selection with bulk actions</li>
                <li>Server-side pagination and sorting</li>
                <li>Built-in search with customizable filters</li>
                <li>CSV export of selected or all rows</li>
                <li>Responsive design with dark mode support</li>
                <li>Customizable page sizes and spacing styles</li>
              </ul>
            </div>

            <!-- Table Configuration Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Table Configuration</h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Set up your columns and table state with type-safe configurations.
              </p>
              <pre class="bg-gray-900 text-gray-100 rounded-md p-4 overflow-x-auto text-sm"><code>// Import required dependencies
import { ref } from 'vue'
import { useTable } from '@tanstack/vue-table'
import { createColumnHelper } from '@tanstack/table-core'

// Initialize column helper
const columnHelper = createColumnHelper()

// Define table state
const sorting = ref([])
const pagination = ref({
    pageIndex: 0,
    pageSize: 10
})

// Define table columns
const columns = [
    columnHelper.accessor('name', {
        header: 'Name',
        cell: (info) => info.getValue()
    }),
    columnHelper.accessor('email', {
        header: 'Email',
        cell: info => info.getValue()
    }),
    columnHelper.accessor('status', {
        header: 'Status',
        cell: info => info.getValue(),
        // Add custom filter menu for status column
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        }
    })
]

// Features usage
const table = {
    'data': data,
    'columns': columns,
    'pageCount': totalPages,
    'state': {
        sorting,
        pagination
    }
}</code></pre>
            </div>

            <!-- Actions and Events Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Actions and Events</h3>
              <div class="space-y-8">
                <!-- Action Buttons -->
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">Action Buttons</h4>
                  <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Add custom action buttons to your table with event handlers.
                  </p>
                  <pre class="bg-gray-900 text-gray-100 rounded-md p-4 overflow-x-auto text-sm"><code>// Add to your columns array
columnHelper.display({
    id: 'actions',
    cell: (info) => {
        const user = info.row.original
        return h('div', { class: 'space-x-2' }, [
            h('button', {
                onClick: () => handleEdit(info.row.original)
            }, 'Edit'),
            h('button', {
                onClick: () => handleDelete(info.row.original)
            }, 'Delete')
        ])
    }
})

// Action handlers
const handleEdit = (user) => {
    router.push(`/users/edit/${user.id}`)
}

const handleDelete = async (user) => {
    if (!confirm('Are you sure you want to delete this user?')) return
    
    router.delete(route('users.destroy', { user: user.id }), {
        preserveScroll: true,
        onSuccess: () => flash('User deleted successfully')
    })
}</code></pre>
                </div>
              </div>
            </div>

            <!-- Backend Integration Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Backend Integration</h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Set up your backend controller to provide paginated data.
              </p>
              <pre class="bg-gray-900 text-gray-100 rounded-md p-4 overflow-x-auto text-sm"><code>return Inertia::render('Table/User/IndexPage', [
    'users' => User::query()
        ->with(['roles', 'permissions'])
        ->paginate()
]);</code></pre>
            </div>
          </div>
        </section>

        <!-- File Management Section -->
        <section class="mb-12 ml-4" id="file-management">
          <h2 class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            <span class="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg mr-3">
              <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none">
                <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3 3m0 0l-3-3m3 3V8"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            File Uploads
          </h2>
          <div class="space-y-6">
            <!-- Introduction -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Introduction</h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                GuacPanel integrates <a href="https://pqina.nl/filepond/" target="_blank" class="text-emerald-600 hover:text-emerald-500">FilePond</a> to provide a modern, feature-rich file upload system. This integration offers a seamless user experience with drag-and-drop functionality, real-time previews, and robust validation. The system supports image and PDF previews, file type validation, size restrictions, and includes built-in security features like CSRF protection and server-side validation.
              </p>
            </div>

            <!-- Configuration -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Script Setup</h3>
              <pre class="bg-gray-900 text-gray-100 rounded-md p-4 overflow-x-auto mb-6 text-sm"><code>import { defineComponent } from 'vue'
import vueFilePond from 'vue-filepond'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'
import FilePondPluginPdfPreview from 'filepond-plugin-pdf-preview'
import 'filepond-plugin-pdf-preview/dist/filepond-plugin-pdf-preview.min.css'

const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview,
    FilePondPluginFileValidateSize,
    FilePondPluginPdfPreview
)

const serverConfig = {
    url: '/upload',
    process: {
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
        }
    }
}</code></pre>

              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Configuration</h3>
              <pre class="bg-gray-900 text-gray-100 rounded-md p-4 overflow-x-auto mb-6 text-sm"><code>{
    // Required props
    name: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    server: {
        type: Object,
        required: true
    },

    // Optional props
    files: {
        type: Array,
        default: () => []
    },
    allowMultiple: {
        type: Boolean,
        default: false
    },
    maxFiles: {
        type: Number,
        default: 1
    },
    acceptedFileTypes: {
        type: Array,
        default: () => ['image/jpeg', 'image/png', 'application/pdf', 'image/x-icon']
    },
    maxFileSize: {
        type: String,
        default: '5MB'
    },
    required: {
        type: Boolean,
        default: false
    },
    labelIdle: {
        type: String,
        default: 'Drop files here...'
    }
}</code></pre>

              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Template Usage</h3>
              <pre class="bg-gray-900 text-gray-100 rounded-md p-4 overflow-x-auto text-sm"><code>&lt;file-pond 
    name="document"
    label="Upload Document"
    :server="serverConfig"
    
    :files="[]"
    :allow-multiple="false"
    :max-files="1"
    :accepted-file-types="['image/jpeg', 'image/png', 'application/pdf']"
    :max-file-size="'5MB'"
    :required="false"
    :label-idle="'Drop files here...'"
    
    :credits="null"
    :allow-pdf-preview="true"
    :pdf-preview-height="320"
    :pdf-component-extra-params="'toolbar=0'"
    class="bg-white dark:bg-gray-800 rounded-lg"
/&gt;</code></pre>
            </div>
          </div>
        </section>

        <!-- Typesense Search Section -->
        <section class="mb-12 ml-4" id="typesense-search">
          <h2 class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            <span class="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg mr-3">
              <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            Typesense Search
          </h2>
          <div class="space-y-6">
            <!-- Introduction -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Introduction</h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                GuacPanel integrates <a href="https://typesense.org" target="_blank" class="text-emerald-600 hover:text-emerald-500">Typesense</a>, a lightning-fast, open-source search engine that provides typo-tolerant search functionality. Before proceeding, ensure you have set up <a href="https://github.com/typesense/scout-laravel" target="_blank" class="text-emerald-600 hover:text-emerald-500">Typesense with Laravel Scout</a> and your Typesense server is running. With Typesense, you can implement powerful search features with minimal configuration.
              </p>
              <ul class="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>Typo-tolerant search with configurable tolerance levels</li>
                <li>Real-time search with instant results</li>
                <li>Faceted search and filtering capabilities</li>
                <li>Geo-search functionality</li>
                <li>Multi-language support</li>
              </ul>
            </div>

            <!-- Implementation -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Implementation</h3>
              
              <!-- API Key Security -->
              <div class="mb-8">
                <h4 class="font-medium text-gray-900 dark:text-white mb-3">API Key Security</h4>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Protect your Typesense API key by generating scoped search-only API keys. Never expose your admin API key in frontend code. For detailed information about API key management, visit the <a href="https://typesense.org/docs/0.24.0/api/api-keys.html" target="_blank" class="text-emerald-600 hover:text-emerald-500">Typesense API Keys Documentation</a>.
                </p>
                <pre class="bg-gray-900 text-gray-100 rounded-md p-4 overflow-x-auto text-sm"><code>php artisan typesense:generate-search-key</code></pre>
              </div>

              <!-- Frontend Implementation -->
              <div>
                <h4 class="font-medium text-gray-900 dark:text-white mb-3">Frontend Implementation</h4>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Use the generated search-only API key from the script in your frontend code to safely perform searches. Make sure to set <code class="text-emerald-600 dark:text-emerald-400">TYPESENSE_SEARCH_ONLY_KEY</code> in your <code class="text-emerald-600 dark:text-emerald-400">.env</code> file:
                </p>
                <pre class="bg-gray-900 text-gray-100 rounded-md p-4 overflow-x-auto text-sm"><code># .env
TYPESENSE_SEARCH_ONLY_KEY=your_generated_search_key_here
TYPESENSE_HOST=localhost
TYPESENSE_PORT=8108
TYPESENSE_PROTOCOL=http</code></pre>
              </div>
            </div>
          </div>
        </section>

        <!-- Activity Tracking Section -->
        <section class="mb-12 ml-4" id="activity-tracking">
          <h2 class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            <span class="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg mr-3">
              <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            Activity Tracking
          </h2>
          <div class="space-y-6">
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                GuacPanel uses <a href="https://github.com/owen-it/laravel-auditing" class="text-emerald-600 hover:text-emerald-500">Laravel Auditing</a> to track model changes, providing a clean interface to view,
                search, and filter all user activity logs.
              </p>
            </div>
          </div>
        </section>

        <!-- Backup System Section -->
        <section class="mb-12 ml-4" id="backup-system">
          <h2 class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            <span class="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg mr-3">
              <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none">
                <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            Backup System
          </h2>
          <div class="space-y-6">
            <!-- Introduction -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Introduction</h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm mb-6">
                GuacPanel provides a clean interface for <a href="https://github.com/spatie/laravel-backup" class="text-emerald-600 hover:text-emerald-500">Spatie's Laravel Backup</a>. Create, download, and manage
                backups through the UI - no command line needed. Monitor backup health and delete old
                backups with ease.
              </p>
            </div>

            <!-- Backup UI -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Backup UI</h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm mb-6">
                All backup functionality is available through an intuitive interface integrated into the
                admin panel, letting you create, download, and manage backups with ease.
              </p>
              <ul class="space-y-4 text-sm text-gray-600 dark:text-gray-300">
                <li>
                  <strong class="text-gray-900 dark:text-white">Backup Dashboard:</strong> View backup history, disk usage statistics, and system health
                  indicators at a glance.
                </li>
                <li>
                  <strong class="text-gray-900 dark:text-white">One-Click Backups:</strong> Create manual backups instantly with a single click, without needing
                  command line access.
                </li>
                <li>
                  <strong class="text-gray-900 dark:text-white">Backup Management:</strong> Download, delete, or restore backups through a user-friendly
                  interface with clear status indicators.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <!-- Table of Contents -->
      <div class="hidden xl:block absolute top-0 right-0 -mr-80 w-72">
        <TableOfContents :items="tocItems" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.group:hover .group-hover\:translate-y-0\.5 {
  transform: translateY(2px);
}

.group:hover .group-hover\:translate-x-0\.5 {
  transform: translateX(2px);
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>
