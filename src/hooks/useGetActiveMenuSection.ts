import { RootState } from "model/menuSection";
import { TSection } from "model/restaurantMenu";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useGetActiveMenuSection = (menuSections: TSection[] | null) => {
  const [currentActiveSection, setCurrentActiveSection] = useState<TSection>();

  const { activeMenuSection } = useSelector(
    (state: RootState) => state.menuSectionReducer
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
