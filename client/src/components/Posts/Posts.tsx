import { useSelector } from "react-redux";
import { reducerState } from "../../reducers";

function Posts() {
  const posts = useSelector((state: reducerState) => state.posts);
  console.log(posts);
  return <div>Posts</div>;
}

export default Posts;
