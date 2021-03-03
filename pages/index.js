import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import { check_auth } from "../lib/login";

export async function getServerSideProps({ req }) {
  const data = await check_auth(req.cookies);

  if (!req.cookies.id && data.status === "failed") {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  //   const { data } = axios({
  //     method: "GET",
  //     url: "http://localhost:5000/check-auth",
  //     withCredentials: true,
  //   });
  console.log(data);
  console.log(req.cookies);
  return {
    props: {}, // will be passed to the page component as props
  };
}

// export async function getServerSideProps  () check()

export default function Home() {
  useEffect(() => {
    // check_auth();
  }, []);

  return (
    <div className="container">
      <h1>Home Page</h1>
      <p>
        Lorem laboris veniam commodo labore culpa. Nisi duis officia est
        cupidatat veniam laboris. Sunt occaecat magna nisi sint adipisicing.
        Officia dolore esse amet in veniam qui ex dolore elit laborum cupidatat
        reprehenderit culpa.
      </p>
    </div>
  );
}
