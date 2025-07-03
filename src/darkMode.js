const THEME_STORAGE_KEY = 'theme'

let currentPreference = localStorage.getItem(THEME_STORAGE_KEY) || 'system'

function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function initializeTheme() {
    const effectiveTheme = currentPreference === 'system' ? getSystemTheme() : currentPreference
    if (effectiveTheme === 'dark') {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}

function setupThemeListener() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches }) => {
        if (currentPreference === 'system') {
            if (matches) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        }
    })
}

function getNextTheme(current) {
    switch (current) {
        case 'light':
            return 'dark'
        case 'dark':
            return 'system'
        case 'system':
            return 'light'
        default:
            return 'system'
    }
}

function getNextThemeText(current) {
    switch (current) {
        case 'light':
            return 'Dark mode'
        case 'dark':
            return 'System mode'
        case 'system':
            return 'Light mode'
        default:
            return 'System mode'
    }
}

function getNextThemeIcon(current) {
    switch (current) {
        case 'light':
            return 'moon'
        case 'dark':
            return 'system'
        case 'system':
            return 'sun'
        default:
            return 'system'
    }
}

function cycleTheme() {
    const nextTheme = getNextTheme(currentPreference)
    currentPreference = nextTheme

    switch (nextTheme) {
        case 'light':
            document.documentElement.classList.remove('dark')
            localStorage.setItem(THEME_STORAGE_KEY, 'light')
            break
        case 'dark':
            document.documentElement.classList.add('dark')
            localStorage.setItem(THEME_STORAGE_KEY, 'dark')
            break
        case 'system':
            localStorage.removeItem(THEME_STORAGE_KEY)
            initializeTheme()
            break
    }

    return {
        currentPreference: nextTheme,
        nextThemeText: getNextThemeText(nextTheme),
        nextThemeIcon: getNextThemeIcon(nextTheme)
    }
}

function getCurrentThemeState() {
    return {
        currentPreference,
        nextThemeText: getNextThemeText(currentPreference),
        nextThemeIcon: getNextThemeIcon(currentPreference)
    }
}

function resetToSystemTheme() {
    currentPreference = 'system'
    localStorage.removeItem(THEME_STORAGE_KEY)
    initializeTheme()
    return getCurrentThemeState()
}

// Initialize theme system
if (typeof window !== 'undefined') {
    initializeTheme()
    setupThemeListener()
}

export {
    cycleTheme,
    getCurrentThemeState,
    resetToSystemTheme
}