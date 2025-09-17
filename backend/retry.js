const fs = require('fs');

module.exports = (req, res) => {
  const queue = JSON.parse(fs.readFileSync('fallback/fallback-queue.json'));
  const newQueue = [];

  queue.forEach(entry => {
    const file = `targets/${entry.target}`;
    const marker = `@insert:${entry.tag}`;
    try {
      let content = fs.readFileSync(file, 'utf8');
      if (!content.includes(marker)) throw 'Marker not found';
      content = content.replace(marker, `${marker}\n${entry.snippet}`);
      fs.writeFileSync(file, content);
      fs.appendFileSync('changelog/insertion-log.txt', `${new Date()} | ${entry.tag} → ${entry.target}\n`);
    } catch (e) {
      newQueue.push(entry);
    }
  });

  fs.writeFileSync('fallback/fallback-queue.json', JSON.stringify(newQueue, null, 2));
  res.send('✅ Retry complete');
};