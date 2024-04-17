export const initOrder = {
  id: '',
  title: '',
  date: '',
  description: '',
  products: [],
  productCount: 0,
  totalPrice: [{ value: 0, symbol: '', isDefault: false }]
}

export const initProduct = {
  id: '',
  serialNumber: 0,
  isNew: false,
  photo: '',
  title: '',
  type: '',
  specification: '',
  guarantee: {
    start: '',
    end: '',
  },
  price: [{
    value: 0,
    symbol: '',
    isDefault: false,
  }],
  order: 0,
  date: '',
  orderName: ''
}