const PROXY_HOST = 'https://zenquotes.io';

const PROXY_CONFIG = [
    {
        context: ['/api/*'],
        target: PROXY_HOST,
        secure: false,
        "changeOrigin": true
    },
];

module.exports = PROXY_CONFIG;
