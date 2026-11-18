export function formatCurrency(amount: number | null | undefined): string {
    if (amount == null) return '';
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}