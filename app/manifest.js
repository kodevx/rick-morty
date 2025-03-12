export default function manifest() {
    return {
      name: 'Ricky and Morty',
      short_name: 'Ricky Morty App',
      description: 'Rick Morty Cartoon',
      start_url: '/',
      display: 'standalone',
      background_color: '#69ad53',
      theme_color: '#69ad53',
      icons: [
        {
            "src": "/icon/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/icon/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
      ]
    }
  }
