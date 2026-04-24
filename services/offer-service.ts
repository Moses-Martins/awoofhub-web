import { apiClient } from "@/lib/api-client";
import { ApiResponse } from "@/types/api-response";
import { BusinessDashboard, CreateOfferData, Offer, UpdateOfferData } from "@/types/offer";

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


async function getOffersByUserId(userId: string, page: number, limit: number): Promise<ApiResponse<Offer[]>> {
  const res: ApiResponse<Offer[]> = await apiClient.get(`/offers/user/id/${userId}`, {
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

async function getBusinessOffersByCategorySlug(slug: string, page: number, limit: number): Promise<ApiResponse<Offer[]>> {
  const res: ApiResponse<Offer[]> = await apiClient.get(`/offers/business/category/slug/${slug}`, {
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

async function searchBusinessOffers(query: string, page: number, limit: number): Promise<ApiResponse<Offer[]>> {
  const res: ApiResponse<Offer[]> = await apiClient.get('/offers/business/search/', {
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

async function getBusinessDashboard(): Promise<ApiResponse<BusinessDashboard>> {
  const res: ApiResponse<BusinessDashboard> = await apiClient.get("/offers/business/dashboard/")

  return res;
}


const OfferService = {
  createOffer,
  getAllOffers,
  getOfferById,
  getOffersByCategory,
  getOffersByUserId,
  getOffersByCategorySlug,
  getBusinessOffersByCategorySlug,
  getBusinessDashboard,
  getRandomOffers,
  searchOffers,
  searchBusinessOffers,
  filterOffers,
  updateOffer,
  deleteOffer,
};

export default OfferService;
