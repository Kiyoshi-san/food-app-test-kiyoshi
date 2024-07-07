import React, { useEffect, useState } from "react";
import { TModifierItem } from "model/restaurantMenu";
import style from "./modifier-option.module.css";
import { useFormatPrice } from "hooks/currency/useFormatPrice";
import Input from "components/ui/Input";

type TModifierOption = {
  options: TModifierItem[];
  selectedOption: number | null;
  setSelectedOption: (option: number) => void;
};

const ModifierOption = ({
  options,
  selectedOption,
  setSelectedOption,
}: TModifierOption) => {
  const formatPrice = useFormatPrice;

  useEffect(() => {
    setSelectedOption(options[0].id);
  }, []);

  const handleChange = (option: number) => {
    setSelectedOption(option);
  };

  return (
    <div className={style.optionContainer}>
      <label>
        {!!options?.length &&
          options.map((option) => (
            <div className={style.optionItemContainer} key={option.id}>
              <div className={style.optionDescriptionContainer}>
                <h3>{option.name}</h3>
                <p>{formatPrice(option.price)}</p>
              </div>
              <div className={style.radio}>
                <Input
                  name="modifierOptions"
                  value={option.id}
                  type="radio"
                  checked={selectedOption === option.id}
                  onChange={() => handleChange(option.id)}
                />
              </div>
            </div>
          ))}
      </label>
    </div>
  );
};

export default ModifierOption;
