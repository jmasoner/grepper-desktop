const fs = require('fs');
const config = require('./config.json');

module.exports = (req, res) => {
  const { tag, snippet } = req.body;
  const file = `targets/${config[tag]}`;
  const marker = `@insert:${tag}`;

  try {
    let content = fs.readFileSync(file, 'utf8');
    if (!content.includes(marker)) throw 'Marker not found';
    content = content.replace(marker, `${marker}\n${snippet}`);
    fs.writeFileSync(file, content);
    fs.appendFileSync('changelog/insertion-log.txt', `${new Date()} | ${tag} → ${config[tag]}\n`);
    res.send('✅ Injected');
  } catch (e) {
    const fallback = JSON.parse(fs.readFileSync('fallback/fallback-queue.json'));
    fallback.push({ tag, snippet, target: config[tag], error: e });
    fs.writeFileSync('fallback/fallback-queue.json', JSON.stringify(fallback, null, 2));
    res.status(500).send('❌ Injection failed');
  }
};