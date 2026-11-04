export function csvCell(value: unknown): string {
  const text = String(value ?? '');
  // Prevent spreadsheet formula execution, including leading whitespace controls.
  const safe = /^[\s]*[=+@-]/.test(text) || /^[\t\r\n]/.test(text) ? `'${text}` : text;
  return `"${safe.replaceAll('"', '""')}"`;
}
export function makeCsv(columns: string[], rows: Record<string, unknown>[]): string {
  return '\uFEFF' + [columns.map(csvCell).join(','), ...rows.map(row => columns.map(column => csvCell(row[column])).join(','))].join('\r\n');
}
