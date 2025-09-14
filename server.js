const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({
  target: 'http://206.189.146.215:1816/',
  changeOrigin: true,
  secure: false
}));

const PORT = process.env.PORT || 7860;
app.listen(PORT, () => {
  console.log(`Proxy running on port ${PORT}`);
});
