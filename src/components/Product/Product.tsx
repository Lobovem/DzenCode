import { FC } from 'react';
import { Image } from 'react-bootstrap';
import imgMonitor from '../../assets/img/monitor.png';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { BtnTrush } from '../BtnTrush/BtnTrush';
import { addDeleteItem, handleDelete } from '../../store/slices';
import {
  formatDateWithSlashFull,
  formatDateWithSlashNameMonthFull,
  formatDateWithSlashSmall,
} from '../../utils/dateFormats';
import './Product.scss';

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

interface IProductProps {
  product: IProduct;
}

export const Product: FC<IProductProps> = ({ product }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteProduct = (): void => {
    dispatch(addDeleteItem(product));
    dispatch(handleDelete());
  };

  return (
    <div className="product">
      <div
        className={
          product.isNew
            ? 'product__status product__status_smActive '
            : 'product__status product__status_smNoActive'
        }
      ></div>
      <Image className="product__img" src={imgMonitor} />

      <div className="product__titleWrap">
        <p className="product__title">{product.title}</p>
        <p className="product__titleDesc">{product.serialNumber}</p>
      </div>

      {product.isNew ? (
        <p className="product__statusActive">Free</p>
      ) : (
        <p className="product__statusNoActive">Work</p>
      )}

      <div className="product__dateWrap">
        <div>
          <p className="product__dateTitle">
            {formatDateWithSlashFull(product.guarantee.start)}
          </p>
        </div>
        <div>
          <p className="product__dateTitle">
            {formatDateWithSlashFull(product.guarantee.end)}
          </p>
        </div>
      </div>

      {product.isNew ? (
        <p className="product__statusActive">New</p>
      ) : (
        <p className="product__statusNoActive">Used</p>
      )}

      <div className="product__dateWrap">
        {product?.price.map((price, index) => (
          <p
            key={index}
            className={
              price.isDefault
                ? 'product__dateTitle'
                : 'product__dateTitle product__dateTitle_sm'
            }
          >
            {`${price.value} ${price.symbol}`}
          </p>
        ))}
      </div>

      <p className="product__title product__title_lg">
        Long long title name very long group Long long title name very long group
      </p>
      <p className="product__title product__title_lg"> Volkov Vladimir</p>
      <p className="product__title product__title_lg">{product.orderName}</p>

      <div className="product__dateWrap">
        <p className="product__dateTitle product__dateTitle_sm">
          {formatDateWithSlashSmall(product.date)}
        </p>
        <p className="product__dateTitle">
          {formatDateWithSlashNameMonthFull(product.date)}
        </p>
      </div>

      <div className="product__btnTrushWrap">
        <BtnTrush onClick={handleDeleteProduct} />
      </div>
    </div>
  );
};
