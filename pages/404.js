import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

function Notfound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  });
  return (
    <div className="container">
      <h2>Ooops page does not exist </h2>
      <p>
        Sint irure amet in eu irure dolor velit Lorem labore duis elit. Irure
        elit laboris dolore sint anim. Minim ad amet consectetur esse occaecat.
        Incididunt eu Lorem magna ipsum culpa id enim culpa laborum. Non
        consequat ipsum irure non sunt est quis labore commodo. Consectetur
        velit cupidatat mollit minim minim quis velit ipsum cupidatat ad
        exercitation magna in. Amet aliqua eu reprehenderit exercitation
        excepteur exercitation incididunt anim pariatur officia labore aliquip
        non tempor.
      </p>
      <Link href="/">
        <a>Go Home</a>
      </Link>
    </div>
  );
}

export default Notfound;
