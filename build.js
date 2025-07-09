require('dotenv').config()
const { execSync } = require('child_process');

console.log(process.env)
console.log(process.env.REBUILD_SPEC)

if (process.env.REBUILD_SPEC === 'true') {
  console.log('Running openapi-preprocessor...');
  execSync('node src/scripts/openapi-preprocessor.js', { stdio: 'inherit' });
}

console.log('Running next build...');
execSync('next build', { stdio: 'inherit' });