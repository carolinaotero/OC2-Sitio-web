import { execSync } from 'child_process';
try {
  const output = execSync('npm run build', { encoding: 'utf-8', cwd: '..' });
  console.log('BUILD SUCCESS:', output);
} catch (err) {
  console.error('BUILD FAILED:', err.stdout);
  console.error(err.stderr);
}
