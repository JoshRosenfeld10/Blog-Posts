import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { reducerState } from "../../reducers/postSlice";
import Post from "./Post";

function Posts() {
  const posts = useSelector((state: reducerState) => state.posts);
  console.log(posts);

  const [message, setMessage] = useState("Loading...");
  const [gridClass, setGridClass] = useState("");

  useEffect(() => {
    console.log(message);

    const timer = setTimeout(() => setMessage("No Posts!"), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    switch (posts.length) {
      case 0:
        setGridClass("flex");
        break;
      case 1:
        setGridClass("grid gap-8 grid-cols-1");
        break;
      case 2:
        setGridClass("grid gap-8 grid-cols-1 lg:grid-cols-2");
        break;
      default:
        setGridClass("grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3");
        break;
    }
  }, [posts.length]);

  return (
    <div id="grid" className={gridClass}>
      {!posts.length ? (
        <h1 className="text-xl text-green_primary">{message}</h1>
      ) : (
        posts.map((post) => <Post post={post} key={post._id?.toString()} />)
      )}
    </div>
  );
}

export default Posts;
