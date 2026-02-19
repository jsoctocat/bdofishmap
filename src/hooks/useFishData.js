import { useState, useEffect } from 'react';

const FISH_JSON_URL =
  'https://raw.githubusercontent.com/bdofish/bdofish.github.io/master/scripts/fish-data.json';

/**
 * Fetches the live fish catalogue from bdofish's GitHub repository.
 *
 * Fish object shape:
 *   file, name_EN, name_KR, type_EN, type_KR, method_EN, method_KR,
 *   grade, price, class, tooltip_EN, tooltip_KR
 *
 * Returns: { fishData, loading, error }
 */
export function useFishData() {
  const [fishData, setFishData] = useState([]);
  const [loading,  setLoading]  = useState(true);
  const [error,    setError]    = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch(FISH_JSON_URL)
      .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })
      .then(data => {
        if (!cancelled) { setFishData(data); setLoading(false); }
      })
      .catch(err => {
        if (!cancelled) { setError(err); setLoading(false); }
      });
    return () => { cancelled = true; };
  }, []);

  return { fishData, loading, error };
}
