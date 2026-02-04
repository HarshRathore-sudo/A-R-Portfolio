// Theme configuration for the portfolio
export const theme = {
    colors: {
        background: '#181818',
        backgroundLight: '#232323',
        primary: '#1db954',
        primaryHover: '#1ed760',
        text: '#fff',
        textMuted: '#b3b3b3',
        textAccent: '#e0ffe0',
        textAccentLight: '#b3ffc7',
        border: 'rgba(255, 255, 255, 0.1)',
        borderLight: 'rgba(255, 255, 255, 0.08)',
        overlay: 'rgba(0, 0, 0, 0.85)',
        headerGradientStart: '#4e2c2c',
    },
    breakpoints: {
        mobile: '480px',
        tablet: '600px',
        tabletLarge: '768px',
        desktop: '900px',
    },
    fonts: {
        primary: "'Inter', 'Segoe UI', Arial, sans-serif",
    },
    shadows: {
        card: '0 4px 24px rgba(0, 0, 0, 0.18)',
        cardHover: '0 8px 32px rgba(0, 0, 0, 0.24)',
        glow: '0 0 14px rgba(30, 185, 84, 0.27)',
    },
    transitions: {
        fast: '0.2s ease',
        medium: '0.3s ease',
        slow: '0.4s ease',
    },
};

export default theme;
