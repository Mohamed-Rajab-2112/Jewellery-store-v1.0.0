export interface JeweleryProduct {
  id: number;
  sellerId: number;
  productName: string;
  type: string;
  sellerName: string;
  price: string;
  place?: string;
  imageUrl?: string;
}
