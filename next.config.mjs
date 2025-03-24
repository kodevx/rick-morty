/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: function (config, options) {
        config.module.rules.push({
          test: /\.(graphql|gql)/,
          exclude: /node_modules/,
          loader: "graphql-tag/loader"
        });
    
        return config;
      },
      images: {
        domains: ['rickandmortyapi.com'],
      },
      output: 'export'
};

export default nextConfig;
