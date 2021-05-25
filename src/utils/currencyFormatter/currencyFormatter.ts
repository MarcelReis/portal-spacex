function currencyFormatter(value: string | number): string {
  const intl = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USA",
  });

  return intl.format(+value);
}

export default currencyFormatter;
