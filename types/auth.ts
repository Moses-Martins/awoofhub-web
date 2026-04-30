export interface SignupData {
  email: string;
  password: string;
  name: string;
  role: "user" | "business"
};
export interface EmailData {
  email: string;
};

export interface ResetPasswordData {
  token: string;
  password: string;
};


export interface VerifyEmailData {
  token: string;
};

export interface LoginData {
  email: string;
  password: string;
};
