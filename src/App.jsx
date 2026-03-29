import { useMemo, useRef } from "react";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import Toolbar from "./components/Toolbar";
import StatsBar from "./components/StatsBar";
import { DEFAULT_FILE_NAME, DEFAULT_MARKDOWN } from "./constants/defaultMarkdown";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { downloadMarkdown, importMarkdown } from "./utils/file";

const MARKDOWN_KEY = "markdown-live:content";
const FILE_KEY = "markdown-live:file";
const THEME_KEY = "markdown-live:theme";

export default function App() {
  const [content, setContent] = useLocalStorage(MARKDOWN_KEY, DEFAULT_MARKDOWN);
  const [fileName, setFileName] = useLocalStorage(FILE_KEY, DEFAULT_FILE_NAME);
  const [theme, setTheme] = useLocalStorage(THEME_KEY, "dark");
  const fileInputRef = useRef(null);

  const isDark = theme === "dark";
  const rootClassName = useMemo(() => `app ${isDark ? "theme-dark" : "theme-light"}`, [isDark]);

  async function handleImport(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    const imported = await importMarkdown(file);
    setContent(imported);
    const nextName = file.name.replace(/\.md$/i, "");
    if (nextName) setFileName(nextName);
    event.target.value = "";
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(content);
    } catch {
      window.alert("Unable to copy automatically. Please copy manually.");
    }
  }

  return (
    <div className={rootClassName}>
      <Toolbar
        fileName={fileName}
        onFileNameChange={setFileName}
        onDownload={() => downloadMarkdown(content, fileName)}
        onCopy={handleCopy}
        onClear={() => setContent(DEFAULT_MARKDOWN)}
        onImport={() => fileInputRef.current?.click()}
        isDark={isDark}
        onThemeToggle={() => setTheme(isDark ? "light" : "dark")}
      />

      <input
        ref={fileInputRef}
        type="file"
        accept=".md,text/markdown,text/plain"
        onChange={handleImport}
        className="hidden-file-input"
      />

      <StatsBar content={content} />

      <main className="workspace">
        <section className="panel editor-panel" aria-label="Markdown source">
          <h2>Editor</h2>
          <textarea
            id="md-textarea"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder="Write markdown here..."
          />
        </section>

        <section className="panel preview-panel" aria-label="Markdown preview">
          <h2>Preview</h2>
          <article className="markdown-body">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize]}>
              {content}
            </ReactMarkdown>
          </article>
        </section>
      </main>

      <footer className="footer" aria-label="Credits">
        <p>
          🏆 <strong>Yash Soni</strong> • The Markdown Maestro • Building notes at lightspeed.
        </p>
        <div className="credit-links">
          <a href="https://iyashsoni.github.io" target="_blank" rel="noreferrer">
            Official Site
          </a>
          <span className="dot" aria-hidden>
            ✦
          </span>
          <span className="hall-of-fame">Founder, Markdown Live Hall of Fame</span>
        </div>
      </footer>
    </div>
  );
}
