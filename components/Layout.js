import Head from "next/head";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <div
      className={` ${
        darkMode ? " bg-dark text-teal-100" : "bg-slate-50"
      } min-h-[500px] flex items-center justify-center content-center w-full py-4`}
    >
      <Head>
        <title>Apple Quiz</title>
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
