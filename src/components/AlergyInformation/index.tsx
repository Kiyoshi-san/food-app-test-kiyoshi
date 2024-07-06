import React from "react";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import style from "./alergy-information.module.css";

const AlergyInformation = () => {
  const { t } = useTranslation();

  return (
    <section className={style.container}>
      <Link to="#">{t("viewAllergyInfo")}</Link>
    </section>
  );
};

export default AlergyInformation;
