const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ASCII_BANNER = `
 __   __  __   __  _______  __   __  _______    _______  _______  __   __  ___   __    _ 
|  | |  ||  | |  ||       ||  | |  ||       |  |       ||   _   ||  | |  ||   | |  |  | |
|  |_|  ||  | |  ||  _____||  | |  ||    ___|  |  _____||  |_|  ||  |_|  ||   | |   |_| |
|       ||  |_|  || |_____ |  |_|  ||   |___   | |_____ |       ||       ||   | |       |
|_     _||       ||_____  ||       ||    ___|  |_____  ||       ||       ||   | |  _    |
  |   |  |       | _____| ||       ||   |       _____| ||   _   ||   _   ||   | | | |   |
  |___|  |_______||_______||_______||___|      |_______||__| |__||__| |__||___| |_|  |__|
                 Licensed & Protected by Yusuf Sahin - All Rights Reserved
`;

const PORT = process.env.PORT || 3000;

const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.xml': 'application/xml; charset=utf-8',
    '.txt': 'text/plain; charset=utf-8'
};

function verifyLicenseIntegrity() {
    try {
        const fileContent = fs.readFileSync(__filename, 'utf8');
        const startTag = 'const ASCII_BANNER = `';
        const endTag = '`;';
        const startIdx = fileContent.indexOf(startTag);
        if (startIdx === -1) return false;
        const endIdx = fileContent.indexOf(endTag, startIdx);
        if (endIdx === -1) return false;
        const raw = fileContent.substring(startIdx + startTag.length, endIdx);
        const normalized = raw.replace(/\r\n/g, '\n');
        const _k = crypto.createHash('sha256').update(normalized).digest('hex');
        return _k === '7cbe3af99b5cbf0a7a1271b438c07bf5aeeef66301e6f73d393a7e3d302e7d00';
    } catch (e) {
        return false;
    }
}




function createAndListen(port) {
    if (!verifyLicenseIntegrity()) {
        process.exit(1);
    }

    const server = http.createServer((req, res) => {
        try {
            if (!verifyLicenseIntegrity()) {
                res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end('403 Forbidden: Invalid License Signature');
                return;
            }

            res.setHeader('X-Powered-By', 'New Era Dijital Engine');
            res.setHeader('X-Content-Type-Options', 'nosniff');


            let reqUrl = req.url.split('?')[0];
            if (reqUrl === '/') {
                reqUrl = '/index.html';
            } else if (reqUrl === '/dev' || reqUrl === '/source') {
                reqUrl = '/index.src.html';
            }

            const filePath = path.resolve(path.join(PUBLIC_DIR, decodeURIComponent(reqUrl)));

            if (!filePath.toLowerCase().startsWith(path.resolve(PUBLIC_DIR).toLowerCase())) {
                res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end('403 Forbidden - New Era Dijital Security');
                return;
            }

            fs.stat(filePath, (err, stats) => {
                if (err || !stats.isFile()) {
                    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                    res.end(`
                        <!DOCTYPE html>
                        <html lang="tr">
                        <head>
                            <meta charset="UTF-8">
                            <title>404 - Sayfa Bulunamadı | Ekomini Aydın Ticaret</title>
                            <style>
                                body { background: #080d1a; color: #fff; font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; text-align: center; }
                                h1 { color: #38bdf8; font-size: 3rem; margin-bottom: 10px; }
                                a { color: #f59e0b; text-decoration: none; font-weight: bold; }
                            </style>
                        </head>
                        <body>
                            <div>
                                <h1>404</h1>
                                <p>Aradığınız sayfa bulunamadı.</p>
                                <p><a href="/">Ana Sayfaya Dön</a></p>
                                <small style="color: #64748b; display:block; margin-top:20px;">Powered by New Era Dijital</small>
                            </div>
                        </body>
                        </html>
                    `);
                    return;
                }

                const ext = path.extname(filePath).toLowerCase();
                const contentType = MIME_TYPES[ext] || 'application/octet-stream';

                res.writeHead(200, { 'Content-Type': contentType });
                const stream = fs.createReadStream(filePath);
                stream.pipe(res);
            });
        } catch (e) {
            console.error('Ekomini Server Error:', e);
            res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Internal Server Error');
        }
    });

    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.warn(`[Ekomini] Port ${port} kullanimda, alternatif port ${port + 1} deneniyor...`);
            createAndListen(port + 1);
        } else {
            console.error('Ekomini Listener Error:', err);
        }
    });

    server.listen(port, () => {
        console.log(`=========================================`);
        console.log(` Ekomini Aydin Ticaret Web Sunucusu Aktif!`);
        console.log(` Port: ${port}`);
        console.log(` Yerel Erisim: http://localhost:${port}`);
        console.log(`=========================================`);
    });
}

createAndListen(PORT);

