import { useState, FormEvent } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../api/actions";
import { AppDispatch } from "../../reducers/store";
import PostAddIcon from "@mui/icons-material/PostAdd";

export interface PostData {
  author: string;
  title: string;
  message: string;
  tags: string[];
  selectedFile: string;
}

export interface Base64 {
  base64: string;
}

function Form() {
  const [postData, setPostData] = useState({
    author: "",
    title: "",
    message: "",
    tags: [],
    selectedFile: "",
  } as PostData);
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
      tags: [],
      selectedFile: "",
    });
  };

  return (
    <div className=" w-fit h-96 shadow-lg rounded-lg p-5 bg-light outline outline-dark_primary z-10">
      <form
        className="flex flex-col justify-center items-center gap-2"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center items-center gap-1 font-semibold text-xl cursor-default text-blue_primary">
          Create a Post <PostAddIcon />
        </div>

        <div className="relative w-11/12 h-10">
          <input
            className="peer w-full h-full font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-gray-200 focus:border-blue_primary"
            placeholder=" "
            value={postData.author}
            onChange={(e) =>
              setPostData({ ...postData, author: e.target.value })
            }
          />
          <label className="flex w-full h-full text-sm select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-gray-400 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-400 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-400 peer-focus:text-blue_primary before:border-gray-200 peer-focus:before:!border-blue_primary after:border-gray-200 peer-focus:after:!border-blue_primary">
            Author
          </label>
        </div>

        <div className="relative w-11/12 h-10">
          <input
            className="peer w-full h-full font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-gray-200 focus:border-blue_primary"
            placeholder=" "
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
          <label className="flex w-full h-full text-sm select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-gray-400 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-400 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-400 peer-focus:text-blue_primary before:border-gray-200 peer-focus:before:!border-blue_primary after:border-gray-200 peer-focus:after:!border-blue_primary">
            Title
          </label>
        </div>

        <div className="relative w-11/12 h-10">
          <input
            className="peer w-full h-full font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-gray-200 focus:border-blue_primary"
            placeholder=" "
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
          <label className="flex w-full h-full text-sm select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-gray-400 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-400 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-400 peer-focus:text-blue_primary before:border-gray-200 peer-focus:before:!border-blue_primary after:border-gray-200 peer-focus:after:!border-blue_primary">
            Message
          </label>
        </div>

        <div className="relative w-11/12 h-10">
          <input
            className="peer w-full h-full font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-gray-200 focus:border-blue_primary"
            placeholder=" "
            value={postData.tags}
            onChange={(e) =>
              setPostData({
                ...postData,
                tags: e.target.value.replace(/\s/g, "").split(","), // Remove spaces, split by comma
              })
            }
          />
          <label className="flex w-full h-full text-sm select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-gray-400 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-400 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-400 peer-focus:text-blue_primary before:border-gray-200 peer-focus:before:!border-blue_primary after:border-gray-200 peer-focus:after:!border-blue_primary">
            Tags (separate by comma)
          </label>
        </div>

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
          className="bg-blue_secondary hover:bg-blue_secondary_hover text-white w-full rounded-md p-2 text-sm transition-all ease-linear duration-100"
          type="submit"
        >
          POST
        </button>
        <button
          className=" bg-dark_primary hover:bg-dark_primary_hover text-white w-full rounded-md p-2 text-xs transition-all ease-linear duration-100"
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
