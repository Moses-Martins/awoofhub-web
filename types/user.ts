export interface User {
  id: string;
  email: string;
  name: string;
  profileImageUrl: string | null;
  role: "user" | "admin" | "moderator";
  bio: string | null;
  address: string | null;
  website: string | null;
  createdAt: string;
  updatedAt: string;
};


