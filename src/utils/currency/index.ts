export const currencyConversor = (val: number, locale: string) => {
  if (locale === "en-US") {
    return val;
  }

  return val * 5;
};
