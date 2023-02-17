import type { FormEventHandler, SyntheticEvent } from "react";
import type { LoginForm } from "../../types/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { login } from "../../apis/auth";
import { colors } from "../../configs/theme";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const fetchLogin = async (loginForm: LoginForm) => {
    try {
      const data = await login(loginForm);
      if (data === undefined) {
        return;
      }
      const { access, refresh } = data;
      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);

      navigate("/new/post");
    } catch {
      console.error("login error");
    }
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const loginForm: LoginForm = {
      username: userName,
      password,
    };

    fetchLogin(loginForm);
  };
  return (
    <Container>
      <h2>Blog Admin Login</h2>
      <StyledForm onSubmit={handleSubmit}>
        <TextField
          placeholder="아이디"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton onClick={handleSubmit}>로그인</LoginButton>
      </StyledForm>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextField = styled.input`
  width: 300px;
  height: 42px;
  font-size: 24px;
  border: 1px solid ${colors.divider.dark};
  border-radius: 8px;
  margin: 8px;
  padding: 8px;
`;

const LoginButton = styled.button`
  width: 320px;
  height: 42x;
  border: none;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  background-color: ${colors.primary.main};
`;
