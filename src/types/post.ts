export interface PostForm {
  categoryId: number;
  title: string;
  content: string;
  summary: string;
  thumbnail_image: string;
}

export interface Category {
  id: number;
  parentId: number;
  name: string;
}
