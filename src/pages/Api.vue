<template>
  <div>
    <h1>API Reference</h1>
    <p class="lead mb-8">
      Complete reference documentation for GuacPanel's REST API.
    </p>

    <section class="mb-12">
      <h2>Authentication</h2>
      <p>All API endpoints require authentication using JWT tokens.</p>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mt-4">
curl -X POST https://api.guacpanel.com/auth/token \
  -H "Content-Type: application/json" \
  -d '{"username": "your-username", "password": "your-password"}'</pre>
    </section>

    <section class="mb-12">
      <h2>Endpoints</h2>
      <div class="space-y-6 mt-4">
        <div>
          <h3>GET /api/connections</h3>
          <p>List all available connections.</p>
        </div>
        
        <div>
          <h3>POST /api/connections</h3>
          <p>Create a new connection.</p>
        </div>
        
        <div>
          <h3>GET /api/connections/{id}</h3>
          <p>Get details of a specific connection.</p>
        </div>
      </div>
    </section>
  </div>
</template> 