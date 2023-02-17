export interface LoginForm {
  username: string;
  password: string;
}

export interface Token {
  access: string;
  refresh: string;
}
