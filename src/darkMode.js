const THEME_STORAGE_KEY = 'theme'

const themes = {
    light: {
        name: 'light',
        nextTheme: 'dark',
        nextThemeIcon: 'moon'
    },
    dark: {
        name: 'dark',
        nextTheme: 'system',
        nextThemeIcon: 'system'
    },
    system: {
        name: 'system',
        nextTheme: 'light',
        nextThemeIcon: 'sun'
    }
}

function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getCurrentTheme() {
    return localStorage.getItem(THEME_STORAGE_KEY) || 'system'
}

export function getCurrentThemeState() {
    const currentTheme = getCurrentTheme()
    return themes[currentTheme]
}

export function cycleTheme() {
    const currentTheme = getCurrentTheme()
    const nextTheme = themes[currentTheme].nextTheme

    setTheme(nextTheme)
    return themes[nextTheme]
}

export function setTheme(theme) {
    const root = document.documentElement
    const effectiveTheme = theme === 'system' ? getSystemTheme() : theme

    localStorage.setItem(THEME_STORAGE_KEY, theme)

    if (effectiveTheme === 'dark') {
        root.classList.add('dark')
    } else {
        root.classList.remove('dark')
    }

    return themes[theme]
}

// Initialize theme
if (typeof window !== 'undefined') {
    setTheme(getCurrentTheme())

    // Watch for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (getCurrentTheme() === 'system') {
            setTheme('system')
        }
    })
} 