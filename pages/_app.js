import { createContext, useState } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";

export const context = createContext(null);
function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState("heloooo");
  return (
    <Layout>
      <context.Provider value={{ user, setUser }}>
        <div>hey ello</div>
        <Component {...pageProps} />
      </context.Provider>
    </Layout>
  );
}

export default MyApp;
