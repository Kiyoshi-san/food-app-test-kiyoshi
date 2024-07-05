import { TSection } from "model/restaurantMenu";
import React from "react";
import ActiveSectionItem from "./ActiveSectionItem";

type TActiveSection = {
  currentActiveSection: TSection | undefined;
};

const ActiveSection = ({ currentActiveSection }: TActiveSection) => {
  console.log(currentActiveSection);
  return (
    <section>
      <h2>{currentActiveSection?.name}</h2>
      {currentActiveSection?.items.map((currActSecItem) => (
        <ActiveSectionItem
          key={currActSecItem.id}
          currActSecItem={currActSecItem}
        />
      ))}
    </section>
  );
};

export default ActiveSection;
