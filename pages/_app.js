import "@/styles/globals.css";
import Header from "@/components/Nav";
import Footer from "@/components/Footer";
import { Provider } from "react-redux";
import { store } from "../store";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </div>
  );
}
