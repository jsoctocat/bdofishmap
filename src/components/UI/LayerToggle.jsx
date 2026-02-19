/**
 * Coloured checkbox toggle used in the Layer panel.
 * The native <input> is visually hidden; a styled <span> acts as the checkbox.
 */
export default function LayerToggle({ label, checked, onChange, color = '#f97316' }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer group py-0.5 select-none">
      <span
        className="relative flex-shrink-0 w-4 h-4 rounded border border-gray-600
                   group-hover:border-amber-400 transition-colors"
        style={{ backgroundColor: checked ? color : 'transparent' }}
      >
        {checked && (
          <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        )}
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={onChange}
        />
      </span>

      <span className="text-xs text-gray-300 group-hover:text-white transition-colors truncate">
        {label}
      </span>
    </label>
  );
}
