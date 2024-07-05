import React from "react";

import { useTranslation } from "react-i18next";

const AlergyInformation = () => {
  const { t } = useTranslation();

  return <div>{t("viewAllergyInfo")}</div>;
};

export default AlergyInformation;
