import { TItem } from "model/restaurantMenu";
import React from "react";

type TActiveSectionItem = {
  currActSecItem: TItem | undefined;
};

const ModalActiveItem = ({ currActSecItem }: TActiveSectionItem) => {
  return <div>ModalActiveItem</div>;
};

export default ModalActiveItem;
