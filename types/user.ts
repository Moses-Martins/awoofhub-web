export interface UserData {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  username: string;
  bio: string | null;
  profile_image_url: string | null;
  date_joined: string; // ISO date string
}