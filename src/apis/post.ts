import type { PostForm } from "../types/post";
import request from "./request";

export const createNewPost = async (postForm: PostForm) => {
  const data = await request({
    method: "post",
    url: "/new/post",
    data: postForm,
  });

  return data;
};
