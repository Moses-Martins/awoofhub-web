"use client"
import { loginService } from "@/services/auth-service";
import { authResponse, LoginData } from '@/types/auth';
import { UserData } from '@/types/user';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const login = (data: LoginData): Promise<authResponse> => {
  return loginService(data);
};

type UseLoginOptions = {
  onSuccess?: (user: UserData) => void;
};
  
export const useLogin = ({ onSuccess }: UseLoginOptions = {}) => {
  const queryClient = useQueryClient(); 

  const { mutate: submit, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      queryClient.setQueryData(['auth-user'], data.user); 
      onSuccess?.(data.user);
      
    },
  });

  return { submit, isPending };
};
 