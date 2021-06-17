const withImages = require('next-images');
module.exports = {
    reactStrictMode: true,
    images: {
        domains: [
            'cdn.communitydragon.org',
            'raw.communitydragon.org',
            'celerity.gg',
            'hiray.me',
            'placeholder.com',
            'via.placeholder.com',
        ],
    },
};
module.exports = withImages();
