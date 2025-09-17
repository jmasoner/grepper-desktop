// Side-by-side comparison using diff2html
import React from 'react';
import { Diff2Html } from 'diff2html';

export default function DiffViewer({ diff }: { diff: string }) {
  const html = Diff2Html.getPrettyHtml(diff, { inputFormat: 'diff', showFiles: true });
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}