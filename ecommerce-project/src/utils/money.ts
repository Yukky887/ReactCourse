export function formatMoney(productCents: number) {
    return `$${(productCents / 100).toFixed(2)}`;
}