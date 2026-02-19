import { useState, useEffect } from 'react';

const FISH_JSON_URL =
  'https://raw.githubusercontent.com/bdofish/bdofish.github.io/master/scripts/fish-data.json';

/**
 * Fetches the live fish catalogue from bdofish's GitHub repository.
 *
 * Returns:
 *   fishData   — array of fish objects { file, name_EN, name_KR, grade, type, method }
 *   spriteSort — alphabetically sorted file-key array used to compute
 *                sprite-sheet Y offsets (each fish = 25 px tall in the sheet)
 *   loading    — true while in-flight
 *   error      — Error or null
 */
export function useFishData() {
  const [fishData,   setFishData]   = useState([]);
  const [spriteSort, setSpriteSort] = useState([]);
  const [loading,    setLoading]    = useState(true);
  const [error,      setError]      = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetch(FISH_JSON_URL)
      .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })
      .then(data => {
        if (cancelled) return;
        const sorted = [...data.map(f => f.file)].sort((a, b) =>
          a.toLowerCase().localeCompare(b.toLowerCase()),
        );
        setFishData(data);
        setSpriteSort(sorted);
        setLoading(false);
      })
      .catch(err => {
        if (cancelled) return;
        setError(err);
        setLoading(false);
      });

    return () => { cancelled = true; };
  }, []);

  return { fishData, spriteSort, loading, error };
}
