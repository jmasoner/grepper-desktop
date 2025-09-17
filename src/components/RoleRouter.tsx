// Detects user role (coder vs. contributor)
// Adjusts UI complexity
import React from 'react';

export default function RoleRouter({ role }: { role: 'coder' | 'contributor' }) {
  return (
    <div>
      {role === 'coder' ? <p>Full injection control enabled</p> : <p>Guided mode active</p>}
    </div>
  );
}