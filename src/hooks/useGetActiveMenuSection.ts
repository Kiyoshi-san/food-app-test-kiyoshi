import { TSection } from "model/restaurantMenu";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootMenuSectionState } from "../redux/menuSection/slice";

export const useGetActiveMenuSection = (menuSections: TSection[] | null) => {
  const [currentActiveSection, setCurrentActiveSection] = useState<TSection>();

  const { activeMenuSection } = useSelector(
    (state: RootMenuSectionState) => state.menuSectionReducer
  );

  useEffect(() => {
    const actMenu = menuSections?.find(
      (mnSect) => mnSect.id === activeMenuSection
    );

    setCurrentActiveSection(actMenu);
  }, [menuSections, activeMenuSection]);

  return {
    currentActiveSection,
  };
};
