/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "image.tmdb.org", 
                port: "",
            },
            {
                protocol: 'https',
                hostname: "eiga.k-img.com", 
                port: "",
            }, {
                protocol: 'https',
                hostname: "www.themoviedb.org", 
                port: "",
            },
            {
                protocol: 'https',
                hostname: "res.cloudinary.com", 
                port: "",
            }
        ]
    }
}

module.exports = nextConfig
