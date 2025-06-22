import { Link } from "react-router";

export default async function NotFound() {
  return (
    <div>
      <h2>Not Found 501</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link to="/blog">all posts</Link>
      </p>
    </div>
  );
}