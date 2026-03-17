import { apiClient } from "@/lib/api-client";
import { ApiResponse } from "@/types/api-response";
import { CreateOfferData, Offer, UpdateOfferData } from "@/types/offer";

async function createOffer(payload: CreateOfferData): Promise<ApiResponse<Offer>> {
  const res: ApiResponse<Offer> = await apiClient.post('/offers/', payload)

  return res;
}

async function getAllOffers(page: number, limit: number): Promise<ApiResponse<Offer[]>> {
  const res: ApiResponse<Offer[]> = await apiClient.get('/offers/', {
    params: { page, limit },
  })

  return res;
}

async function getOfferById(id: string): Promise<ApiResponse<Offer>> {
  const res: ApiResponse<Offer> = await apiClient.get(`/offers/${id}`)

  return res;
}


async function getOffersByCategory(id: string, page: number, limit: number): Promise<ApiResponse<Offer[]>> {
  const res: ApiResponse<Offer[]> = await apiClient.get(`/offers/category/id/${id}`, {
    params: { page, limit },
  })

  return res;
}


async function getOffersByCategorySlug(slug: string, page: number, limit: number): Promise<ApiResponse<Offer[]>> {
  const res: ApiResponse<Offer[]> = await apiClient.get(`/offers/category/slug/${slug}`, {
    params: { page, limit },
  })

  return res;
}


async function getRandomOffers(page: number, limit: number): Promise<ApiResponse<Offer[]>> {
  const res: ApiResponse<Offer[]> = await apiClient.get('/offers/', {
    params: { page, limit },
  })

  return res;
}

async function searchOffers(query: string, page: number, limit: number): Promise<ApiResponse<Offer[]>> {
  const res: ApiResponse<Offer[]> = await apiClient.get('/offers/search/', {
    params: { query, page, limit },
  })

  return res;
}

async function filterOffers(category: string, minPrice: number, maxPrice: number, minRating: number): Promise<ApiResponse<Offer[]>> {
  const res: ApiResponse<Offer[]> = await apiClient.post('/offers/filter/', {
    params: { category, minPrice, maxPrice, minRating },
  })

  return res;
}

async function updateOffer(id: string, payload: UpdateOfferData): Promise<ApiResponse<Offer>> {
  const res: ApiResponse<Offer> = await apiClient.post(`/offers/${id}`, payload)

  return res;
}

async function deleteOffer(id: string): Promise<ApiResponse<Offer>> {
  const res: ApiResponse<Offer> = await apiClient.post(`/offers/${id}`)

  return res;
}


const OfferService = {
  createOffer,
  getAllOffers,
  getOfferById,
  getOffersByCategory,
  getOffersByCategorySlug,
  getRandomOffers,
  searchOffers,
  filterOffers,
  updateOffer,
  deleteOffer,
};

export default OfferService;
