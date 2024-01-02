import { useState, FormEvent } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../api/actions";
import { AppDispatch } from "../../reducers/store";

export interface PostData {
  author: string;
  title: string;
  message: string;
  tags: string;
  selectedFile: string;
}

interface Base64 {
  base64: string;
}

function Form() {
  const [postData, setPostData] = useState({
    author: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(createPost(postData));
    handleClear();
  };

  const handleClear = () => {
    setPostData({
      author: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <div className=" w-fit h-fit shadow-lg rounded-lg p-5 bg-light outline outline-green_secondary z-10">
      <form
        className="flex flex-col justify-center items-center gap-2"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <h1 className="font-semibold text-lg cursor-default text-green_primary">
          Create a Post
        </h1>
        <input
          type="text"
          value={postData.author}
          placeholder="Author"
          className="w-11/12 p-2 border-green_secondary border border-1 rounded-md text-sm outline-green_primary"
          onChange={(e) => setPostData({ ...postData, author: e.target.value })}
        ></input>
        <input
          type="text"
          value={postData.title}
          placeholder="Title"
          className="w-11/12 p-2 border-green_secondary border border-1 rounded-md text-sm outline-green_primary"
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        ></input>
        <input
          type="text"
          value={postData.message}
          placeholder="Message"
          className="w-11/12 p-2 text-wrap border-green_secondary border border-1 rounded-md text-sm outline-green_primary"
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        ></input>
        <input
          type="text"
          value={postData.tags}
          placeholder="Tags"
          className="w-11/12 p-2 border-green_secondary border border-1 rounded-md text-sm outline-green_primary "
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        ></input>
        <div className=" text-xs flex justify-center w-11/12">
          <FileBase
            type="file"
            multiple={false}
            onDone={(base64: Base64) =>
              setPostData({ ...postData, selectedFile: base64.base64 })
            }
          />
        </div>
        <button
          className="bg-green_secondary hover:bg-[#7e8664] text-white w-full rounded-md p-2 text-sm transition-all ease-linear duration-100"
          type="submit"
        >
          POST
        </button>
        <button
          className=" bg-brown_primary hover:bg-[#98795c] text-white w-full rounded-md p-2 text-xs transition-all ease-linear duration-100"
          type="button"
          onClick={handleClear}
        >
          CLEAR
        </button>
      </form>
    </div>
  );
}

export default Form;
