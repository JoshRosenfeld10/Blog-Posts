import PostModel from "../../models/postModel";
import moment from "moment";
import {
  ThumbUpAlt,
  ThumbUpOffAlt,
  Delete,
  MoreHoriz,
} from "@mui/icons-material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../api/actions";
import { ObjectId } from "mongodb";
import { AppDispatch } from "../../reducers/store";

interface Props {
  post: PostModel;
}

function Post({ post }: Props) {
  const dispatch: AppDispatch = useDispatch();
  const { title, message, author, tags, selectedFile, likeCount, createdAt } =
    post;

  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    liked ? setLiked(false) : setLiked(true);
  };

  return (
    <div className="bg-light min-w-[16rem] max-w-[18rem] h-96 text-wrap rounded-2xl shadow-lg cursor-default flex flex-col hover:scale-105 hover:shadow-2xl transition-all ease-linear duration-200">
      <div className="relative w-full h-[45%] text-light">
        {!(selectedFile === "") ? (
          <img
            className=" object-cover h-full w-full rounded-t-2xl brightness-[0.5]"
            src={selectedFile}
          />
        ) : (
          <div className=" bg-brown_primary h-full w-full rounded-t-2xl" />
        )}
        <h1 className="absolute top-[20px] left-[20px] text-xl font-semibold">
          {author}
        </h1>
        <button
          id="edit-btn"
          className="font-bold absolute top-[20px] right-[20px] bg-black rounded-full bg-opacity-0 hover:bg-opacity-50 transition-all ease-linear duration-[85ms] active:text-gray-300"
        >
          <MoreHoriz fontSize="medium" className="opacity-100" />
        </button>
        <h3 className="absolute top-[50px] left-[20px] text-sm">
          {moment(createdAt).fromNow()}
        </h3>
      </div>
      <div className="w-full h-[55%] flex flex-col justify-between p-5">
        <h3 className="text-xs text-green_secondary">{tags}</h3>
        <h1 className="font-bold text-2xl text-green_primary">{title}</h1>
        <p className="text-sm">{message}</p>
        <div className="flex justify-between items-center text-sm text-brown_primary">
          <button
            className="flex items-center gap-1 hover:text-[#98795c] transition-all ease-linear duration-[85ms]"
            onClick={handleLike}
          >
            {liked ? (
              <ThumbUpAlt fontSize="small" />
            ) : (
              <ThumbUpOffAlt fontSize="small" />
            )}
            <span>{likeCount}</span>
            {liked ? "LIKED" : "LIKE"}
          </button>
          <button
            className="flex items-center gap-[1px] hover:text-[#98795c] transition-all ease-linear duration-[85ms]"
            onClick={() => dispatch(deletePost(post._id as ObjectId))}
          >
            <Delete fontSize="small" />
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
