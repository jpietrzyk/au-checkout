import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <h1>Welcome</h1>
      <p>
        Dashwood contempt on mr unlocked resolved provided of of. Stanhill{" "}
        <br />
        wondered it it welcomed oh. Hundred no prudent he however smiling at an
        <br />
        offence. <br />
      </p>
      <Link to="/checkout" style={{ color: "#0366d6", textDecoration: "none" }}>
        Go to Checkout
      </Link>
    </main>
  );
}
