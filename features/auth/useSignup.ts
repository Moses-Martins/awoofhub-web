import { signupService } from "@/services/auth-service";
import { SignupData } from '@/types/auth';
import { User } from '@/types/user';
import { useMutation } from '@tanstack/react-query';

export const signup = async (data: SignupData): Promise<User> => {
    const result = await signupService(data);
    return result.data;
};

type UseSignupOptions = {
    onSuccess?: (email: string) => void;
};

export const useSignup = ({ onSuccess }: UseSignupOptions = {}) => {
    const { mutate: submit, isPending } = useMutation({
        mutationFn: signup,
        onSuccess: (data) => {
            onSuccess?.(data.email);
        },
    });
    return { submit, isPending };
};

