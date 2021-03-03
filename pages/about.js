import { useContext, useState } from "react";
import styles from "../styles/about.module.css";
import { context } from "./_app";
import Error from "./_Error";

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default function about(props) {
  const { user, setUser } = useContext(context);
  console.log(user);
  const [data, setData] = useState("hey");
  // if (true) {
  //   return <Error statusCode="503" />;
  // }
  return (
    <div className="container">
      {/* <h1 className={styles.header}>About </h1> */}
      <p>
        Anim culpa non esse fugiat nostrud dolore ad non aliquip id ad aliquip
        fugiat.Dolor deserunt eu sint eiusmod laborum duis exercitation fugiat.
        Veniam reprehenderit nulla elit excepteur laboris aliquip id do do. Non
        commodo Lorem veniam adipisicing mollit esse irure.{" "}
      </p>
      <p>
        Anim culpa non esse fugiat nostrud dolore ad non aliquip id ad aliquip
        fugiat
      </p>
      <button
        onClick={() => {
          setUser("hey");
        }}
      >
        login
      </button>
      <button
        onClick={() => {
          setData("there");
        }}
      >
        data
      </button>
      <h1>{data}</h1>
      <h1>{user}</h1>
    </div>
  );
}
