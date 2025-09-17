// Lists failed injections from /fallback
// Retry or discard
import React, { useEffect, useState } from 'react';
import { getChangelog } from '../api';

export default function ChangelogViewer() {
  const [log, setLog] = useState('');

  useEffect(() => {
    getChangelog().then(res => setLog(res.data));
  }, []);

  return (
    <div>
      <h3>📜 Changelog</h3>
      <pre>{log}</pre>
    </div>
  );
}