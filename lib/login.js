import axios from "axios";

export const login_server = async ({ email, password }, router, setloading) => {
  try {
    const { data } = await axios({
      method: "POST",
      url: "http://localhost:5000/login",
      data: {
        email,
        password,
      },
      withCredentials: true,
    });
    console.log(data);
    router.push("/");
  } catch (err) {
    console.log(err);
  }
};

export const check_auth = async (cookie) => {
  try {
    const { data } = await axios({
      method: "GET",
      url: "http://localhost:5000/check-auth",
      withCredentials: true,
      data: {
        cookie,
      },
    });

    return data;
  } catch (err) {
    return err.response.data;
  }
};

export const check = () => async () => {
  check_auth();
  return {
    props: {}, // will be passed to the page component as props
  };
};
