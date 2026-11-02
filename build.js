const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('[Build] Starting Ekomini Aydın Ticaret SEO & Production Build...');

// 1. Run SEO page generator
try {
    execSync('node tools/generate-pages.js', { stdio: 'inherit', cwd: __dirname });
    execSync('node tools/update-index.js', { stdio: 'inherit', cwd: __dirname });
} catch (e) {
    console.error('[Build Error] Failed during page generation:', e.message);
}

// 2. Prepare both dist/ and public/ folders for 100% Vercel compatibility
const targetDirs = [
    path.join(__dirname, 'dist'),
    path.join(__dirname, 'public')
];

const filesToCopy = [
    'index.html',
    'yakuplu-tekel.html',
    'yakuplu-acik-tekel.html',
    'yakuplu-tekel-siparis.html',
    'yakuplu-nobetci-tekel.html',
    'beylikduzu-acik-tekel.html',
    'beylikduzu-gece-acik-market.html',
    'style.css',
    'app.js',
    'favicon.png',
    'robots.txt',
    'sitemap.xml',
    'CNAME'
];

for (const deployDir of targetDirs) {
    fs.mkdirSync(deployDir, { recursive: true });

    for (const file of filesToCopy) {
        const src = path.join(__dirname, file);
        if (fs.existsSync(src)) {
            fs.copyFileSync(src, path.join(deployDir, file));
        }
    }

    // Copy images
    const imgSource = path.join(__dirname, 'images');
    const imgDest = path.join(deployDir, 'images');
    if (fs.existsSync(imgSource)) {
        fs.cpSync(imgSource, imgDest, { recursive: true });
    }
}

console.log('[Build] Clean static build completed successfully in dist/ and public/');
console.log('[Build] Ready for Vercel, Cloudflare Pages, or static hosting.');
