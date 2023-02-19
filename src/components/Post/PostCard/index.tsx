import styled from "styled-components";
import type { Post } from "../../../types/post";

import { colors } from "../../../configs/theme";

interface IPostCard {
  post: Post;
}

export default function PostCard({ post }: IPostCard) {
  return (
    <Container>
      <Title>{post.title}</Title>
      <FlexBox>
        <Button
          style={{
            backgroundColor: "#ff5050",
            color: "#fff",
            marginRight: "12px",
          }}
        >
          삭제
        </Button>
        <Button
          style={{ color: "#fff", backgroundColor: `${colors.primary.main}` }}
        >
          수정
        </Button>
      </FlexBox>
    </Container>
  );
}

const Container = styled.div`
  width: 300px;
  height: 150px;
  padding: 16px;
  margin: 16px 8px;
  background-color: #99ccff;
  border-radius: 8px;
`;

const Title = styled.h2``;
const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: end;
`;
