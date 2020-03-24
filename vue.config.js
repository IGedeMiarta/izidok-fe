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
            background_color: '#ffffff'
        }
    }
}