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
      <div className="flex justify-center sm:gap-28 gap-8 my-10 sm:flex-row sm:items-start flex-col-reverse items-center">
        <Posts />
        <Form />
      </div>
    </div>
  );
}

export default App;
