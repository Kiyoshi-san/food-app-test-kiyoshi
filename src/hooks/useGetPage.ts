import { useLocation } from "react-router-dom";

export const useGetPage = () => {
  const { pathname } = useLocation();
  let page = "";

  switch (pathname) {
    case "/":
      page = "menu";
      break;
    default:
      page = pathname.replace("/", "");
  }

  return page;
};
