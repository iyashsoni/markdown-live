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
          <p>Beautiful, elegant and blazing fast</p>
        </div>
      </div>

      <div className="toolbar-controls">
        <label htmlFor="md-filename" className="field">
          File
          <input
            id="md-filename"
            value={fileName}
            onChange={(event) => onFileNameChange(event.target.value)}
            placeholder="README"
          />
        </label>

        <div className="actions">
          <button type="button" onClick={onImport}>
            Import
          </button>
          <button type="button" onClick={onCopy}>
            Copy
          </button>
          <button type="button" onClick={onDownload}>
            Export .md
          </button>
          <button type="button" className="danger" onClick={onClear}>
            Reset
          </button>
          <button type="button" onClick={onThemeToggle}>
            {isDark ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </header>
  );
}
