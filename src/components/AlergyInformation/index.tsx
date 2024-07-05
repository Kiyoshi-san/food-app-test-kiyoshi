import React from "react";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const AlergyInformation = () => {
  const { t } = useTranslation();

  return <Link to="#">{t("viewAllergyInfo")}</Link>;
};

export default AlergyInformation;
