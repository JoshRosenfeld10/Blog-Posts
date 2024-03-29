import { useState, FormEvent } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../reducers/store";
import ClearIcon from "@mui/icons-material/Clear";
import { toggleEdit } from "../../reducers/slices/editSlice";
import { PostData, Base64 } from "./Form";
import PostModel from "../../models/postModel";
import EditIcon from "@mui/icons-material/Edit";
import { deletePost, updatePost } from "../../api/actions";
import { ObjectId } from "mongodb";

function EditForm() {
  const selectedPost = useSelector(
    (state: RootState) => state.editPost.selectedPost as PostModel
  );
  const [postData, setPostData] = useState({
    author: selectedPost.author,
    title: selectedPost.title,
    message: selectedPost.message,
    tags: selectedPost.tags,
    selectedFile: selectedPost.selectedFile,
  } as PostData);

  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(
      updatePost({ id: selectedPost._id as ObjectId, updatedPost: postData })
    );

    dispatch(toggleEdit());
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

  const handleDelete = () => {
    dispatch(deletePost(selectedPost._id as ObjectId));
    dispatch(toggleEdit());
  };

  return (
    <div className="fixed top-[50%] left-[50%] -mt-[187px] -ml-[148.5px] w-fit h-fit shadow-2xl rounded-lg p-5 bg-light outline outline-blue_secondary z-20">
      <button
        className="absolute top-[15px] right-[15px] text-gray-500 hover:text-gray-700"
        onClick={() => dispatch(toggleEdit())}
      >
        <ClearIcon />
      </button>
      <form
        className="flex flex-col justify-center items-center gap-2"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-1 justify-center items-center font-semibold text-xl cursor-default text-blue_primary">
          Edit Post <EditIcon fontSize="medium" />
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
          UPDATE
        </button>
        <button
          className=" bg-dark_primary hover:bg-dark_primary_hover text-white w-full rounded-md p-2 text-xs transition-all ease-linear duration-100"
          type="button"
          onClick={handleClear}
        >
          CLEAR
        </button>
        <hr className="w-full h-[2px] bg-blue_primary rounded-md"></hr>
        <button
          className=" bg-red-500 hover:bg-red-600 text-white w-full rounded-md p-2 text-xs transition-all ease-linear duration-100"
          type="button"
          onClick={handleDelete}
        >
          DELETE POST
        </button>
      </form>
    </div>
  );
}

export default EditForm;
