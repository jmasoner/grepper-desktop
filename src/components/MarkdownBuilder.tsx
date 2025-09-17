import React from 'react';

export default function MarkdownBuilder({ snippet }: { snippet: string }) {
  const markdown = `### Injected Snippet\n\n\`\`\`\n${snippet}\n\`\`\``;
  return (
    <div>
      <h3>🧾 Markdown Export</h3>
      <pre>{markdown}</pre>
    </div>
  );
}