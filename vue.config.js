module.exports = {
    devServer: {
        //proxy: 'http://localhost:8085',
        proxy: {
            '/dentist': {
                target: 'http://localhost:8085',
                changeOrigin: true
            }

        }
    }
}
