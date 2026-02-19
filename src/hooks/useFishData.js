import { useState, useEffect } from 'react';

const FISH_DATA_URL =
  'https://raw.githubusercontent.com/bdofish/bdofish.github.io/master/scripts/fish-data.json';

/**
 * Fetches the live fish catalogue from bdofish's GitHub repository.
 *
 * Returns:
 *   fishData   — array of fish objects { file, name_EN, name_KR, grade, type, method, … }
 *   spriteSort — alphabetically sorted array of fish file-keys, used to compute
 *                sprite-sheet Y offsets (each fish occupies 25 px in the sheet)
 *   loading    — true while the request is in flight
 *   error      — Error object if the fetch failed, otherwise null
 */
export function useFishData() {
  const [fishData, setFishData]     = useState([]);
  const [spriteSort, setSpriteSort] = useState([]);
  const [loading, setLoading]       = useState(true);
  const [error, setError]           = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetch(FISH_DATA_URL)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => {
        if (cancelled) return;

        // Build the sorted key list that maps to sprite-sheet rows
        const sorted = [...data.map(f => f.file)].sort((a, b) =>
          a.toLowerCase().localeCompare(b.toLowerCase()),
        );

        setFishData(data);
        setSpriteSort(sorted);
        setLoading(false);
      })
      .catch(err => {
        if (cancelled) return;
        console.error('Failed to load fish data:', err);
        setError(err);
        setLoading(false);
      });

    return () => { cancelled = true; };
  }, []);

  return { fishData, spriteSort, loading, error };
}
