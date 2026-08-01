const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');

c = c.replace(/â€”/g, '&mdash;');
c = c.replace(/â€“/g, '&ndash;');
c = c.replace(/â†’/g, '&rarr;');
c = c.replace(/â€²/g, '&prime;');
c = c.replace(/Â·/g, '&middot;');

fs.writeFileSync('index.html', c, 'utf8');
console.log('Fixed encoding successfully!');
