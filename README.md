<div align="center">
  <img src="https://github.com/user-attachments/assets/d1256dda-6820-4e21-bcee-36c82ffab1fc" alt="GuacPanel Logo" width="200">
</div>

# GuacPanel Documentation

[![Laravel](https://img.shields.io/badge/Laravel-v12.x-FF2D20?style=flat&logo=laravel)](https://laravel.com)
[![Vue.js](https://img.shields.io/badge/Vue.js-v3.x-4FC08D?style=flat&logo=vue.js)](https://vuejs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4.x-06B6D4?style=flat&logo=tailwind-css)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/license/MIT)

The official documentation website for [GuacPanel](https://github.com/otatechie/guacpanel-tailwind) - a Laravel Vue admin starter kit. Built with Laravel, Vue 3, Inertia.js, and Tailwind CSS v4, featuring a retro-inspired design aesthetic.

## 🌐 Live Site

**[Visit GuacPanel Documentation](https://guacpanel.com)**

## About

This is the documentation website that showcases GuacPanel's features, provides installation guides, component documentation, and interactive examples. The site itself demonstrates the design philosophy and capabilities of the GuacPanel admin starter kit.

## Features

- 📚 **Comprehensive Documentation**
  - Installation guides
  - Feature documentation
  - Component API reference
  - Code examples with syntax highlighting

- 🎨 **Retro Design System**
  - Custom retro-inspired UI components
  - Dark/Light mode support
  - Monospace typography
  - Brutalist design elements with bold borders and shadows

- 🔍 **Advanced Search**
  - Lightning-fast search powered by [Typesense](https://typesense.org/)
  - Typo-tolerant search results
  - Instant search with [Vue InstantSearch](https://github.com/algolia/vue-instantsearch)

- 💻 **Code Highlighting**
  - Syntax highlighting with [Prism.js](https://prismjs.com/)
  - Copy-to-clipboard functionality
  - Multiple language support

- 📱 **Responsive Design**
  - Mobile-first approach
  - Adaptive navigation
  - Touch-friendly interactions

## Tech Stack

- **Backend**: Laravel 12
- **Frontend**: Vue 3 with Composition API
- **Routing**: Inertia.js 2.0
- **Styling**: Tailwind CSS v4
- **Search**: Typesense + Vue InstantSearch
- **Code Highlighting**: Prism.js via vue-prism-component
- **Charts**: ApexCharts (for demo visualizations)
- **Icons**: Heroicons

## Quick Start

### Prerequisites

- PHP >= 8.2
- Node.js & NPM (Latest LTS)
- Composer
- Typesense server (optional, for search functionality)

### Installation

1. Clone the repository
```bash
git clone https://github.com/otatechie/guacpanel-docs.git
cd guacpanel-docs
```

2. Install dependencies
```bash
composer install
npm install
```

3. Set up environment
```bash
cp .env.example .env
php artisan key:generate
```

4. Configure your database in `.env`
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=guacpanel_docs
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

5. (Optional) Configure Typesense for search in `.env`
```env
TYPESENSE_API_KEY=your_api_key
TYPESENSE_HOST=localhost
TYPESENSE_PORT=8108
TYPESENSE_PROTOCOL=http
```

6. Run migrations
```bash
php artisan migrate
```

7. Start development servers
```bash
npm run dev
php artisan serve
```

**🎉 That's it!** Visit `http://localhost:8000` to see the documentation site.

## Project Structure

```
guacpanel-docs/
├── app/
│   └── Http/Controllers/     # Documentation page controllers
├── resources/
│   ├── js/
│   │   ├── Components/       # Reusable Vue components
│   │   ├── Layouts/          # Layout components
│   │   └── Pages/            # Page components
│   │       ├── Home.vue      # Landing page
│   │       └── Documentation/# Documentation pages
│   └── css/
│       └── app.css           # Tailwind CSS configuration
├── routes/
│   ├── web.php               # Main routes
│   └── documentation.php     # Documentation routes
└── public/
    └── images/               # Static assets
```

## Development

### Running the Dev Server

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

### Code Formatting

```bash
npm run format
```

### Linting

```bash
npm run lint
```

## Related Projects

- **[GuacPanel](https://github.com/otatechie/guacpanel-tailwind)** - The Laravel Vue admin starter kit
- **[GuacPanel Demo](https://guacpanel.com/login)** - Live demo of the admin panel

## Contributing

We welcome contributions! If you find any issues with the documentation or want to improve it:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-docs`)
3. Commit your changes (`git commit -m 'Add some amazing documentation'`)
4. Push to the branch (`git push origin feature/amazing-docs`)
5. Open a Pull Request

## License

[MIT License](https://opensource.org/license/MIT)

---

<div align="center">
  <p>Made with ♡ in Accra</p>
  <p>
    <a href="https://github.com/otatechie/guacpanel-tailwind">GuacPanel</a> •
    <a href="https://guacpanel.com">Documentation</a> •
    <a href="https://github.com/otatechie">GitHub</a>
  </p>
</div>
