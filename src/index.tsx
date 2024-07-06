import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Menu from "./pages/Menu/Menu";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./utils/i18n";

import { Provider } from "react-redux";
import store from "./redux/store";
import NotFoundPage from "pages/NotFoundPage";
import UnderConstruction from "pages/UnderConstruction";
import { useNewTheme } from "hooks/theme/slice";

// Create a component to fetch and apply the theme
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  useNewTheme();
  return <>{children}</>;
};

const router = createBrowserRouter([
  { path: "/", element: <Menu />, errorElement: <NotFoundPage /> },
  { path: "/menu", element: <Menu /> },
  { path: "/signin", element: <UnderConstruction /> },
  { path: "/contact", element: <UnderConstruction /> },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
