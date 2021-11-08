export interface Product {
  id?: string;
  categoryId: string;

  name: string;
  shortDescription: string;
  description: string;

  originalPrice: number;
  salePrice: number;

  isFreeShip: boolean;
  isPromotion: 0 | 1;
  promotionPercent: number;

  images: string[];
  thumbnail: {
    url: string;
  };

  createdAt?: number;
  updatedAt?: number;
}
