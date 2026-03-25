import { apiClient } from "@/lib/api-client";
import { ApiResponse } from "@/types/api-response";


export async function getStreamChatToken(): Promise<string> {
    const res: ApiResponse<{token: string}> = await apiClient.get("/chat/token/")
    return res.data.token;
}

