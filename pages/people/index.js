import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      users: data,
    },
  };
};

function People(props) {
  return (
    <div>
      {props.users.map((el) => (
        <Link key={el.id} href={"/people/" + el.id}>
          <h3>{el.name}</h3>
        </Link>
      ))}
    </div>
  );
}

export default People;
