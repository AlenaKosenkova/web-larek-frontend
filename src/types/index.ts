export type Category = 'софт-скил' | 'другое' | 'дополнительное' | 'кнопка' | 'хард-скил';
export type Price = number | null;
export type PaymentMethod = 'Онлайн' | 'При получении';

export interface IProductItem {
  id: string;
  description?: string;
  image?: string;
  title: string;
  category?: Category;
  price: Price;
}

export interface IProductList extends IProductItem {
  id: string;
  image: string;
  title: string;
  category: Category;
  price: Price;
}

export interface IDataUser {
  paymentMethod: PaymentMethod;
  address: string;
  phone: number;
  email: string;
}

export interface IOrder extends IProductItem {
  id: string;
  total: number;
}

export interface IBasket extends IProductItem, IDataUser, IOrder {
  id: string;
  title: string;
  price: Price;
  total: number;
  paymentMethod: PaymentMethod;
  address: string;
  email: string;
}

