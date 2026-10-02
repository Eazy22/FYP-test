import { useEffect, useState } from 'react';
import { getHealth } from '../api/health.js';

export default function Home() {
  const [status, setStatus] = useState('checking…');

  useEffect(() => {
    getHealth()
      .then((data) => setStatus(data.status))
      .catch(() => setStatus('offline'));
  }, []);

  return (
    <section>
      <h1>FYP dApp</h1>
      <p>API status: {status}</p>
    </section>
  );
}
