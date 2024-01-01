import { useSelector } from "react-redux";
import { reducerState } from "../../reducers/postSlice";
import Post from "./Post";

function Posts() {
  const posts = useSelector((state: reducerState) => state.posts);
  console.log(posts);

  return (
    <div>
      <div id="grid">
        {posts.map((post) => (
          <Post />
        ))}
      </div>
    </div>
  );
}

export default Posts;
