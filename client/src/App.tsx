import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { getPosts } from "./actions/posts";
import { getPosts } from "./api/actions";
import Posts from "./components/Posts/Posts";
import { AppDispatch } from "./reducers/store";
import Form from "./components/Form/Form";

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <Posts />
      <Form />
    </div>
  );
}

export default App;
