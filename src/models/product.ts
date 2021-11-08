export interface Product {
  id?: string;
  categoryId: string;

  name: string;
  shortDescription: string;
  description: string;

  originalPrice: number;
  salePrice: number;

  isPromotion: 0 | 1;
  promotionPercent: number;

  images: string[];
  isFreeShip: boolean;

  createdAt?: number;
  updatedAt?: number;
}
