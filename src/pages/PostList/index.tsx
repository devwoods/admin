import type { Post } from "../../types/post";
import { useState, useEffect } from "react";
import styled from "styled-components";

import { getPostList } from "../../apis/post";

import PostCard from "../../components/Post/PostCard";

export default function PostList() {
  const [posts, setPosts] = useState<Array<Post>>([]);

  const loadPostList = async () => {
    try {
      const data = await getPostList({});
      const newPosts = data ? data.list : [];
      setPosts(newPosts);
    } catch {
      console.error("error post list");
    }
  };

  useEffect(() => {
    loadPostList();
  }, []);
  return (
    <Container>
      {posts.map((post) => (
        <PostCard post={post} />
      ))}
    </Container>
  );
}

const Container = styled.div``;
