import React from 'react';
import SnippetForm from './components/SnippetForm';
import FallbackQueue from './components/FallbackQueue';
import ChangelogViewer from './components/ChangelogViewer';

function App() {
  return (
    <div>
      <h1>🧠 Grepper Guide Mode</h1>
      <SnippetForm />
      <FallbackQueue />
      <ChangelogViewer />
    </div>
  );
}

export default App;