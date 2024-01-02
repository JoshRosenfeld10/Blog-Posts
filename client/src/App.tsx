import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./api/actions";
import Posts from "./components/Posts/Posts";
import { AppDispatch } from "./reducers/store";
import Form from "./components/Form/Form";
import Header from "./components/Header";

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div className="flex justify-center gap-28 my-10 ">
        <Posts />
        <Form />
      </div>
    </div>
  );
}

export default App;
