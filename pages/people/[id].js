export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((el) => {
    return {
      params: { id: el.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();
  console.log(data);

  return {
    props: {
      user: data,
    },
  };
};

function Details({ user }) {
  return (
    <div className="container">
      <h3>{user.username}</h3>
      <p>{user.website}</p>
      <p>{user.phone}</p>
      <p>{user.name}</p>
    </div>
  );
}

export default Details;
