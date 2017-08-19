export interface JeweleryProduct {
  id: number;
  sellerId: number;
  productName: string;
  type: string;
  price: number;
  goldDegree: string;
  imageUrl?: any[];
  publishDate: string;
  description?: string;
  sellerDetails?:any
  area: string
}
