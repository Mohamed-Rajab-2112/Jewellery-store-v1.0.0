export interface User {
  id: number;
  name: string;
  userType: string;
  verified?: boolean;
  telephone1?: number;
  telephone2?: number;
  telephone3?: number;
  email: string;
  area?: string;
  imageUrl?: string
  address?: string;
  ringCount?:number;
  braceletCount?:number;
  necklaceCount?:number;
  earringCount?:number;
  otherCount?:number;
}
