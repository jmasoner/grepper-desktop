const fs = require('fs');

module.exports = (req, res) => {
  const log = fs.readFileSync('changelog/insertion-log.txt', 'utf8').trim().split('\n');
  const last = log.pop();
  const [_, tag, target] = last.match(/(.+)\| (.+) → (.+)/);
  const file = `targets/${target}`;
  const marker = `@insert:${tag}`;

  let content = fs.readFileSync(file, 'utf8');
  const regex =