/** @type {import('next').NextConfig} */

module.exports = {
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.pdf$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/_next/static/files',
                        outputPath: 'static/files/',
                        name: '[name].[ext]',
                    },
                },
            ],
        });
        return config;
    },
};
