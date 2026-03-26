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

export async function refreshTokenService(): Promise<ApiResponse<{}>> {
  const res: ApiResponse<{}> = await apiClient.post('/auth/refresh/')
  
  return res;
}

// Logout
export async function logoutService(): Promise<ApiResponse<{}>> {
  const res: ApiResponse<{}> = await apiClient.post('/auth/logout/')
  
  return res;
}
