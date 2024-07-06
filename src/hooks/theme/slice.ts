import { useGetRestaurant } from "hooks/restaurant/useGetRestaurant";

export const useNewTheme = () => {
  const restaurantData = useGetRestaurant().data;

  if (restaurantData) {
    const { webSettings } = restaurantData;

    const root = document.documentElement;
    root.style.setProperty("--primary-color", webSettings.primaryColour);
    root.style.setProperty(
      "--primary-color-hover",
      webSettings.primaryColourHover
    );
    // root.style.setProperty("--bg-primary-color", webSettings.backgroundColour);
    root.style.setProperty("--bg-primary-color", webSettings.backgroundColour);
    root.style.setProperty("--bg-nav-color", webSettings.navBackgroundColour);
  }
};
