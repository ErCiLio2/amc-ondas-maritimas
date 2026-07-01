/** Strips markup and decodes the handful of HTML entities used in the
 * translation strings, for contexts that need plain text (title, meta
 * description, JSON-LD) rather than innerHTML. */
export function toPlainText(html) {
  return html
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
