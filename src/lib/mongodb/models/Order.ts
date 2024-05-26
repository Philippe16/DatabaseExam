import { Skin } from "@/types/skins.t";
import mongoose, { Document, Schema } from "mongoose";

export interface IOrder extends Document {
  items: Skin[];
  total: number;
}

const OrderSchema = new Schema({
  items: [
    {
      id: Number,
      name: String,
      src: String,
      price: String,
      weapon_id: Number,
    },
  ],
  total: Number,
});

const Order =
  mongoose.models.Order || mongoose.model<IOrder>("Order", OrderSchema);

export default Order;
