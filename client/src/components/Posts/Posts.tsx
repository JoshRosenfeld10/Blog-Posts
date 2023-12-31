import { useSelector } from "react-redux";
import { reducerState } from "../../reducers/postSlice";

function Posts() {
  const posts = useSelector((state: reducerState) => state.posts);
  console.log(posts);

  return (
    <div>
      <div id="grid">
        {posts.map((post) => (
          <div key={post._id?.toString()}>{post.title}</div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
