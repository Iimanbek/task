// const express = require('express');
// const {createSSRApp} = require('vue'); 
// const manifest = require('../dist/ssr-manifest.json')
// const server = express();

// const appPath = manifest['app.js']

// server.get('*', (req, res) => {
//     const html = `<!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8">
//         <link rel="icon" href="/favicon.ico">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Vite App</title>
//       </head>
//       <body>
//         <div id="app"></div>
//         <script type="module" src="/src/main.js"></script>
//       </body>
//     </html>
//     `
//     res.end(html)
//     server.listen(5173)
// })