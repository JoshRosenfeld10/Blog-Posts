import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./api/actions";
import Posts from "./components/Posts/Posts";
import { AppDispatch, RootState } from "./reducers/store";
import Form from "./components/Form/Form";
import Header from "./components/Header";
import EditForm from "./components/Form/EditForm";

function App() {
  const dispatch: AppDispatch = useDispatch();
  const editSlice = useSelector((state: RootState) => state.editPost);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="w-screen h-screen">
      {editSlice.editing && <EditForm />}
      <Header />
      <div
        id="blur-layer"
        className={
          editSlice.editing
            ? "blur transition-all ease-linear brightness-75"
            : "transition-all ease-linear"
        }
      >
        <div className="flex justify-center sm:gap-28 gap-8 my-10 sm:flex-row sm:items-start flex-col-reverse items-center">
          <Posts />
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
