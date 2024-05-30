import { Skin } from "./skins.t";

export interface Order {
  items: Skin[];
  total: number;
}

export interface OrderStats {
  totalOrders: number;
  totalQuantity: number;
  totalRevenue: number;
  averageOrderValue: number;
  maxOrderValue: number;
  minOrderValue: number;
  uniqueCustomers: number;
  uniqueProductsSold: number;
}
