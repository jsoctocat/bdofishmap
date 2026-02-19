/**
 * NoticePanel — "Notice" sidebar tab.
 *
 * Reads notices at runtime from /notices.txt (plain text, served from public/).
 *
 * File format (notices.txt):
 *   - Blocks are separated by a line containing only "==="
 *   - Each block contains key=value lines
 *   - Lines starting with # are comments and are ignored
 *   - Supported keys: date, tag, title_en, title_kr, body_en, body_kr
 *   - tag values: update | data | map  (anything else falls back to "update" style)
 *
 * Props:
 *   lang — 'EN' | 'KR'
 */

import { useState, useEffect } from 'react';

const TAG_STYLE = {
  update: { bg: '#78350f', text: '#fcd34d', label: 'UPDATE' },
  data:   { bg: '#1e3a5f', text: '#93c5fd', label: 'DATA'   },
  map:    { bg: '#14532d', text: '#86efac', label: 'MAP'     },
};

// ── Parser ──────────────────────────────────────────────────────────────────
function parseNotices(text) {
  return text
    .split(/^===\s*$/m)           // split on separator lines
    .map(block => {
      const notice = {};
      block
        .split('\n')
        .filter(line => line.trim() && !line.trimStart().startsWith('#'))
        .forEach(line => {
          const eq = line.indexOf('=');
          if (eq === -1) return;
          const key = line.slice(0, eq).trim().toLowerCase();
          const val = line.slice(eq + 1).trim();
          notice[key] = val;
        });
      return notice;
    })
    .filter(n => n.title_en || n.title_kr); // skip empty/comment-only blocks
}

// ── Component ───────────────────────────────────────────────────────────────
export default function NoticePanel({ lang }) {
  const [notices, setNotices] = useState([]);
  const [status,  setStatus]  = useState('loading'); // 'loading' | 'ok' | 'error'

  useEffect(() => {
    setStatus('loading');
    fetch('/notices.txt')
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.text();
      })
      .then(text => {
        setNotices(parseNotices(text));
        setStatus('ok');
      })
      .catch(() => setStatus('error'));
  }, []);

  // ── Loading state ──────────────────────────────────────────────────────────
  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center h-full text-gray-500 text-xs">
        <span className="animate-pulse">
          {lang === 'KR' ? '불러오는 중...' : 'Loading notices...'}
        </span>
      </div>
    );
  }

  // ── Error state ────────────────────────────────────────────────────────────
  if (status === 'error') {
    return (
      <div className="p-3 text-center text-gray-500 text-xs space-y-1">
        <p className="text-red-400">⚠</p>
        <p>{lang === 'KR' ? 'notices.txt를 불러올 수 없습니다.' : 'Could not load notices.txt'}</p>
        <p className="text-gray-600">
          {lang === 'KR'
            ? 'public/notices.txt 파일을 확인하세요.'
            : 'Check that public/notices.txt exists.'}
        </p>
      </div>
    );
  }

  // ── Empty state ────────────────────────────────────────────────────────────
  if (notices.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500 text-xs">
        {lang === 'KR' ? '공지사항 없음' : 'No notices found'}
      </div>
    );
  }

  // ── Notices list ───────────────────────────────────────────────────────────
  return (
    <div className="sidebar-scroll overflow-y-auto h-full">
      <div className="p-2 space-y-2">
        {notices.map((n, i) => {
          const tag   = TAG_STYLE[n.tag] ?? TAG_STYLE.update;
          const title = lang === 'KR' ? (n.title_kr ?? n.title_en) : (n.title_en ?? n.title_kr);
          const body  = lang === 'KR' ? (n.body_kr  ?? n.body_en)  : (n.body_en  ?? n.body_kr);

          return (
            <article
              key={i}
              className="rounded-lg border border-gray-700/60 bg-gray-900/80 p-2.5
                         hover:border-amber-500/40 transition-colors"
            >
              {/* Header: tag badge + date */}
              <div className="flex items-center gap-1.5 mb-1.5">
                <span
                  className="text-[9px] font-bold px-1.5 py-0.5 rounded"
                  style={{ background: tag.bg, color: tag.text }}
                >
                  {tag.label}
                </span>
                {n.date && (
                  <span className="text-[10px] text-gray-500 ml-auto">{n.date}</span>
                )}
              </div>

              {/* Title */}
              {title && (
                <p className="text-amber-300 font-semibold leading-tight mb-1"
                   style={{ fontSize: 11 }}>
                  {title}
                </p>
              )}

              {/* Body */}
              {body && (
                <p className="text-gray-400 leading-relaxed" style={{ fontSize: 10 }}>
                  {body}
                </p>
              )}
            </article>
          );
        })}

        {/* Footer */}
        <p className="text-center text-gray-600 py-2" style={{ fontSize: 10 }}>
          {lang === 'KR'
            ? '최신 정보는 공식 BDO 패치노트를 확인하세요.'
            : 'For the latest info, check the official BDO patch notes.'}
        </p>
      </div>
    </div>
  );
}
