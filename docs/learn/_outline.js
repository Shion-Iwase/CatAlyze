/* ============================================================
   アウトライン（目次サイドバー）自動生成スクリプト
   h2.section-title と .topic h3 から目次を構築し、
   スクロール追従ハイライトとモバイルトグルを提供する
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('outline-nav');
  if (!nav) return;

  // 対象の見出しを収集（全体像・概要テーブル・詳細・チェックシートの h2 + 各トピック h3）
  const selectors = '.section-title, .topic h3, .check-sheet-title';
  const headings = document.querySelectorAll(selectors);
  if (headings.length === 0) return;

  headings.forEach((h, i) => {
    // id が無ければ付与
    if (!h.id) {
      h.id = 'outline-' + i;
    }

    const link = document.createElement('a');
    link.href = '#' + h.id;

    // テキストを整形（絵文字プレフィクスを除去、長すぎる場合は切り詰め）
    let text = h.textContent.replace(/^[\s📖📋✅🔍📊📝🛡️⚙️✍️🔗📦📈🧹✂️🗄️]+/u, '').trim();
    if (text.length > 40) {
      text = text.substring(0, 38) + '…';
    }
    link.textContent = text;

    // h2 / h3 の区別
    const isH2 = h.classList.contains('section-title') || h.classList.contains('check-sheet-title');
    link.className = isH2 ? 'outline-h2' : 'outline-h3';

    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById(h.id);
      if (!target) return;

      // ヘッダーの高さ分オフセット
      const headerH = document.querySelector('.learn-header')?.offsetHeight || 70;
      const y = target.getBoundingClientRect().top + window.pageYOffset - headerH - 12;
      window.scrollTo({ top: y, behavior: 'smooth' });

      // モバイルでは閉じる
      if (window.innerWidth < 1340) {
        closeOutline();
      }
    });

    nav.appendChild(link);
  });

  // スクロール追従ハイライト
  const allLinks = nav.querySelectorAll('a');
  const idList = [...allLinks].map(a => a.getAttribute('href').slice(1));
  let ticking = false;

  function updateActive() {
    const headerH = document.querySelector('.learn-header')?.offsetHeight || 70;
    let currentId = '';

    for (const id of idList) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= headerH + 20) {
        currentId = id;
      }
    }

    allLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + currentId);
    });
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateActive();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // 初期ハイライト
  updateActive();
});

/* ---------- トグル操作 ---------- */
function toggleOutline() {
  const outline = document.getElementById('outline');
  if (!outline) return;
  outline.classList.toggle('open');
}

function closeOutline() {
  const outline = document.getElementById('outline');
  if (outline) outline.classList.remove('open');
}

// オーバーレイ外クリックで閉じる（モバイル）
document.addEventListener('click', (e) => {
  const outline = document.getElementById('outline');
  const toggle = document.getElementById('outline-toggle');
  if (!outline || !outline.classList.contains('open')) return;
  if (!outline.contains(e.target) && e.target !== toggle) {
    closeOutline();
  }
});
