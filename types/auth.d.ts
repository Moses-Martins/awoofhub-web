export interface SignupData {
  email: string;
  password: string;
  name: string;
};

export interface LoginData {
  email: string;
  password: string;
};

export interface authResponse {
  token: string;
  user: UserData
} 




