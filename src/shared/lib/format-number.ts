export default function formatNumber(
  num: number,
  opt = {
    locale: "en-US",
    options: {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    },
  },
): string {
  return new Intl.NumberFormat(opt.locale, opt.options).format(num);
}
