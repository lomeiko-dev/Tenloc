import { IOrder } from "entities/order";

export interface IOrderPayload extends Omit<IOrder, 'id'>{}