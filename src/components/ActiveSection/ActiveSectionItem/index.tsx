import { TItem } from "model/restaurantMenu";
import React from "react";

type TActiveSection = {
  currActSecItem: TItem | undefined;
};

const ActiveSection = ({ currActSecItem }: TActiveSection) => {
  return (
    <div key={currActSecItem?.id}>
      <h3>{currActSecItem?.name}</h3>
      <span>{currActSecItem?.description}</span>
      <span>{currActSecItem?.price}</span>
    </div>
  );
};

export default ActiveSection;
