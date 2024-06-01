export interface SkinRating {
  id: number;
  name: string;
  src: string;
  price: string;
  weapon_id: number;
  rating: number;
  totalRatings: number;
}

export interface WeaponRating {
  id: number;
  name: string;
  type: string;
  src: string;
  description: string;
  rating: number;
  totalRatings: number;
}
