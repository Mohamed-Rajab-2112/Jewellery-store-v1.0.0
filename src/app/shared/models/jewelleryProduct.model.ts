export interface JeweleryProduct {
  id: number;
  sellerId: number;
  productName: string;
  type: string;
  sellerName: string;
  price: number;
  goldDegree: string;
  area?: string;
  imageUrl?: any[];
  publishDate: string;
}
