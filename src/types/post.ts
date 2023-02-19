export interface PostForm {
  categoryId: number;
  title: string;
  content: string;
  summary: string;
  thumbnail_image: string;
}

export interface GetPostListParams {
  currentPage?: number;
  pageSize?: number;
}

export interface Post {
  id: number;
  categoryId: number;
  title: string;
  content: string;
  summary: string;
  thumbnail_image: string;
  created_at: string;
  updated_at: string;
}

export interface PostList {
  list: Array<Post>;
  currentPage: number;
  pageSize: number;
  totalPages: number;
}

export interface Category {
  id: number;
  parentId: number;
  name: string;
}
