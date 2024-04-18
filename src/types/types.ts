export interface IOrder {
  id: string;
  title: string;
  date: string;
  description: string;
  products: IProduct[];
  productCount: number;
  totalPrice: { value: number, symbol: string, isDefault: boolean }[]
}

export interface IProduct {
  id: string;
  serialNumber: number;
  isNew: boolean;
  photo: string;
  title: string;
  type: string;
  specification: string;
  guarantee: {
    start: string;
    end: string;
  };
  price: {
    value: number;
    symbol: string;
    isDefault: boolean;
  }[];
  order: number;
  date: string;
  orderName?: string;
}

export interface IItemToDelete {
  id: string;
  serialNumber?: number;
  isNew?: boolean;
  photo?: string;
  title: string;
}


