const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://09f3cf141606.ngrok.io',
      changeOrigin: true,
    })
  );
};