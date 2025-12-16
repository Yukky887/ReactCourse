export function formatMoney(productCents) {
    return `$${(productCents / 100).toFixed(2)}`;
}