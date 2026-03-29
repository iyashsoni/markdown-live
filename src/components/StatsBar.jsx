function readingMinutes(wordCount) {
  return Math.max(1, Math.ceil(wordCount / 200));
}

export default function StatsBar({ content }) {
  const words = content.trim() ? content.trim().split(/\s+/).length : 0;
  const chars = content.length;

  return (
    <section className="stats" aria-label="Document statistics">
      <span>{words} words</span>
      <span>{chars} characters</span>
      <span>{readingMinutes(words)} min read</span>
      <span className="notice">Everything stored locally - no server involved.</span>
    </section>
  );
}
