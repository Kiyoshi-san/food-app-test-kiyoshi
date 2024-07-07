import { useTranslation } from "react-i18next";
import { currencyConversor } from "utils/currency";

export const useFormatPrice = (price: number = 0) => {
  const { t } = useTranslation();
  const locale = t("locale") || "en-US"; // fallback to "en-US"
  const currency = t("currency") || "USD"; // fallback to "USD"

  const convertedPrice = currencyConversor(price || 0, locale) || 0;

  return convertedPrice.toLocaleString(t("locale"), {
    style: "currency",
    currency: currency,
  });
};
