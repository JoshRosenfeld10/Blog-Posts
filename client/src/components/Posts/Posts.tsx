import { useSelector } from "react-redux";
import { reducerState } from "../../reducers/postSlice";
import Post from "./Post";

function Posts() {
  const posts = useSelector((state: reducerState) => state.posts);
  console.log(posts);

  return (
    <div>
      <div
        id="grid"
        className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
      >
        {!posts.length ? (
          <h1>Loading...</h1>
        ) : (
          posts.map((post) => <Post post={post} key={post._id?.toString()} />)
        )}
      </div>
    </div>
  );
}

export default Posts;
