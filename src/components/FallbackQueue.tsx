import React, { useEffect, useState } from 'react';
import { getFallbackQueue, retryFallback } from '../api';

export default function FallbackQueue() {
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    getFallbackQueue().then(res => setQueue(res.data));
  }, []);

  return (
    <div>
      <h3>🔁 Fallback Queue</h3>
      <button onClick={retryFallback}>Retry All</button>
      <ul>
        {queue.map((entry, i) => (
          <li key={i}>{entry.tag} → {entry.target}</li>
        ))}
      </ul>
    </div>
  );
}