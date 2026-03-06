import { apiClient } from "@/lib/api-client";
import { ApiResponse } from "@/types/api-response";
import { Category, CreateCategoryData } from "@/types/category";
import { createOffer } from "./offer-service";

export async function createCategory(payload: CreateCategoryData): Promise<ApiResponse<Category>> {
  const res: ApiResponse<Category> = await apiClient.post('/category/', payload)

  return res;
}

export async function getAllCategories(): Promise<ApiResponse<Category[]>> {
  const res: ApiResponse<Category[]> = await apiClient.get('/category/')

  return res;
}

export async function getCategoryById(id: string): Promise<ApiResponse<Category>> {
  const res: ApiResponse<Category> = await apiClient.get(`/category/${id}`)

  return res;
}



const CategoryService = {
  createOffer,
  getAllCategories,
  getCategoryById,
};

export default CategoryService;
