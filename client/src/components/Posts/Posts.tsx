import { useSelector } from "react-redux";
import { reducerState } from "../../reducers";
import Post from "./Post";
import PostModel from "../../models/postModel";

function Posts() {
  const posts = useSelector((state: reducerState) => state.posts);
  console.log(posts);

  return (
    <div>
      <div id="grid"></div>
    </div>
  );
}

export default Posts;
