import { signupService } from "@/services/auth-service";
import { SignupData } from '@/types/auth';
import { User } from '@/types/user';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const signup = async (data: SignupData): Promise<User> => {
    const result = await signupService(data);
    return result.data;
};

type UseSignupOptions = {
    onSuccess?: (user: User) => void;
};

export const useSignup = ({ onSuccess }: UseSignupOptions = {}) => {
    const queryClient = useQueryClient();
    
    const { mutate: submit, isPending } = useMutation({
        mutationFn: signup,
        onSuccess: (data) => {
            queryClient.setQueryData(['auth-user'], data);
            onSuccess?.(data);
        },
    });
    return { submit, isPending };
};

