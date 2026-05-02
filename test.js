const fs = require('fs'); const s = fs.readFileSync('public/2025/09/01/双连通分量/index.html', 'utf8'); const idx = s.indexOf('// 建图'); console.log(s.substring(Math.max(0, idx - 200), idx + 200));
