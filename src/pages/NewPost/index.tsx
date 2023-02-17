import type { PostForm } from "../../types/post";
import { useState } from "react";
import styled from "styled-components";

import { createNewPost } from "../../apis/post";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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
  return (
    <Container>
      <TextField
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        placeholder="내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button onClick={handleClickSubmitBtn}>제출</Button>
    </Container>
  );
}

const Container = styled.div``;

const TextField = styled.input``;

const Button = styled.button``;
