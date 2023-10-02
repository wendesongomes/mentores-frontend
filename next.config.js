/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.freepik.com', 'vagas-dev.s3.amazonaws.com'], 
  },
  modularizeImports:{
    "@lucide-react/icons":{
      transform: "@lucide-react/icon/{{member}}"
    }
  }
}

module.exports = nextConfig
