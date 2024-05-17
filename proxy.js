const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3000;

app.use('/api', createProxyMiddleware({
    target: 'https://www.zomato.com',
    changeOrigin: true,
    pathRewrite: {
        '^/api': '/webroutes/reviews/loadMore'
    }
}));

app.listen(port, () => {
    console.log(`Proxy server is running on http://localhost:${port}`);
});
