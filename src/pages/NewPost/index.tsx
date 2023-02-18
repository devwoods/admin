import type { PostForm, Category } from "../../types/post";
import { useState, useEffect, ChangeEvent } from "react";
import styled from "styled-components";

import { createNewPost, getCategoryList } from "../../apis/post";
import { colors } from "../../configs/theme";

import Select from "../../components/common/Select";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState<number | "">("");
  const [categoryList, setCategoryList] = useState<
    Array<{ value: number; name: string }>
  >([]);

  const handleSubmitNewPost = async () => {
    const postForm: PostForm = {
      categoryId: 2,
      title,
      content,
      summary: "test",
      thumbnail_image: "123",
    };

    try {
      const data = await createNewPost(postForm);

      console.log(data);
    } catch {
      console.error("error new post");
    }
  };

  const handleClickSubmitBtn = () => {
    handleSubmitNewPost();
  };

  const handleChangeCategory = (value: number) => {
    setCategory(value);
  };

  const loadCategoryList = async () => {
    try {
      const data = await getCategoryList();
      const newCategoryList = data
        ? data.map((item) => ({ value: item.id, name: item.name }))
        : [];
      setCategoryList(newCategoryList);
    } catch {
      console.error("error category list");
    }
  };

  useEffect(() => {
    loadCategoryList();
  }, []);
  return (
    <Container>
      <Select
        value={category}
        menuItems={categoryList}
        onChange={handleChangeCategory}
      />
      <TitleField
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ContentField
        placeholder="내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Box
        style={{
          width: "70%",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Button onClick={handleClickSubmitBtn}>제출</Button>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const TitleField = styled.input`
  width: 70%;
  height: 40px;
  border: none;
  border-bottom: 1px solid #000;
  margin-top: 16px;
  font-size: 24px;
`;

const ContentField = styled.textarea`
  width: 70%;
  height: 500px;
  margin-top: 16px;
  border-radius: 8px;
  font-size: 18px;
`;

const Button = styled.button`
  padding: 12px 20px;
  color: #fff;
  border: none;
  margin-top: 16px;
  border-radius: 8px;
  background-color: ${colors.primary.main};
  cursor: pointer;
`;

const Box = styled.div``;
