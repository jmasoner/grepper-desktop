// Form for snippet input and tag selection
// Calls /suggestTag and /inject
import React, { useState } from 'react';
import { injectSnippet, suggestTag } from '../api';

export default function SnippetForm() {
  const [snippet, setSnippet] = useState('');
  const [tag, setTag] = useState('');
  const [suggested, setSuggested] = useState('');

  const handleSuggest = async () => {
    const res = await suggestTag(snippet);
    setSuggested(res.data.tag);
  };

  const handleInject = async () => {
    await injectSnippet(tag || suggested, snippet);
    alert('✅ Injection submitted');
  };

  return (
    <div>
      <h2>Submit Snippet</h2>
      <textarea rows={8} value={snippet} onChange={e => setSnippet(e.target.value)} />
      <input placeholder="Tag (optional)" value={tag} onChange={e => setTag(e.target.value)} />
      <button onClick={handleSuggest}>Suggest Tag</button>
      {suggested && <p>Suggested: {suggested}</p>}
      <button onClick={handleInject}>Inject</button>
    </div>
  );
}