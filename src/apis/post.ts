import type {
  PostForm,
  Category,
  PostList,
  GetPostListParams,
} from "../types/post";
import request from "./request";

export const getPostList = async (params?: GetPostListParams) => {
  const data = await request<PostList>({
    method: "get",
    url: "/posts",
    params,
  });

  return data?.data;
};

export const createNewPost = async (postForm: PostForm) => {
  const data = await request({
    method: "post",
    url: "/new/post",
    data: postForm,
  });

  return data;
};

export const getCategoryList = async () => {
  const data = await request<Array<Category>>({
    method: "get",
    url: "/category/list",
  });

  return data?.data;
};
