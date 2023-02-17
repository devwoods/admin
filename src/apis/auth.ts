import type { LoginForm, Token } from "../types/auth";
import request from "./request";

export const login = async (loginForm: LoginForm) => {
  const data = await request<Token>({
    method: "post",
    url: "/token/",
    data: loginForm,
  });

  return data?.data;
};
