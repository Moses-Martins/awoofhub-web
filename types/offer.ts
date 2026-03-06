export interface CreateOfferData {
    title: string;
    description: string;
    category: string;
    price?: number;
    imageUrl?: string;
    location?: string;
    endDate: string;
}


export interface UpdateOfferData {
    title?: string;
    description?: string;
    category?: string;
    price?: number;
    image_url?: string;
    location?: string;
};


export interface Offer {
    id: string;
    title: string;
    highlight: string;
    description: string;
    price: string;
    imageUrl: string;
    business: {
        id: string;
    };
    category: {
        id: string;
    };
    location: string;
    approvalStatus: "pending" | "approved" | "rejected";
    adminNote: string | null;
    approvedAt: string | null;
    createdAt: string;
    endDate: string;
};

