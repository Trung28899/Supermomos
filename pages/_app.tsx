import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { I18nextProvider } from "react-i18next";
import i18nObject from "@/i18n/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "../store/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18nObject}>
      <Provider store={store}>
        <ToastContainer />
        <Component {...pageProps} />{" "}
      </Provider>
    </I18nextProvider>
  );
}
