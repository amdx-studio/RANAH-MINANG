export function formatCurrency(value: number): string {
  return 'Rp' + value.toLocaleString('id-ID')
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export function generateBookingId(): string {
  const rand = Math.random().toString(36).substring(2, 7).toUpperCase()
  return `RM-${new Date().getFullYear()}-${rand}`
}
