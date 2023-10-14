/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL : "https://newsapi.org/v2/everything",
        API_KEY :'eff0da1b31144e8da7ba3ff9df6876e2',
        LOCAL_API_URL: "http://localhost:8000/articles",
    },
    reactStrictMode: false,
}

module.exports = nextConfig
