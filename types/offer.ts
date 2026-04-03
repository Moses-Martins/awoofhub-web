export interface CreateOfferData {
    title: string;
    highlight: string;
    description: string;
    category: string;
    imageUrl?: string;
    location?: string;
    endDate: string;
}


export interface UpdateOfferData {
    title?: string;
    highlight?: string
    description?: string;
    category?: string;
    imageUrl?: string;
    location?: string;
};


export interface Offer {
    id: string;
    title: string;
    highlight: string;
    description: string;
    price: string;
    imageUrl: string;
    termsAndConditions: string;
    value: string;
    dealUrl: string;
    couponCode?: string;
    business: {
        id: string;
        name: string;
    };
    category: {
        id: string;
        name: string;
        slug: string;
    };
    location: string;
    approvalStatus: "pending" | "approved" | "rejected";
    adminNote: string | null;
    approvedAt: string | null;
    createdAt: string;
    endDate: string;
    avgRating: number,
    reviewCount: number,
    ratingDistribution: {}
};

