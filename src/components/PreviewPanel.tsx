// Shows full file with injected snippet
// Highlights changes inline
import React from 'react';

export default function PreviewPanel({ preview }: { preview: string }) {
  return (
    <div>
      <h3>📄 Preview</h3>
      <pre>{preview}</pre>
    </div>
  );
}