import axios from 'axios';

const API_BASE = 'http://localhost:4000';

export const injectSnippet = (tag: string, snippet: string) =>
  axios.post(`${API_BASE}/inject`, { tag, snippet });

export const suggestTag = (snippet: string) =>
  axios.post(`${API_BASE}/suggestTag`, { snippet });

export const getChangelog = () =>
  axios.get(`${API_BASE}/changelog`);

export const getFallbackQueue = () =>
  axios.get(`${API_BASE}/fallback`);

export const retryFallback = () =>
  axios.post(`${API_BASE}/retry`);

export const rollbackLast = () =>
  axios.post(`${API_BASE}/rollback`);