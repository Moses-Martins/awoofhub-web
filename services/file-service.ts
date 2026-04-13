import { apiClient } from "@/lib/api-client";
import { ApiResponse } from "@/types/api-response";

async function uploadSingle(file: File): Promise<ApiResponse<string>> {

    const formData = new FormData();
    
    formData.append("file", file);

    const res: ApiResponse<string> = await apiClient.post('/files/upload/', formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    return res;
}


const FileService = {
    uploadSingle
};

export default FileService;
