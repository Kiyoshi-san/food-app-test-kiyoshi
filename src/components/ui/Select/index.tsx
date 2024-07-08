import React, { useEffect, useState } from "react";
import style from "./select.module.css";
import { useTranslation } from "react-i18next";
import i18n from "utils/i18n";

const Select = () => {
  const [locale, setLocale] = useState<string>(i18n.language);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  const options = [
    { value: "en", label: "Engl" },
    { value: "pt", label: "Port" },
  ];

  return (
    <div className={style.container}>
      <select onChange={handleChange} value={locale}>
        {options.map((option, index) => {
          return (
            <option
              key={index}
              value={option.value}
              label={option.label}
            ></option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
