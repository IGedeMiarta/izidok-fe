module.exports = {
    pwa: {
        name: 'izidok',
        themeColor: '#eaeaea',
        msTileColor: '#ffffff',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
    
        // configure the workbox plugin
        workboxPluginMode: 'GenerateSW',
        manifestOptions: {
            description: 'Aplikasi Rekam Medis Elektronik Pilihan Dokter',
            background_color: '#ffffff',
            display: 'fullscreen',
            start_url: '/index.html'
        }
    }
}