import PostModel from "../../models/postModel";
import moment from "moment";
import {
  ThumbUpAlt,
  ThumbUpOffAlt,
  Delete,
  MoreHoriz,
} from "@mui/icons-material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, updatePost } from "../../api/actions";
import { ObjectId } from "mongodb";
import { AppDispatch, RootState } from "../../reducers/store";
import { setEditingPost, toggleEdit } from "../../reducers/slices/editSlice";

interface Props {
  post: PostModel;
}

function Post({ post }: Props) {
  const { title, message, author, tags, selectedFile, likeCount, createdAt } =
    post;

  const dispatch: AppDispatch = useDispatch();
  const editing = useSelector((state: RootState) => state.editPost);
  const [liked, setLiked] = useState(false);
  const [stateLikeCount, setStateLikeCount] = useState(likeCount);

  const handleLike = () => {
    let likedPost: PostModel;

    if (liked) {
      likedPost = { ...post, likeCount: post.likeCount - 1 };
      setStateLikeCount(stateLikeCount - 1);
      setLiked(false);
    } else {
      likedPost = { ...post, likeCount: post.likeCount + 1 };
      setStateLikeCount(stateLikeCount + 1);
      setLiked(true);
    }

    dispatch(updatePost({ id: post._id as ObjectId, updatedPost: likedPost }));
  };

  const handleEdit = () => {
    editing && dispatch(setEditingPost(post));
    dispatch(toggleEdit());
  };

  return (
    <div className="bg-light min-w-[16rem] max-w-[18rem] h-96 text-wrap rounded-2xl shadow-lg cursor-default flex flex-col hover:scale-105 hover:shadow-xl transition-all ease-linear overflow-hidden">
      <div className="relative w-full h-[45%] text-light">
        {!(selectedFile === "") ? (
          <img
            className=" object-cover h-full w-full rounded-t-2xl brightness-[0.5]"
            src={selectedFile}
          />
        ) : (
          <div className=" bg-dark_primary h-full w-full rounded-t-2xl" />
        )}
        <h1 className="absolute top-[20px] left-[20px] text-xl font-semibold">
          {author}
        </h1>
        <button
          id="edit-btn"
          className="font-bold absolute top-[20px] right-[20px] bg-black rounded-full bg-opacity-0 hover:bg-opacity-50 transition-all ease-linear duration-[85ms] active:text-gray-300"
          onClick={handleEdit}
        >
          <MoreHoriz fontSize="medium" className="opacity-100" />
        </button>
        <h3 className="absolute top-[50px] left-[20px] text-sm">
          {moment(createdAt).fromNow()}
        </h3>
      </div>
      <div className="w-full h-[55%] flex flex-col justify-between p-5">
        <div className="text-xs flex gap-1 text-light font-semibold">
          {tags.map((tag) => (
            <div
              key={tag}
              className=" bg-gradient-to-tr from-blue_primary to-blue_secondary p-1 rounded-lg "
            >{`#${tag}`}</div>
          ))}
        </div>
        <h1 className="font-bold text-2xl text-blue_primary">{title}</h1>
        <p className="text-sm">{message}</p>
        <div className="flex justify-between items-center text-sm text-dark_primary">
          <button
            className="flex items-center gap-1 hover:text-dark_primary_hover transition-all ease-linear duration-[85ms]"
            onClick={handleLike}
          >
            {liked ? (
              <ThumbUpAlt fontSize="small" />
            ) : (
              <ThumbUpOffAlt fontSize="small" />
            )}
            <span>{stateLikeCount}</span>
            {liked ? "LIKED" : "LIKE"}
          </button>
          <button
            className="flex items-center gap-[1px] hover:text-dark_primary_hover transition-all ease-linear duration-[85ms]"
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
