import { apiClient } from "@/lib/api-client";
import { ApiResponse } from "@/types/api-response";
import { LoginData, SignupData } from "@/types/auth";
import { User } from "@/types/user";


// Login
export async function loginService(payload: LoginData): Promise<ApiResponse<User>> {
  const res: ApiResponse<User> = await apiClient.post('/auth/login/', payload)

  return res;
}

// Register
export async function signupService(payload: SignupData): Promise<ApiResponse<User>> {
  const res: ApiResponse<User> = await apiClient.post('/auth/registration/', payload)
  
  return res;
}

// User
export async function getUserService(): Promise<ApiResponse<User>> {
  const res: ApiResponse<User> = await apiClient.get('/auth/user/')
  
  return res;
}
