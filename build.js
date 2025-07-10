const { execSync } = require('child_process');

// Only needed on Netlify
if (process.env.INCOMING_HOOK_BODY?.includes('REBUILD_SPEC=true')) {
  process.env.REBUILD_SPEC = 'true';
}
console.log('the incoming hook body is... :' process.env.INCOMING_HOOK_BODY)
if (process.env.REBUILD_SPEC === 'true') {
  console.log('[build] REBUILD_SPEC=true → Running preprocessor');
  execSync('node src/scripts/openapi-preprocessor.js', { stdio: 'inherit' });
} else {
  console.log('[build] REBUILD_SPEC not set → Skipping preprocessor');
}

console.log('[build] Running next build...');
execSync('next build', { stdio: 'inherit' });
