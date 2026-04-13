import FileService from "@/services/file-service";
import { ApiResponse } from "@/types/api-response";
import { useMutation } from "@tanstack/react-query";

export const updateUserPhoto = (file: File): Promise<ApiResponse<string>> => {
    return FileService.uploadSingle(file); 
};

export const useUpdateUserPhoto = () => { 

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (file: File) => updateUserPhoto(file),

    onSuccess: (res) => {

    },
  });

  return {
    uploadPhoto: mutateAsync,
    isPending,
  };
};