export default function Toolbar({
  fileName,
  onFileNameChange,
  onDownload,
  onCopy,
  onClear,
  onImport,
  isDark,
  onThemeToggle,
}) {
  return (
    <header className="toolbar">
      <div className="brand">
        <span className="brand-badge" aria-hidden>
          ⚡
        </span>
        <div>
          <h1>Markdown Live</h1>
          <p>Lightning-fast markdown workspace</p>
        </div>
      </div>

      <div className="toolbar-controls">
        <label htmlFor="md-filename" className="field field-inline">
          <span className="field-label">File</span>
          <input
            id="md-filename"
            value={fileName}
            onChange={(event) => onFileNameChange(event.target.value)}
            placeholder="README"
          />
        </label>

        <div className="actions actions-primary">
          <button type="button" onClick={onImport}>
            Import
          </button>
          <button type="button" onClick={onDownload}>
            Export
          </button>
          <button type="button" onClick={onThemeToggle}>
            {isDark ? "☀ Light" : "🌙 Dark"}
          </button>
        </div>

        <details className="more-menu">
          <summary>More</summary>
          <div className="more-menu-panel" role="menu" aria-label="More actions">
            <button type="button" onClick={onCopy}>
              Copy markdown
            </button>
            <button type="button" className="danger" onClick={onClear}>
              Reset content
            </button>
          </div>
        </details>
      </div>
    </header>
  );
}
