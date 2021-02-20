import NavBar from "./navBar";
import Head from "next/head";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>learn next</title>
      </Head>
      <div>
        <NavBar />
        {children}
      </div>
    </>
  );
}

export default Layout;
